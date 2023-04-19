"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[5339],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(a),b=n,d=m["".concat(c,".").concat(b)]||m[b]||p[b]||o;return a?r.createElement(d,s(s({ref:t},u),{},{components:a})):r.createElement(d,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={slug:"EMR on EKS Best Practices",title:"EMR on EKS Best Practices",authors:["aws"],tags:["emr-on-eks","Spark","Observability","Amazon Managed Prometheus","Amazon Managed Grafana"]},s=void 0,i={permalink:"/data-on-eks/blog/EMR on EKS Best Practices",editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/blog/2022-09-10-emr-eks-best-practices.mdx",source:"@site/blog/2022-09-10-emr-eks-best-practices.mdx",title:"EMR on EKS Best Practices",description:"EMR Containers Best Practices Guides",date:"2022-09-10T00:00:00.000Z",formattedDate:"September 10, 2022",tags:[{label:"emr-on-eks",permalink:"/data-on-eks/blog/tags/emr-on-eks"},{label:"Spark",permalink:"/data-on-eks/blog/tags/spark"},{label:"Observability",permalink:"/data-on-eks/blog/tags/observability"},{label:"Amazon Managed Prometheus",permalink:"/data-on-eks/blog/tags/amazon-managed-prometheus"},{label:"Amazon Managed Grafana",permalink:"/data-on-eks/blog/tags/amazon-managed-grafana"}],readingTime:.42333333333333334,hasTruncateMarker:!1,authors:[{name:"aws",title:"Amazon Web Services",url:"https://github.com/aws/aws-emr-containers-best-practices",imageURL:"https://github.com/aws.png",key:"aws"}],frontMatter:{slug:"EMR on EKS Best Practices",title:"EMR on EKS Best Practices",authors:["aws"],tags:["emr-on-eks","Spark","Observability","Amazon Managed Prometheus","Amazon Managed Grafana"]},prevItem:{title:"EMR on EKS Data Platform with AWS CDK",permalink:"/data-on-eks/blog/Data Platform with AWS CDK"},nextItem:{title:"Observability EMR on EKS",permalink:"/data-on-eks/blog/Observability EMR on EKS"}},c={authorsImageUrls:[void 0]},l=[{value:"EMR Containers Best Practices Guides",id:"emr-containers-best-practices-guides",level:2},{value:"Architecture",id:"architecture",level:3}],u={toc:l},m="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"emr-containers-best-practices-guides"},(0,n.kt)("a",{parentName:"h2",href:"https://aws.github.io/aws-emr-containers-best-practices/"},"EMR Containers Best Practices Guides")),(0,n.kt)("p",null,"Amazon EMR on Amazon EKS enables you to submit Apache Spark jobs on demand on Amazon Elastic Kubernetes Service (EKS) without provisioning clusters. With EMR on EKS, you can consolidate analytical workloads with your other Kubernetes-based applications on the same Amazon EKS cluster to improve resource utilization and simplify infrastructure management."),(0,n.kt)("p",null,"This link provides the best practices and templates to get started with Amazon EMR on EKS. We publish this guide on GitHub so we could iterate the content quickly, provide timely and effective recommendations for variety of concerns, and easily incorporate suggestions from the broader community."),(0,n.kt)("p",null,"Checkout the EMR on EKS Best practices GitHub docs ",(0,n.kt)("a",{parentName:"p",href:"https://aws.github.io/aws-emr-containers-best-practices/"},"here")),(0,n.kt)("h3",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"The following diagram illustrates the solution architecture Amazon EMR on EKS."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"emr-eks-architecture",src:a(6251).Z,width:"671",height:"736"})))}p.isMDXComponent=!0},6251:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/emr-eks-architecture-4ef17f73412d9a03f9de6d2011934a3e.png"}}]);