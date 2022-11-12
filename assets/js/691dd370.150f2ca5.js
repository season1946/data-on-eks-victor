"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[7141],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Airflow on EKS",sidebar_position:3},l="Self-managed Apache Airflow deployment for EKS",i={unversionedId:"job-schedulers-eks/self-managed-airflow",id:"job-schedulers-eks/self-managed-airflow",title:"Airflow on EKS",description:"This pattern deploys the production ready Self-managed Apache Airflow deployment on EKS.",source:"@site/docs/job-schedulers-eks/self-managed-airflow.md",sourceDirName:"job-schedulers-eks",slug:"/job-schedulers-eks/self-managed-airflow",permalink:"/data-on-eks/docs/job-schedulers-eks/self-managed-airflow",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/job-schedulers-eks/self-managed-airflow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Airflow on EKS",sidebar_position:3},sidebar:"docs",previous:{title:"Amazon MWAA",permalink:"/data-on-eks/docs/job-schedulers-eks/aws-managed-airflow"},next:{title:"Argo Workflows on EKS",permalink:"/data-on-eks/docs/job-schedulers-eks/argo-workflows-eks"}},s={},p=[{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Verify the resources",id:"verify-the-resources",level:2},{value:"Create kubectl config",id:"create-kubectl-config",level:3},{value:"Describe the EKS Cluster",id:"describe-the-eks-cluster",level:3},{value:"Verify the EFS PV and PVC created by this deployment",id:"verify-the-efs-pv-and-pvc-created-by-this-deployment",level:3},{value:"Verify the EFS Filesystem",id:"verify-the-efs-filesystem",level:3},{value:"Verify S3 bucket created for Airflow logs",id:"verify-s3-bucket-created-for-airflow-logs",level:3},{value:"Verify the Airflow deployment",id:"verify-the-airflow-deployment",level:3},{value:"Fetch Postgres RDS password",id:"fetch-postgres-rds-password",level:3},{value:"Login to Airflow Web UI",id:"login-to-airflow-web-ui",level:3},{value:"Create S3 Connection from Airflow Web UI",id:"create-s3-connection-from-airflow-web-ui",level:3},{value:"Execute Sample Airflow Job",id:"execute-sample-airflow-job",level:3},{value:"Cleanup",id:"cleanup",level:2}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"self-managed-apache-airflow-deployment-for-eks"},"Self-managed Apache Airflow deployment for EKS"),(0,n.kt)("p",null,"This pattern deploys the production ready ",(0,n.kt)("strong",{parentName:"p"},"Self-managed ",(0,n.kt)("a",{parentName:"strong",href:"https://airflow.apache.org/docs/apache-airflow/stable/"},"Apache Airflow"))," deployment on EKS.\nThe following resources created by this example."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VPC, 3 Private Subnets, 3 Public Subnets for Public ALB, 3 Database Subnets for RDS"),(0,n.kt)("li",{parentName:"ul"},"PostgreSQL RDS security group"),(0,n.kt)("li",{parentName:"ul"},"Creates EKS Cluster Control plane with public endpoint (for demo purpose only) with one managed node group"),(0,n.kt)("li",{parentName:"ul"},"Deploys Managed add-ons vpc_cni, coredns, kube-proxy"),(0,n.kt)("li",{parentName:"ul"},"Deploys Self-managed add-ons aws_efs_csi_driver, aws_for_fluentbit, aws_load_balancer_controller, prometheus"),(0,n.kt)("li",{parentName:"ul"},"Apache Airflow add-on with production ready Helm configuration"),(0,n.kt)("li",{parentName:"ul"},"S3 bucket for Apache Airflow logs and EFS storage class for mounting dags to Airflow pods")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites:"),(0,n.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform"))),(0,n.kt)("h2",{id:"deploy"},"Deploy"),(0,n.kt)("p",null,"Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,n.kt)("p",null,"Navigate into one of the example directories and run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/schedulers/terraform/self-managed-airflow\nterraform init\n")),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS_REGION")," and Run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform plan")," to verify the resources created by this execution."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_REGION="us-west-2"\nterraform plan\n')),(0,n.kt)("p",null,"Deploy the pattern"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,n.kt)("p",null,"Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"yes")," to apply."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Rerun ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply")," if your execution timed out.")),(0,n.kt)("h2",{id:"verify-the-resources"},"Verify the resources"),(0,n.kt)("h3",{id:"create-kubectl-config"},"Create kubectl config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks --region us-west-2 update-kubeconfig --name self-managed-airflow\n")),(0,n.kt)("h3",{id:"describe-the-eks-cluster"},"Describe the EKS Cluster"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks describe-cluster --name self-managed-airflow\n")),(0,n.kt)("h3",{id:"verify-the-efs-pv-and-pvc-created-by-this-deployment"},"Verify the EFS PV and PVC created by this deployment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pvc -n airflow  \n\nNAME           STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nairflow-dags   Bound    pvc-157cc724-06d7-4171-a14d-something   10Gi       RWX            efs-sc         73m\n\nkubectl get pv -n airflow\nNAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                          STORAGECLASS   REASON   AGE\npvc-157cc724-06d7-4171-a14d-something   10Gi       RWX            Delete           Bound    airflow/airflow-dags           efs-sc                  74m\n\n")),(0,n.kt)("h3",{id:"verify-the-efs-filesystem"},"Verify the EFS Filesystem"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'aws efs describe-file-systems --query "FileSystems[*].FileSystemId" --output text\n')),(0,n.kt)("h3",{id:"verify-s3-bucket-created-for-airflow-logs"},"Verify S3 bucket created for Airflow logs"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bashell"},"aws s3 ls | grep airflow-logs-\n")),(0,n.kt)("h3",{id:"verify-the-airflow-deployment"},"Verify the Airflow deployment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bashell"},"kubectl get deployment -n airflow\n\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nairflow-pgbouncer   1/1     1            1           77m\nairflow-scheduler   2/2     2            2           77m\nairflow-statsd      1/1     1            1           77m\nairflow-triggerer   1/1     1            1           77m\nairflow-webserver   2/2     2            2           77m\n\n")),(0,n.kt)("h3",{id:"fetch-postgres-rds-password"},"Fetch Postgres RDS password"),(0,n.kt)("p",null,"Amazon Postgres RDS database password can be fetched from the Secrets manager"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Login to AWS console and open secrets manager"),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"postgres")," secret name"),(0,n.kt)("li",{parentName:"ul"},"Click on Retrieve secret value button to verify the Postgres DB master password")),(0,n.kt)("h3",{id:"login-to-airflow-web-ui"},"Login to Airflow Web UI"),(0,n.kt)("p",null,"This deployment creates an Ingress object with public LoadBalancer(internet-facing) for demo purpose\nFor production workloads, you can modify ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," to choose ",(0,n.kt)("inlineCode",{parentName:"p"},"internal")," LB. In addition, it's also recommended to use Route53 for Airflow domain and ACM for generating certificates to access Airflow on HTTPS port."),(0,n.kt)("p",null,"Execute the following command to get the ALB DNS name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ingress -n airflow\n\nNAME                      CLASS   HOSTS   ADDRESS                                                                PORTS   AGE\nairflow-airflow-ingress   alb     *       k8s-dataengineering-c92bfeb177-randomnumber.us-west-2.elb.amazonaws.com   80      88m\n\n")),(0,n.kt)("p",null,"The above ALB URL will be different for you deployment. So use your URL and open it in a brower"),(0,n.kt)("p",null,"e.g., Open URL ",(0,n.kt)("inlineCode",{parentName:"p"},"http://k8s-dataengineering-c92bfeb177-randomnumber.us-west-2.elb.amazonaws.com/")," in a browser"),(0,n.kt)("p",null,"By default, Airflow creates a default user with ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," and password as ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")),(0,n.kt)("p",null,"Login with Admin user and password and create new users for Admin and Viewer roles and delete the default admin user"),(0,n.kt)("h3",{id:"create-s3-connection-from-airflow-web-ui"},"Create S3 Connection from Airflow Web UI"),(0,n.kt)("p",null,"This step is critical for writing the Airflow logs to S3 bucket."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Login to Airflow WebUI with ",(0,n.kt)("inlineCode",{parentName:"li"},"admin")," and password as ",(0,n.kt)("inlineCode",{parentName:"li"},"admin")," using ALB URL"),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"Admin")," dropdown and Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Connections")),(0,n.kt)("li",{parentName:"ul"},'Click on "+" button to add a new record'),(0,n.kt)("li",{parentName:"ul"},"Enter Connection Id as ",(0,n.kt)("inlineCode",{parentName:"li"},"aws_s3_conn"),", Connection Type as ",(0,n.kt)("inlineCode",{parentName:"li"},"Amazon Web Services")," and Extra as ",(0,n.kt)("inlineCode",{parentName:"li"},'{"region_name": "<ENTER_YOUR_REGION>"}')),(0,n.kt)("li",{parentName:"ul"},"Click on Save button")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Airflow AWS Connection",src:a(4569).Z,width:"2518",height:"1792"})),(0,n.kt)("h3",{id:"execute-sample-airflow-job"},"Execute Sample Airflow Job"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Login to Airflow WebUI"),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"DAGs")," link on the top of the page. This will show two dags pre-created by the GitSync feature"),(0,n.kt)("li",{parentName:"ul"},"Execute the first DAG by clicking on Play button (",(0,n.kt)("inlineCode",{parentName:"li"},">"),")"),(0,n.kt)("li",{parentName:"ul"},"Verify the DAG execution from ",(0,n.kt)("inlineCode",{parentName:"li"},"Graph")," link"),(0,n.kt)("li",{parentName:"ul"},"All the Tasks will go green after few minutes"),(0,n.kt)("li",{parentName:"ul"},"Click on one of the green Task which opens a popup with log link where you can verify the logs pointing to S3")),(0,n.kt)("h2",{id:"cleanup"},"Cleanup"),(0,n.kt)("p",null,"To clean up your environment, destroy the Terraform modules in reverse order."),(0,n.kt)("p",null,"Destroy the Kubernetes Add-ons, EKS cluster with Node groups and VPC"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'terraform destroy -target="module.db" -auto-approve\nterraform destroy -target="module.eks_blueprints_kubernetes_addons" -auto-approve\nterraform destroy -target="module.eks_blueprints" -auto-approve\n')),(0,n.kt)("p",null,"Finally, destroy any additional resources that are not in the above modules"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform destroy -auto-approve\n")),(0,n.kt)("p",null,"Make sure all the S3 buckets are empty and deleted once your test is finished"),(0,n.kt)("hr",null))}u.isMDXComponent=!0},4569:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aws-s3-conn-8f53ac13ed2d6972a3e4601444399c31.png"}}]);