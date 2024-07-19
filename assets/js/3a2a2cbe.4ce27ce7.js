"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2610],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(8168),r=(t(6540),t(5680));const o={},l="Create a Bundle Resource",i={unversionedId:"bundle-add",id:"version-0.7/bundle-add",title:"Create a Bundle Resource",description:"Bundles are automatically created by Fleet when a GitRepo is created. In most cases Bundles should not be created",source:"@site/versioned_docs/version-0.7/bundle-add.md",sourceDirName:".",slug:"/bundle-add",permalink:"/0.7/bundle-add",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.7/bundle-add.md",tags:[],version:"0.7",lastUpdatedAt:1721380485,formattedLastUpdatedAt:"Jul 19, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Using Image Scan to Update Container Image References",permalink:"/0.7/imagescan"},next:{title:"fleet-agent",permalink:"/0.7/cli/fleet-agent/"}},s={},c=[{value:"Limitations",id:"limitations",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-a-bundle-resource"},"Create a Bundle Resource"),(0,r.yg)("p",null,"Bundles are automatically created by Fleet when a ",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepo")," is created. In most cases ",(0,r.yg)("inlineCode",{parentName:"p"},"Bundles")," should not be created\nmanually by the user. If you want to deploy resources from a git repository use a\n",(0,r.yg)("a",{parentName:"p",href:"https://fleet.rancher.io/gitrepo-add"},"GitRepo")," instead."),(0,r.yg)("p",null,"If you want to deploy resources without a git repository follow this guide to create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Bundle"),"."),(0,r.yg)("p",null,"When creating a ",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepo")," Fleet will fetch the resources from a git repository, and add them to a Bundle.\nWhen creating a ",(0,r.yg)("inlineCode",{parentName:"p"},"Bundle")," resources need to be explicitly specified in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Bundle")," Spec.\nResources can be compressed with gz. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/v2.7.3/pkg/controllers/provisioningv2/managedchart/managedchart.go#L149-L153"},"here"),"\nan example of how Rancher uses compression in go code."),(0,r.yg)("p",null,"If you would like to deploy in downstream clusters, you need to define targets. Targets work similarly to targets in ",(0,r.yg)("inlineCode",{parentName:"p"},"GitRepo"),".\nSee ",(0,r.yg)("a",{parentName:"p",href:"https://fleet.rancher.io/gitrepo-targets#defining-targets"},"Mapping to Downstream Clusters"),"."),(0,r.yg)("p",null,"The following example creates a nginx ",(0,r.yg)("inlineCode",{parentName:"p"},"Deployment")," in the local cluster:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"kind: Bundle\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  # Any name can be used here\n  name: my-bundle\n  # For single cluster use fleet-local, otherwise use the namespace of\n  # your choosing\n  namespace: fleet-local\nspec:\n  resources:\n  # List of all resources that will be deployed\n  - content: |\n      apiVersion: apps/v1\n      kind: Deployment\n      metadata:\n        name: nginx-deployment\n        labels:\n          app: nginx\n      spec:\n        replicas: 3\n        selector:\n          matchLabels:\n            app: nginx\n        template:\n          metadata:\n            labels:\n              app: nginx\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.14.2\n                ports:\n                  - containerPort: 80\n    name: nginx.yaml\n  targets:\n  - clusterName: local\n\n")),(0,r.yg)("h2",{id:"limitations"},"Limitations"),(0,r.yg)("p",null,"Helm options related to downloading the helm chart will be ignored. The helm chart is downloaded by the fleet-cli, which creates the bundles. The bundle has to contain all the resources from the chart. Therefore the bundle will ignore:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"spec.helm.repo")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"spec.helm.charts"))),(0,r.yg)("p",null,"You can't use a ",(0,r.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," in resources, it is only used by the fleet-cli to create bundles."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"spec.targetRestrictions")," field is not useful, as it is an allow list for targets specified in ",(0,r.yg)("inlineCode",{parentName:"p"},"spec.targets"),". It is not needed, since ",(0,r.yg)("inlineCode",{parentName:"p"},"targets")," are explicitly given in a bundle and an empty ",(0,r.yg)("inlineCode",{parentName:"p"},"targetRestrictions")," defaults to allow."))}u.isMDXComponent=!0}}]);