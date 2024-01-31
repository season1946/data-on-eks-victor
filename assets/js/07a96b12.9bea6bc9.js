"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[1378],{6441:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=o(5893),s=o(1151);const i={sidebar_position:6,sidebar_label:"EMR on EKS Data Platform with AWS CDK"},r="EMR on EKS Data Platform with AWS CDK",a={id:"blueprints/amazon-emr-on-eks/emr-eks-studio",title:"EMR on EKS Data Platform with AWS CDK",description:"In this document we will show you how you can use AWS CDK and the Analytics Reference Architecture (ARA) library to deploy an end to end data analytics platform. This platform will allow you to run Spark interactive Session in Jupyter notebook with EMR Studio supported by EMR on EKS and run Spark jobs with EMR on EKS. The architecture below shows the infrasturcture you will deploy using the CDK and ARA library.",source:"@site/docs/blueprints/amazon-emr-on-eks/emr-eks-studio.md",sourceDirName:"blueprints/amazon-emr-on-eks",slug:"/blueprints/amazon-emr-on-eks/emr-eks-studio",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-studio",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/amazon-emr-on-eks/emr-eks-studio.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"EMR on EKS Data Platform with AWS CDK"},sidebar:"blueprints",previous:{title:"EMR on EKS with Fargate",permalink:"/data-on-eks/docs/blueprints/amazon-emr-on-eks/emr-eks-fargate"},next:{title:"Data Analytics on EKS",permalink:"/data-on-eks/docs/category/data-analytics-on-eks"}},l={},c=[{value:"Analytics Reference Architecture",id:"analytics-reference-architecture",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Solution",id:"solution",level:2},{value:"Customize",id:"customize",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Job submission",id:"job-submission",level:3},{value:"Interactive session",id:"interactive-session",level:3},{value:"Cleanup",id:"cleanup",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"emr-on-eks-data-platform-with-aws-cdk",children:"EMR on EKS Data Platform with AWS CDK"}),"\n",(0,t.jsxs)(n.p,{children:["In this document we will show you how you can use AWS CDK and the ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/blogs/opensource/adding-cdk-constructs-to-the-aws-analytics-reference-architecture/",children:"Analytics Reference Architecture"})," (ARA) library to deploy an end to end data analytics platform. This platform will allow you to run Spark interactive Session in Jupyter notebook with EMR Studio supported by EMR on EKS and run Spark jobs with EMR on EKS. The architecture below shows the infrasturcture you will deploy using the CDK and ARA library."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"emr-eks-studio-ara-architecture",src:o(9999).Z+"",width:"1662",height:"980"})}),"\n",(0,t.jsx)(n.h2,{id:"analytics-reference-architecture",children:(0,t.jsx)(n.a,{href:"https://aws.amazon.com/blogs/opensource/adding-cdk-constructs-to-the-aws-analytics-reference-architecture/",children:"Analytics Reference Architecture"})}),"\n",(0,t.jsxs)(n.p,{children:["AWS Analytics Reference Architecture (ARA) exposes set of reusable core components in an AWS CDK library, currently available in Typescript and Python. This library contains AWS CDK constructs (L3) that can be used to quickly provision analytics solutions in demos, prototypes, proofs of concept, and end-to-end reference architectures. The API of ARA Library is defined ",(0,t.jsx)(n.a,{href:"https://constructs.dev/packages/aws-analytics-reference-architecture/v/2.4.11?lang=typescript",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In our case the library help you deploy an infrastructure optimised for Apache Spark running on EKS leveraging EMR on EKS. The infrastructure will out of the box provide you with pod collocation to reduce network traffic, deploy nodegroup in a single AZ to reduce cross AZ traffic during shuffle, use dedicated instances for EMR on EKS, use optimized instances for memory intensive jobs, use spot and on-demand instances for non-critical job and for critical jobs."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Ensure that you have installed the following tools on your machine."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install",children:"CDK"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsxs)(n.p,{children:["To deploy the data platform we will use an example in the ",(0,t.jsx)(n.code,{children:"Analytics Reference Architecture"}),". The example is in the directory ",(0,t.jsx)(n.code,{children:"examples/emr-eks-app"})," that you will find in the repository you will clone below."]}),"\n",(0,t.jsx)(n.p,{children:"Clone the repository"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/aws-samples/aws-analytics-reference-architecture.git\n"})}),"\n",(0,t.jsx)(n.p,{children:"This solution will deploy the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"EKS cluster and a set of Nodegroups:"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Managed Nodegroup called tooling for running system critical pods. e.g., Cluster Autoscaler, CoreDNS, EBS CSI Driver.."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Three Managed Nodegroup called critical for critical jobs, each in one AZ, this nodegroup use on-demand instances"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Three Managed Nodegroup called non-critical for non-critical jobs, each in one AZ, this nodegroup use spot instances"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Three Managed Nodegroup called notebook-driver for non-critical jobs, each in one AZ, this nodegroup use on-demand instances to have a stable driver."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Three Managed Nodegroup called notebook-executor for non-critical jobs, each in one AZ, this nodegroup use spot instances instances for executors."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enable EKS Cluster to be with with EMR on EKS service"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["EMR Virtual Cluster called ",(0,t.jsx)(n.code,{children:"batchjob"}),", used to submitted jobs"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["EMR Virtual Cluster called ",(0,t.jsx)(n.code,{children:"emrvcplatform"}),", used to submitted jobs"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["EMR Studio called ",(0,t.jsx)(n.code,{children:"platform"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"managed endpoint"}),", called ",(0,t.jsx)(n.code,{children:"platform-myendpoint"})," , to use with Jupyter notebooks you will create in the EMR Studio"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/iam-execution-role.html",children:"Execution role"})," to use when submitting jobs with EMR on EKS ",(0,t.jsx)(n.code,{children:"start-job-run"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execution role to use with managed endpoint."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'pod templates stored in an S3 bucket called "EKS-CLUSTER-NAME-emr-eks-assets-ACCOUNT-ID-REGION"'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"customize",children:"Customize"}),"\n",(0,t.jsxs)(n.p,{children:["The infrastructure described above is defined in ",(0,t.jsx)(n.code,{children:"emr-eks-app/lib/emr-eks-app-stack.ts"}),". If you want to customize it you can change the values in it. For example, you can chose not to create the default nodegroup to use for ",(0,t.jsx)(n.code,{children:"jobs"}),", in this case you can set the ",(0,t.jsx)(n.code,{children:"defaultNodeGroups"})," parameter to ",(0,t.jsx)(n.code,{children:"false"})," in the ",(0,t.jsx)(n.code,{children:"EmrEksCluster"}),". You can also call the ",(0,t.jsx)(n.code,{children:"addEmrEksNodegroup"})," method to define your own nodegroups with specific labels, instances or taints. The ",(0,t.jsx)(n.code,{children:"addEmrEksNodegroup"})," method is defined ",(0,t.jsx)(n.a,{href:"https://constructs.dev/packages/aws-analytics-reference-architecture/v/2.4.11/api/EmrEksCluster?lang=typescript#addEmrEksNodegroup",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also create your own execution role through the ",(0,t.jsx)(n.code,{children:"createExecutionRole"})," ",(0,t.jsx)(n.a,{href:"https://constructs.dev/packages/aws-analytics-reference-architecture/v/2.4.11/api/EmrEksCluster?lang=typescript#createExecutionRole",children:"method"})," or create a managed endpoint to attach it to an EMR Studio you deployed outside of the ARA library."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to simplify this example we use IAM authentication with IAM user for ",(0,t.jsx)(n.code,{children:"EMR Studio"}),". If you would like to use a user in the ",(0,t.jsx)(n.code,{children:"AWS IAM Identity Center"})," you can change ",(0,t.jsx)(n.code,{children:"studioAuthMode"})," in the ",(0,t.jsx)(n.code,{children:"NotebookPlatform"})," construct. Below you will can see the code snippet that you need to change."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const notebookPlatform = new ara.NotebookPlatform(this, 'platform-notebook', {\nemrEks: emrEks,\neksNamespace: 'dataanalysis',\nstudioName: 'platform',\nstudioAuthMode: ara.StudioAuthMode.IAM,\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deploy",children:"Deploy"}),"\n",(0,t.jsxs)(n.p,{children:["Before you run the solution, you ",(0,t.jsx)(n.strong,{children:"MUST"})," change the ",(0,t.jsx)(n.code,{children:"eksAdminRoleArn"})," of the ",(0,t.jsx)(n.code,{children:"props"})," object of ",(0,t.jsx)(n.code,{children:"EmrEksCluster"})," in ",(0,t.jsx)(n.code,{children:"lib/emr-eks-app-stack.ts"}),". This role allows you to interact manage EKS cluster and should have be allowed at least the IAM action ",(0,t.jsx)(n.code,{children:"eks:AccessKubernetesApi"}),". You need to also change the ",(0,t.jsx)(n.code,{children:"identityName"})," in the ",(0,t.jsx)(n.code,{children:"addUser"})," method of the ",(0,t.jsx)(n.code,{children:"NotebookPlatform"})," construct. The identityName ",(0,t.jsx)(n.strong,{children:"MUST BE"})," a valid IAM username that you use. Below you will can see the code snippet that you need to change."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"notebookPlatform.addUser([{\nidentityName:'',\nnotebookManagedEndpoints: [{\nemrOnEksVersion: 'emr-6.8.0-latest',\nexecutionPolicy: emrEksPolicy,\nmanagedEndpointName: 'myendpoint'\n}],\n}]);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Last you should also update the IAM policies passed to the ",(0,t.jsx)(n.code,{children:"createExecutionRole"}),", if you want to process data that is in S3 buckets that you own."]}),"\n",(0,t.jsxs)(n.p,{children:["Navigate into one of the example directories and run ",(0,t.jsx)(n.code,{children:"cdk synth --profile YOUR-AWS-PROFILE"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd examples/emr-eks-app\nnpm install\ncdk synth --profile YOUR-AWS-PROFILE\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once the synth is completed you can deploy the infrastructrue with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cdk deploy\n"})}),"\n",(0,t.jsx)(n.p,{children:"At the end of the deployment you will see output like follow:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ara-cdk-output",src:o(9510).Z+"",width:"941",height:"156"})}),"\n",(0,t.jsxs)(n.p,{children:["In the output you will find job sample configurations with the best practices for Spark on Kubernetes like ",(0,t.jsx)(n.code,{children:"dynamicAllocation"})," and ",(0,t.jsx)(n.code,{children:"pod collocation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"job-submission",children:"Job submission"}),"\n",(0,t.jsxs)(n.p,{children:["In this example we will use the ",(0,t.jsx)(n.code,{children:"crittical-job"})," job configuration to submit a job using that will compute ",(0,t.jsx)(n.code,{children:"pi"})," using that is part of Spark distribution.\nTo submit a job we will use Below you use ",(0,t.jsx)(n.code,{children:"start-job-run"})," command with AWS CLI."]}),"\n",(0,t.jsx)(n.p,{children:"Before you run the command below, make sure to change update the following parameters with the on created by your own deployment."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"<CLUSTER-ID> \u2013 The EMR virtual cluster ID, which you get from the AWS CDK output"}),"\n",(0,t.jsx)(n.li,{children:"<SPARK-JOB-NAME> \u2013 The name of your Spark job"}),"\n",(0,t.jsx)(n.li,{children:"<ROLE-ARN> \u2013 The execution role you created, which you get from the AWS CDK output"}),"\n",(0,t.jsx)(n.li,{children:"<S3URI-CRITICAL-DRIVER> \u2013 The Amazon S3 URI of the driver pod template, which you get from the AWS CDK output"}),"\n",(0,t.jsx)(n.li,{children:"<S3URI-CRITICAL-EXECUTOR> \u2013 The Amazon S3 URI of the executor pod template, which you get from the AWS CDK output"}),"\n",(0,t.jsx)(n.li,{children:"<Log_Group_Name> \u2013 Your CloudWatch log group name"}),"\n",(0,t.jsx)(n.li,{children:"<Log_Stream_Prefix> \u2013 Your CloudWatch log stream prefix"}),"\n"]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"AWS CLI for start-job-run command"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'aws emr-containers start-job-run \\\n    --virtual-cluster-id CLUSTER-ID\\\n    --name=SPARK-JOB-NAME\\\n    --execution-role-arn ROLE-ARN \\\n    --release-label emr-6.8.0-latest \\\n    --job-driver \'{\n    "sparkSubmitJobDriver":{\n        "entryPoint": "local:///usr/lib/spark/examples/src/main/python/pi.py"\n    }\n}\' \\\n--configuration-overrides \'{\n    "applicationConfiguration": [\n    {\n        "classification": "spark-defaults",\n        "properties": {\n            "spark.hadoop.hive.metastore.client.factory.class": "com.amazonaws.glue.catalog.metastore.AWSGlueDataCatalogHiveClientFactory",\n            "spark.sql.catalogImplementation": "hive",\n            "spark.dynamicAllocation.enabled":"true",\n            "spark.dynamicAllocation.minExecutors": "8",\n            "spark.dynamicAllocation.maxExecutors": "40",\n            "spark.kubernetes.allocation.batch.size": "8",\n            "spark.executor.cores": "8",\n            "spark.kubernetes.executor.request.cores": "7",\n            "spark.executor.memory": "28G",\n            "spark.driver.cores": "2",\n            "spark.kubernetes.driver.request.cores": "2",\n            "spark.driver.memory": "6G",\n            "spark.dynamicAllocation.executorAllocationRatio": "1",\n            "spark.dynamicAllocation.shuffleTracking.enabled": "true",\n            "spark.dynamicAllocation.shuffleTracking.timeout": "300s",\n            "spark.kubernetes.driver.podTemplateFile": "s3://EKS-CLUSTER-NAME-emr-eks-assets-ACCOUNT-ID-REGION/EKS-CLUSTER-NAME/pod-template/critical-driver.yaml",\n            "spark.kubernetes.executor.podTemplateFile": "s3://EKS-CLUSTER-NAME-emr-eks-assets-ACCOUNT-ID-REGION/EKS-CLUSTER-NAME/pod-template/critical-executor.yaml"\n        }\n    }\n    ],\n    "monitoringConfiguration": {\n        "cloudWatchMonitoringConfiguration": {\n            "logGroupName": "Log_Group_Name",\n            "logStreamNamePrefix": "Log_Stream_Prefix"\n        }\n    }\n}\'\n'})})]}),"\n",(0,t.jsx)(n.p,{children:"Verify the job execution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pods --namespace=batchjob -w\n"})}),"\n",(0,t.jsx)(n.h3,{id:"interactive-session",children:"Interactive session"}),"\n",(0,t.jsxs)(n.p,{children:["To use an interactive session, you should log in to the EMR Studio instance with the URL provided to you at the end of ",(0,t.jsx)(n.code,{children:"cdk deploy"}),".\nThis link will be in the form of ",(0,t.jsx)(n.code,{children:"https://es-xxxxx/emrstudio-prod-REGION.amazonaws.com"}),".\nOnce you click on the link you will be see a log in page where you ",(0,t.jsx)(n.strong,{children:"MUST"})," sign-in with the username provided to the ",(0,t.jsx)(n.code,{children:"addUser"})," method. When you sign in you should follow these steps."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create workspace, this will start for a Jupyter notebook"}),"\n",(0,t.jsx)(n.li,{children:"Connect to the Jupter notebook"}),"\n",(0,t.jsx)(n.li,{children:'Attach to a Virtual cluster, this would be have the following name "emrvcplatform" and chose an endpoint called "platform-myendpoint"'}),"\n",(0,t.jsx)(n.li,{children:"Open a notebook and select the PySpark kernel"}),"\n",(0,t.jsx)(n.li,{children:"You are now ready to perform analyse your data with Spark running on EMR on EKS."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,t.jsx)(n.p,{children:"To clean up your environment, you call the command below. This will destroy the EKS cluster with Node groups and VPC"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cdk destroy\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9510:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/cdk-deploy-result-7f0116c1481ceb53ea9a11d4fc0c7230.png"},9999:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/emr-eks-studio-cdk-ara-48d05caba069c27f9fea7351e13bba60.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(7294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);