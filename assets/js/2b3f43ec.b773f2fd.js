"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[3258],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(a),d=o,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return a?n.createElement(f,r(r({ref:t},u),{},{components:a})):n.createElement(f,r({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},769:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),o=a(5697),i=a.n(o),r=a(6010);const l="collapsibleContent_q3kw",s="header_QCEw",m="icon_PckA",u="content_qLC1",c="expanded_iGsi";function p(e){let{children:t,header:a}=e;const[o,i]=(0,n.useState)(!1);return n.createElement("div",{className:l},n.createElement("div",{className:(0,r.Z)(s,{[c]:o}),onClick:()=>{i(!o)}},a,n.createElement("span",{className:(0,r.Z)(m,{[c]:o})})),o&&n.createElement("div",{className:u},t))}p.propTypes={children:i().node.isRequired,header:i().node.isRequired};const d=p},7778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),o=(a(7294),a(3905));a(769);const i={sidebar_position:3,sidebar_label:"Kubeflow on AWS"},r="Kubeflow on AWS",l={unversionedId:"ai-ml/kubeflow",id:"ai-ml/kubeflow",title:"Kubeflow on AWS",description:"Introduction",source:"@site/docs/ai-ml/kubeflow.md",sourceDirName:"ai-ml",slug:"/ai-ml/kubeflow",permalink:"/data-on-eks/docs/ai-ml/kubeflow",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/ai-ml/kubeflow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Kubeflow on AWS"},sidebar:"docs",previous:{title:"Ray on EKS",permalink:"/data-on-eks/docs/ai-ml/ray"},next:{title:"Job Schedulers on EKS",permalink:"/data-on-eks/docs/category/job-schedulers-on-eks"}},s={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Kubeflow",id:"kubeflow",level:2},{value:"AWS Features for Kubeflow",id:"aws-features-for-kubeflow",level:2},{value:"Architecture",id:"architecture",level:3},{value:"Manage AWS compute environments",id:"manage-aws-compute-environments",level:3},{value:"CloudWatch Logs and Metrics",id:"cloudwatch-logs-and-metrics",level:3},{value:"Load balancing, certificates, and identity management",id:"load-balancing-certificates-and-identity-management",level:3},{value:"AWS database and storage solutions",id:"aws-database-and-storage-solutions",level:3},{value:"Integrate with Amazon SageMaker",id:"integrate-with-amazon-sagemaker",level:3},{value:"Deployment",id:"deployment",level:2}],u={toc:m};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubeflow-on-aws"},"Kubeflow on AWS"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kubeflow on AWS")," is an open source distribution of ",(0,o.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/"},"Kubeflow")," that allows customers to build machine learning systems with ready-made AWS service integrations. Use ",(0,o.kt)("strong",{parentName:"p"},"Kubeflow on AWS")," to streamline data science tasks and build highly reliable, secure, and scalable machine learning systems with reduced operational overheads. "),(0,o.kt)("p",null,"The open source repository for the ",(0,o.kt)("strong",{parentName:"p"},"Kubeflow on AWS")," distribution is available under ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/awslabs/kubeflow-manifests"},"awslabs")," GitHub organization."),(0,o.kt)("h2",{id:"kubeflow"},"Kubeflow"),(0,o.kt)("p",null,"Kubeflow is the machine learning toolkit for Kubernetes. It provides a set of tools that enable developers to build, deploy, and manage machine learning workflows at scale. The following diagram shows Kubeflow as a platform for arranging the components of your ML system on top of Kubernetes:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Kubeflow",src:a(8306).Z,width:"960",height:"576"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Source: ",(0,o.kt)("a",{parentName:"em",href:"https://www.kubeflow.org/docs/started/architecture/"},"https://www.kubeflow.org/docs/started/architecture/"))),(0,o.kt)("h2",{id:"aws-features-for-kubeflow"},"AWS Features for Kubeflow"),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"KubeflowOnAws",src:a(9916).Z,width:"1289",height:"707"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Source: ",(0,o.kt)("a",{parentName:"em",href:"https://aws.amazon.com/blogs/machine-learning/build-and-deploy-a-scalable-machine-learning-system-on-kubernetes-with-kubeflow-on-aws/"},"https://aws.amazon.com/blogs/machine-learning/build-and-deploy-a-scalable-machine-learning-system-on-kubernetes-with-kubeflow-on-aws/"))),(0,o.kt)("p",null,"Running ",(0,o.kt)("strong",{parentName:"p"},"Kubeflow on AWS")," gives you the following feature benefits and configuration options:"),(0,o.kt)("h3",{id:"manage-aws-compute-environments"},"Manage AWS compute environments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provision and manage your Amazon Elastic Kubernetes Service (EKS) clusters with eksctl and easily configure multiple compute and GPU node configurations."),(0,o.kt)("li",{parentName:"ul"},"Use AWS-optimized container images, based on ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/deep-learning-containers/latest/devguide/what-is-dlc.html"},"AWS Deep Learning Containers"),", with Kubeflow Notebooks.")),(0,o.kt)("h3",{id:"cloudwatch-logs-and-metrics"},"CloudWatch Logs and Metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integrate ",(0,o.kt)("strong",{parentName:"li"},"Kubeflow on AWS")," with ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cloudwatch/"},"Amazon CloudWatch")," for persistent logging and metrics on EKS clusters and Kubeflow pods."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html"},"AWS Container Insights")," to collect, aggregate, and summarize metrics and logs from your containerized applications and microservices.")),(0,o.kt)("h3",{id:"load-balancing-certificates-and-identity-management"},"Load balancing, certificates, and identity management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manage external traffic with ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html"},"AWS Application Load Balancer"),"."),(0,o.kt)("li",{parentName:"ul"},"Get started with TLS authentication using ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/certificate-manager/"},"AWS Certificate Manager")," and ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cognito/"},"AWS Cognito"),".")),(0,o.kt)("h3",{id:"aws-database-and-storage-solutions"},"AWS database and storage solutions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integrate Kubeflow with ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/rds/"},"Amazon Relational Database Service (RDS)")," for a highly scalable pipelines and metadata store."),(0,o.kt)("li",{parentName:"ul"},"Deploy Kubeflow with integrations for ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"Amazon S3")," for an easy-to-use pipeline artifacts store."),(0,o.kt)("li",{parentName:"ul"},"Use Kubeflow with ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/efs/"},"Amazon Elastic File System (EFS)")," for a simple, scalabale, and serverless storage solution."),(0,o.kt)("li",{parentName:"ul"},"Leverage the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/aws-fsx-csi-driver"},"Amazon FSx CSI driver")," to manage Lustre file systems which are optimized for compute-intensive workloads, such as high-performance computing and machine learning. ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/fsx/lustre/"},"Amazon FSx for Lustre")," can scale to hundreds of GBps of throughput and millions of IOPS.")),(0,o.kt)("h3",{id:"integrate-with-amazon-sagemaker"},"Integrate with Amazon SageMaker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("strong",{parentName:"li"},"Kubeflow on AWS")," with ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/sagemaker/"},"Amazon SageMaker")," to create hybrid machine learning workflows."),(0,o.kt)("li",{parentName:"ul"},"Train, tune, and deploy machine learning models in Amazon SageMaker without logging into the SageMaker console using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/aws-controllers-k8s/sagemaker-controller"},"SageMaker Operators for Kubernetes (ACK)"),"."),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"https://www.kubeflow.org/docs/components/pipelines/v1/introduction/#what-is-kubeflow-pipelines"},"Kubeflow Pipeline")," built entirely using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubeflow/pipelines/tree/master/components/aws/sagemaker"},"SageMaker Components for Kubeflow Pipelines"),", or integrate individual components into your workflow as needed.")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Terraform deployment options mentioned below are still in preview.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please make sure to visit the ",(0,o.kt)("a",{parentName:"p",href:"https://awslabs.github.io/kubeflow-manifests/docs/about/eks-compatibility/"},"version compability")," page to ensure the Kubeflow version you are planning to run is compatible with the EKS version. ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kubeflow on AWS")," can be deployed on an existing EKS cluster using Kustomize or Helm. Additionally, terraform templates are also made available if an EKS cluster is not available and needs to be created. AWS provides various Kubeflow deployment options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://awslabs.github.io/kubeflow-manifests/docs/deployment/vanilla/"},"Vanilla deployment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://awslabs.github.io/kubeflow-manifests/docs/deployment/rds-s3/"},"Deployment with Amazon RDS and Amazon S3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://awslabs.github.io/kubeflow-manifests/docs/deployment/cognito/"},"Deployment with Amazon Cognito")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://awslabs.github.io/kubeflow-manifests/docs/deployment/cognito-rds-s3/"},"Deployment with Amazon Cognito, Amazon RDS, and Amazon S3"))),(0,o.kt)("p",null,"Please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://awslabs.github.io/kubeflow-manifests/docs/deployment/"},"deployment")," documentation on the ",(0,o.kt)("strong",{parentName:"p"},"Kubeflow on AWS")," website for the deployment options available and steps for each of those options."))}c.isMDXComponent=!0},9916:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ML-8280-image003-85c9d461f54ba412c44814b91289a3bf.jpg"},8306:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kubeflow-overview-platform-diagram-701b72ea1995fc4a4fec7d9a8c5f557b.svg"}}]);