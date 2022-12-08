"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[7089],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3,sidebar_label:"EMR on EKS with Apache Yunikorn"},i="EMR on EKS with [Apache YuniKorn](https://yunikorn.apache.org/)",s={unversionedId:"amazon-emr-on-eks/emr-eks-yunikorn",id:"amazon-emr-on-eks/emr-eks-yunikorn",title:"EMR on EKS with [Apache YuniKorn](https://yunikorn.apache.org/)",description:"Introduction",source:"@site/docs/amazon-emr-on-eks/emr-eks-yunikorn.md",sourceDirName:"amazon-emr-on-eks",slug:"/amazon-emr-on-eks/emr-eks-yunikorn",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-yunikorn",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/amazon-emr-on-eks/emr-eks-yunikorn.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"EMR on EKS with Apache Yunikorn"},sidebar:"docs",previous:{title:"EMR on EKS with Karpenter",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-karpenter"},next:{title:"EMR on EKS with FSx for Lustre",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-fsx-for-lustre"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Prerequisites:",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Verify the resources",id:"verify-the-resources",level:2},{value:"Setup Amazon Managed Grafana with SSO",id:"setup-amazon-managed-grafana-with-sso",level:3},{value:"Execute EMR Spark Job with Apache YuniKorn Gang Scheduling",id:"execute-emr-spark-job-with-apache-yunikorn-gang-scheduling",level:2},{value:"Cleanup",id:"cleanup",level:2}],p={toc:u};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"emr-on-eks-with-apache-yunikorn"},"EMR on EKS with ",(0,n.kt)("a",{parentName:"h1",href:"https://yunikorn.apache.org/"},"Apache YuniKorn")),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In this post, we learn how to deploy highly scalable EMR on EKS Clusters with ",(0,n.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org/"},"Apache YuniKorn")," batch scheduler and Cluster Autoscaler."),(0,n.kt)("p",null,"Apache YuniKorn is designed to run Batch workloads on Kubernetes."),(0,n.kt)("p",null,"Key features as follows..."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Application-aware scheduling"),(0,n.kt)("li",{parentName:"ol"},"Fine-grained control over resources for different tenants"),(0,n.kt)("li",{parentName:"ol"},"Job ordering and queueing"),(0,n.kt)("li",{parentName:"ol"},"Resource allocation fairness with priorities"),(0,n.kt)("li",{parentName:"ol"},"Automatic reservations for outstanding requests"),(0,n.kt)("li",{parentName:"ol"},"Autoscaling"),(0,n.kt)("li",{parentName:"ol"},"Gang Scheduling Spark jobs")),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Apache YuniKorn",src:a(579).Z,width:"3060",height:"1683"})),(0,n.kt)("h2",{id:"deploying-the-solution"},"Deploying the Solution"),(0,n.kt)("p",null,"In this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/emr-eks-yunikorn"},"example"),", you will provision the following resources required to run Spark Jobs using EMR on EKS, as well as monitor spark job metrics using ",(0,n.kt)("strong",{parentName:"p"},"Amazon Managed Prometheus")," and ",(0,n.kt)("strong",{parentName:"p"},"Amazon Managed Grafana"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Creates EKS Cluster Control plane with public endpoint (for demo purpose only)"),(0,n.kt)("li",{parentName:"ul"},"Three managed node groups",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Core Node group with 3 AZs for running system critical pods. e.g., Cluster Autoscaler, CoreDNS, Observability, Logging etc."),(0,n.kt)("li",{parentName:"ul"},"Spark Driver Node group with ON_DEMAND instances for Spark Drivers with single AZ"),(0,n.kt)("li",{parentName:"ul"},"Spark Executor Node group with SPOT instances for Spark Executors with single AZ"))),(0,n.kt)("li",{parentName:"ul"},"Enable EMR on EKS and creates two Data teams (",(0,n.kt)("inlineCode",{parentName:"li"},"emr-data-team-a"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"emr-data-team-b"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Creates new namespace for each team"),(0,n.kt)("li",{parentName:"ul"},"Creates Kubernetes role and role binding(",(0,n.kt)("inlineCode",{parentName:"li"},"emr-containers")," user) for the above namespace"),(0,n.kt)("li",{parentName:"ul"},"New IAM role for the team execution role"),(0,n.kt)("li",{parentName:"ul"},"Update AWS_AUTH config map with  emr-containers user and AWSServiceRoleForAmazonEMRContainers role"),(0,n.kt)("li",{parentName:"ul"},"Create a trust relationship between the job execution role and the identity of the EMR managed service account"))),(0,n.kt)("li",{parentName:"ul"},"EMR Virtual Cluster and IAM policy for ",(0,n.kt)("inlineCode",{parentName:"li"},"emr-data-team-a")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"emr-data-team-b")),(0,n.kt)("li",{parentName:"ul"},"Amazon Managed Prometheus workspace to remote write metrics from Prometheus server"),(0,n.kt)("li",{parentName:"ul"},"Deploys the following Kubernetes Add-ons",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Managed Add-ons",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VPC CNI, CoreDNS, KubeProxy, AWS EBS CSi Driver"))),(0,n.kt)("li",{parentName:"ul"},"Self Managed Add-ons",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache YuniKorn, Metrics server with HA, CoreDNS Cluster proportional Autoscaler, Cluster Autoscaler, Prometheus Server and Node Exporter, VPA for Prometheus, AWS for FluentBit, CloudWatchMetrics for EKS")))))),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,n.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: Currently Amazon Managed Prometheus supported only in selected regions. Please see this ",(0,n.kt)("a",{parentName:"em",href:"https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html"},"userguide")," for supported regions.")),(0,n.kt)("h3",{id:"deploy"},"Deploy"),(0,n.kt)("p",null,"Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,n.kt)("p",null,"Navigate into one of the example directories and run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/analytics/terraform/emr-eks-yunikorn\nterraform init\n")),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS_REGION")," and Run Terraform plan to verify the resources created by this execution."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_REGION="us-west-2" # Change region according to your needs.\nterraform plan\n')),(0,n.kt)("p",null,"Deploy the pattern"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,n.kt)("p",null,"Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"yes")," to apply."),(0,n.kt)("h2",{id:"verify-the-resources"},"Verify the resources"),(0,n.kt)("p",null,"Let\u2019s verify the resources created by ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply"),"."),(0,n.kt)("p",null,"Verify the Amazon EKS Cluster and Amazon Managed service for Prometheus."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks describe-cluster --name emr-eks-yunikorn\n\naws amp list-workspaces --alias amp-ws-emr-eks-yunikorn\n")),(0,n.kt)("p",null,"Verify EMR on EKS Namespaces ",(0,n.kt)("inlineCode",{parentName:"p"},"emr-data-team-a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"emr-data-team-b")," and Pod status for ",(0,n.kt)("inlineCode",{parentName:"p"},"Prometheus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Vertical Pod Autoscaler"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Metrics Server")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster Autoscaler"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks --region <ENTER_YOUR_REGION> update-kubeconfig --name emr-eks-yunikorn # Creates k8s config file to authenticate with EKS Cluster\n\nkubectl get nodes # Output shows the EKS Managed Node group nodes\n\nkubectl get ns | grep emr-data-team # Output shows emr-data-team-a and emr-data-team-b namespaces for data teams\n\nkubectl get pods --namespace=prometheus # Output shows Prometheus server and Node exporter pods\n\nkubectl get pods --namespace=vpa  # Output shows Vertical Pod Autoscaler pods\n\nkubectl get pods --namespace=kube-system | grep  metrics-server # Output shows Metric Server pod\n\nkubectl get pods --namespace=kube-system | grep  cluster-autoscaler # Output shows Cluster Autoscaler pod\n")),(0,n.kt)("h3",{id:"setup-amazon-managed-grafana-with-sso"},"Setup Amazon Managed Grafana with SSO"),(0,n.kt)("p",null,"Currently, this step is manual. Please follow the steps in this ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/mt/monitoring-amazon-emr-on-eks-with-amazon-managed-prometheus-and-amazon-managed-grafana/"},"blog")," to create Amazon Managed Grafana with SSO enabled in your account.\nYou can visualize the Spark jobs runs and metrics using Amazon Managed Prometheus and Amazon Managed Grafana."),(0,n.kt)("h2",{id:"execute-emr-spark-job-with-apache-yunikorn-gang-scheduling"},"Execute EMR Spark Job with Apache YuniKorn Gang Scheduling"),(0,n.kt)("p",null,"Execute the Spark job using the below shell script."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This script requires three input parameters in which ",(0,n.kt)("inlineCode",{parentName:"li"},"EMR_VIRTUAL_CLUSTER_ID")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"EMR_JOB_EXECUTION_ROLE_ARN")," values can be extracted from ",(0,n.kt)("inlineCode",{parentName:"li"},"terraform apply")," output values."),(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("inlineCode",{parentName:"li"},"S3_BUCKET"),", Either create a new S3 bucket or use an existing S3 bucket to store the scripts, input and output data required to run this sample job.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"EMR_VIRTUAL_CLUSTER_NAME=$1   # Terraform output variable is `emrcontainers_virtual_cluster_name`\nS3_BUCKET=$2                  # This script requires s3 bucket as input parameter e.g., s3://<bucket-name>\nEMR_JOB_EXECUTION_ROLE_ARN=$3 # Terraform output variable is `emr_on_eks_role_arn`\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This shell script downloads the test data to your local machine and uploads to S3 bucket. Verify the shell script before running the job.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/analytics/terraform/emr-eks-yunikorn/examples/emr-yunikorn-gang-scheduling/\n\n# Execute EMR Spark Job with Apache YuniKorn Gang Scheduling feature\n./emr-eks-yunikorn-gang-scheduling.sh emr-eks-yunikorn-emr-data-team-a s3://<S3_BUCKET_NAME> arn:aws:iam::<YOUR_ACCOUNT_ID>:role/emr-eks-yunikorn-emr-eks-data-team-a\n\n")),(0,n.kt)("p",null,"Verify the job execution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace=emr-data-team-a -w\n")),(0,n.kt)("h2",{id:"cleanup"},"Cleanup"),(0,n.kt)("p",null,"To clean up your environment, destroy the Terraform modules in reverse order with ",(0,n.kt)("inlineCode",{parentName:"p"},"--target")," option to avoid destroy failures."),(0,n.kt)("p",null,"Destroy the Kubernetes Add-ons, EKS cluster with Node groups and VPC"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'terraform destroy -target="module.eks_blueprints_kubernetes_addons" -auto-approve\nterraform destroy -target="module.eks_blueprints" -auto-approve\nterraform destroy -target="module.vpc" -auto-approve\n')),(0,n.kt)("p",null,"Finally, destroy any additional resources that are not in the above modules"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform destroy -auto-approve\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment")))}m.isMDXComponent=!0},579:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/yunikorn-56ae296071d7f89d5e0de755c1d026ca.png"}}]);