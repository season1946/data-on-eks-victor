"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[9671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1,sidebar_label:"Introduction"},s="Introduction",p={unversionedId:"intro",id:"intro",title:"Introduction",description:"Data on Amazon EKS(DoEKS) is a tool for users to build aws managed and self-managed scalable data platforms on Amazon EKS. This repo provides the following tools.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/data-on-eks/docs/intro",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"docs",next:{title:"Amazon EMR on EKS",permalink:"/data-on-eks/docs/category/amazon-emr-on-eks"}},i={},l=[],c={toc:l};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Data on Amazon EKS(DoEKS) is a tool for users to build ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"aws")," managed and self-managed scalable data platforms on ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/"},"Amazon EKS"),". This repo provides the following tools."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Scalable deployment Infrastructure as Code(IaC) templates(e.g., ",(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/"},"Terraform")," and ",(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cdk/"},"AWS CDK")," etc.)"),(0,n.kt)("li",{parentName:"ol"},"Best Practices for deploying Data Solutions on Amazon EKS"),(0,n.kt)("li",{parentName:"ol"},"Performance Benchmark reports"),(0,n.kt)("li",{parentName:"ol"},"Sample ",(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/"},"Apache Spark"),"/",(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/machine-learning/"},"ML")," jobs and various other frameworks"),(0,n.kt)("li",{parentName:"ol"},"Reference Architectures and Data blogs")),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"The diagram displays the open source data tools, k8s operators and frameworks that runs on Kubernetes covered in DoEKS. AWS Data Analytics managed services integration with Data on EKS OSS tools.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data on EKS.png",src:a(9278).Z,width:"2330",height:"2436"})),(0,n.kt)("h1",{id:"main-features"},"Main Features"),(0,n.kt)("p",null,"\ud83d\ude80 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html"},"EMR on EKS")),(0,n.kt)("p",null,"\ud83d\ude80 ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html"},"Open Source Spark on EKS")),(0,n.kt)("p",null,"\ud83d\ude80 Custom Kubernetes Schedulers (e.g., ",(0,n.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org/"},"Apache YuniKorn"),", ",(0,n.kt)("a",{parentName:"p",href:"https://volcano.sh/en/"},"Volcano"),")"),(0,n.kt)("p",null,"\ud83d\ude80 Job Schedulers (e.g., ",(0,n.kt)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Apache Airflow"),", ",(0,n.kt)("a",{parentName:"p",href:"https://argoproj.github.io/argo-workflows/"},"Argo Workflows"),")"),(0,n.kt)("p",null,"\ud83d\ude80 AI/ML on Kubernetes (e.g., KubeFlow, MLFlow, Tensorflow, PyTorch etc.)"),(0,n.kt)("p",null,"\ud83d\ude80 Distributed Databases (e.g., ",(0,n.kt)("a",{parentName:"p",href:"https://cassandra.apache.org/_/blog/Cassandra-on-Kubernetes-A-Beginners-Guide.html"},"Cassandra"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cockroachdb/cockroach-operator"},"CockroachDB"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mongodb/mongodb-kubernetes-operator"},"MongoDB")," etc.)"),(0,n.kt)("p",null,"\ud83d\ude80 Streaming Platforms (e.g., ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/kafka"},"Apache Kafka"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/flink"},"Apache Flink"),", Apache Beam etc.)"),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Checkout the documentation for each section to deploy infrastructure and run sample Spark/ML jobs."))}m.isMDXComponent=!0},9278:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/doeks-060f90158b7ffc7d191167231406a110.png"}}]);