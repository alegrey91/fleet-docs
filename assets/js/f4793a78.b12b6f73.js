"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[7148],{5680:(e,t,r)=>{r.d(t,{xA:()=>i,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,d=p["".concat(c,".").concat(g)]||p[g]||m[g]||o;return r?n.createElement(d,s(s({ref:t},i),{},{components:r})):n.createElement(d,s({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(8168),a=(r(6540),r(5680));const o={},s="Create Cluster Groups",l={unversionedId:"cluster-group",id:"version-0.6/cluster-group",title:"Create Cluster Groups",description:"Clusters in a namespace can be put into a cluster group. A cluster group is essentially a named selector.",source:"@site/versioned_docs/version-0.6/cluster-group.md",sourceDirName:".",slug:"/cluster-group",permalink:"/0.6/cluster-group",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.6/cluster-group.md",tags:[],version:"0.6",lastUpdatedAt:1721380485,formattedLastUpdatedAt:"Jul 19, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Register Downstream Clusters",permalink:"/0.6/cluster-registration"},next:{title:"Setup Multi User",permalink:"/0.6/multi-user"}},c={},u=[],i={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"create-cluster-groups"},"Create Cluster Groups"),(0,a.yg)("p",null,"Clusters in a namespace can be put into a cluster group. A cluster group is essentially a named selector.\nThe only parameter for a cluster group is essentially the selector.\nWhen you get to a certain scale cluster groups become a more reasonable way to manage your clusters.\nCluster groups serve the purpose of giving aggregated\nstatus of the deployments and then also a simpler way to manage targets."),(0,a.yg)("p",null,"A cluster group is created by creating a ",(0,a.yg)("inlineCode",{parentName:"p"},"ClusterGroup")," resource like below"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"kind: ClusterGroup\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: production-group\n  namespace: clusters\nspec:\n  # This is the standard metav1.LabelSelector format to match clusters by labels\n  selector:\n    matchLabels:\n      env: prod\n")))}m.isMDXComponent=!0}}]);