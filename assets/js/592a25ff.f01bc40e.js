"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[5482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,b=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return r?o.createElement(b,s(s({ref:t},d),{},{components:r})):o.createElement(b,s({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1,sidebar_label:"Introduction"},s="Job Schedulers",i={unversionedId:"job-schedulers-eks/index",id:"job-schedulers-eks/index",title:"Job Schedulers",description:"Job scheduling is the process where tasks are executed at a scheduled time or triggered by event driven solutions.",source:"@site/docs/job-schedulers-eks/index.md",sourceDirName:"job-schedulers-eks",slug:"/job-schedulers-eks/",permalink:"/data-on-eks/docs/job-schedulers-eks/",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/job-schedulers-eks/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Job Schedulers on EKS",permalink:"/data-on-eks/docs/category/job-schedulers-on-eks"},next:{title:"Amazon MWAA",permalink:"/data-on-eks/docs/job-schedulers-eks/aws-managed-airflow"}},l={},c=[],d={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"job-schedulers"},"Job Schedulers"),(0,n.kt)("p",null,"Job scheduling is the process where tasks are executed at a scheduled time or triggered by event driven solutions."),(0,n.kt)("p",null,"The following are the most popular job scheduling tools used with data workloads.\nThis section provides deployment patterns for the following tools and examples to trigger Spark/ML jobs using these schedulers."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://airflow.apache.org/"},"Apache Airflow")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html"},"Amazon Managed Workflows for Apache Airflow (MWAA)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://argoproj.github.io/workflows/"},"Argo Workflow")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.prefect.io/"},"Prefect"))))}p.isMDXComponent=!0}}]);