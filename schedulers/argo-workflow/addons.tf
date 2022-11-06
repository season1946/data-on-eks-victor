module "eks_blueprints_kubernetes_addons" {
  source = "github.com/aws-ia/terraform-aws-eks-blueprints//modules/kubernetes-addons?ref=v4.15.0"

  eks_cluster_id       = module.eks_blueprints.eks_cluster_id
  eks_cluster_endpoint = module.eks_blueprints.eks_cluster_endpoint
  eks_oidc_provider    = module.eks_blueprints.oidc_provider
  eks_cluster_version  = module.eks_blueprints.eks_cluster_version

  #---------------------------------------------------------------
  # Amazon EKS Managed Add-ons
  #---------------------------------------------------------------
  # EKS Addons
  enable_amazon_eks_vpc_cni            = true
  enable_amazon_eks_coredns            = true
  enable_amazon_eks_kube_proxy         = true
  enable_amazon_eks_aws_ebs_csi_driver = true

  #---------------------------------------------------------------
  # CoreDNS Autoscaler helps to scale for large EKS Clusters
  #   Further tuning for CoreDNS is to leverage NodeLocal DNSCache -> https://kubernetes.io/docs/tasks/administer-cluster/nodelocaldns/
  #---------------------------------------------------------------
  enable_coredns_autoscaler = true

  #---------------------------------------------------------------
  # Metrics Server
  #---------------------------------------------------------------
  enable_metrics_server = true

  #---------------------------------------------------------------
  # Cluster Autoscaler
  #---------------------------------------------------------------
  enable_cluster_autoscaler = true

  #---------------------------------------------------------------
  # Spark Operator Add-on
  #---------------------------------------------------------------
  enable_spark_k8s_operator = true

  #---------------------------------------------------------------
  # Apache YuniKorn Add-on
  #---------------------------------------------------------------
  enable_yunikorn = true
  #---------------------------------------------------------------
  # Argo Events Add-on
  #---------------------------------------------------------------
  enable_argo_workflows = true
  #---------------------------------------------------------------
  # Spark History Server Addon
  #---------------------------------------------------------------
  enable_spark_history_server = true
  # This example is using a managed s3 readonly policy. It' recommended to create your own IAM Policy
  spark_history_server_irsa_policies = ["arn:${data.aws_partition.current.id}:iam::aws:policy/AmazonS3ReadOnlyAccess"]
  spark_history_server_helm_config = {
    name       = "spark-history-server"
    chart      = "spark-history-server"
    repository = "https://hyper-mesh.github.io/spark-history-server"
    version    = "1.0.0"
    namespace  = "spark-history-server"
    timeout    = "300"
    values = [
      <<-EOT
        serviceAccount:
          create: false

        sparkHistoryOpts: "-Dspark.history.fs.logDirectory=s3a://${aws_s3_bucket.this.id}/${aws_s3_object.this.key}"

        # Update spark conf according to your needs
        sparkConf: |-
          spark.hadoop.fs.s3a.aws.credentials.provider=com.amazonaws.auth.WebIdentityTokenCredentialsProvider
          spark.history.fs.eventLog.rolling.maxFilesToRetain=5
          spark.hadoop.fs.s3a.impl=org.apache.hadoop.fs.s3a.S3AFileSystem
          spark.eventLog.enabled=true
          spark.history.ui.port=18080

        resources:
          limits:
            cpu: 200m
            memory: 2G
          requests:
            cpu: 100m
            memory: 1G
        EOT
    ]
  }

}


#---------------------------------------------------------------
# Kubernetes Cluster role for argo workflows to run spark jobs
#---------------------------------------------------------------
resource "kubernetes_cluster_role" "spark_op_role" {
  metadata {
    name = "spark-op-role"
  }

  rule {
    verbs      = ["*"]
    api_groups = ["sparkoperator.k8s.io"]
    resources  = ["sparkapplications"]
  }
}
#---------------------------------------------------------------
# Kubernetes Role binding role for argo workflows
#---------------------------------------------------------------
resource "kubernetes_role_binding" "spark_role_binding" {
  metadata {
    name      = "argo-workflows-spark-rolebinding"
    namespace = "argo-workflows"
  }

  subject {
    kind      = "ServiceAccount"
    name      = "default"
    namespace = "argo-workflows"
  }

  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = kubernetes_cluster_role.spark_op_role.id
  }
}
resource "kubernetes_role_binding" "admin_rolebinding" {
  metadata {
    name      = "argo-workflows-admin-rolebinding"
    namespace = "argo-workflows"
  }

  subject {
    kind      = "ServiceAccount"
    name      = "default"
    namespace = "argo-workflows"
  }

  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = "admin"
  }
}

#---------------------------------------------------------------
# IRSA for Argo events to read SQS
#---------------------------------------------------------------
module "irsa_argo_events" {
  source = "github.com/aws-ia/terraform-aws-eks-blueprints//modules/irsa?ref=v4.15.0"

  create_kubernetes_namespace = true
  kubernetes_namespace        = "argo-events"
  kubernetes_service_account  = "event-sa"
  irsa_iam_policies           = [data.aws_iam_policy.sqs.arn]
  eks_cluster_id              = module.eks_blueprints.eks_cluster_id
  eks_oidc_provider_arn       = "arn:${data.aws_partition.current.partition}:iam::${data.aws_caller_identity.current.account_id}:oidc-provider/${module.eks_blueprints.oidc_provider}"
}

data "aws_iam_policy" "sqs" {
  name = "AmazonSQSReadOnlyAccess"
}

#---------------------------------------------------------------
# S3 bucket for Spark history server
#---------------------------------------------------------------
#tfsec:ignore:aws-s3-enable-bucket-logging tfsec:ignore:aws-s3-enable-versioning
resource "aws_s3_bucket" "this" {
  bucket_prefix = format("%s-%s", "spark", data.aws_caller_identity.current.account_id)
  tags          = local.tags
}

resource "aws_s3_bucket_acl" "this" {
  bucket = aws_s3_bucket.this.id
  acl    = "private"
}

#tfsec:ignore:aws-s3-encryption-customer-key
resource "aws_s3_bucket_server_side_encryption_configuration" "this" {
  bucket = aws_s3_bucket.this.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "this" {
  bucket                  = aws_s3_bucket.this.id
  block_public_acls       = true
  block_public_policy     = true
  restrict_public_buckets = true
  ignore_public_acls      = true
}

# Creating an s3 bucket prefix. Ensure you copy spark event logs under this path to visualize the dags
resource "aws_s3_object" "this" {
  bucket       = aws_s3_bucket.this.id
  acl          = "private"
  key          = "logs/"
  content_type = "application/x-directory"

  depends_on = [
    aws_s3_bucket_acl.this,
    aws_s3_bucket_public_access_block.this,
    aws_s3_bucket_server_side_encryption_configuration.this
  ]
}

#---------------------------------------------------------------
# IRSA for Spark driver/executor pods to write to s3 for spark history server
#---------------------------------------------------------------
module "irsa_spark_s3log" {
  source = "github.com/aws-ia/terraform-aws-eks-blueprints//modules/irsa?ref=v4.15.0"

  eks_cluster_id             = local.name
  eks_oidc_provider_arn      = module.eks_blueprints.eks_oidc_provider_arn
  irsa_iam_policies          = [aws_iam_policy.spark.arn]
  kubernetes_namespace       = "argo-workflows"
  kubernetes_service_account = "spark-s3"
}

#---------------------------------------------------------------
# Creates IAM policy for IRSA. Provides IAM permissions for Spark driver/executor pods
#---------------------------------------------------------------
resource "aws_iam_policy" "spark" {
  description = "IAM role policy for Spark Job execution"
  name        = "${local.name}-spark-irsa"
  policy      = data.aws_iam_policy_document.spark_operator.json
}

#---------------------------------------------------------------
# Kubernetes Cluster role for service Account spark-s3
#---------------------------------------------------------------
resource "kubernetes_cluster_role" "spark_s3_role" {
  metadata {
    name = "spark-cluster-role"
  }

  rule {
    verbs      = ["get", "list", "watch"]
    api_groups = [""]
    resources  = ["namespaces", "nodes", "persistentvolumes"]
  }

  rule {
    verbs      = ["list", "watch"]
    api_groups = ["storage.k8s.io"]
    resources  = ["storageclasses"]
  }
  rule {
    verbs      = ["get", "list", "watch", "describe", "create", "edit", "delete", "deletecollection", "annotate", "patch", "label"]
    api_groups = [""]
    resources  = ["serviceaccounts", "services", "configmaps", "events", "pods", "pods/log"]
  }

  rule {
    verbs      = ["create", "patch", "delete", "watch"]
    api_groups = [""]
    resources  = ["secrets"]
  }

  rule {
    verbs      = ["get", "list", "watch", "describe", "create", "edit", "delete", "annotate", "patch", "label"]
    api_groups = ["apps"]
    resources  = ["statefulsets", "deployments"]
  }

  rule {
    verbs      = ["get", "list", "watch", "describe", "create", "edit", "delete", "annotate", "patch", "label"]
    api_groups = ["batch"]
    resources  = ["jobs"]
  }

  rule {
    verbs      = ["get", "list", "watch", "describe", "create", "edit", "delete", "annotate", "patch", "label"]
    api_groups = ["extensions"]
    resources  = ["ingresses"]
  }

  rule {
    verbs      = ["get", "list", "watch", "describe", "create", "edit", "delete", "deletecollection", "annotate", "patch", "label"]
    api_groups = ["rbac.authorization.k8s.io"]
    resources  = ["roles", "rolebindings"]
  }

  depends_on = [module.irsa_spark_s3log]
}
#---------------------------------------------------------------
# Kubernetes Cluster Role binding role for service Account spark-s3
#---------------------------------------------------------------
resource "kubernetes_cluster_role_binding" "spark_s3_role_binding" {
  metadata {
    name = "spark-cluster-role-bind"
  }

  subject {
    kind      = "ServiceAccount"
    name      = "spark-s3"
    namespace = "argo-workflows"
  }

  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = kubernetes_cluster_role.spark_s3_role.id
  }

  depends_on = [module.irsa_spark_s3log]
}
