"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[6481],{5680:(e,t,r)=>{r.d(t,{xA:()=>f,yg:()=>g});var n=r(6540);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=l,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(g,o(o({ref:t},f),{},{components:r})):n.createElement(g,o({ref:t},f))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(8168),l=(r(6540),r(5680));const a={title:"",sidebar_label:"fleet-manager"},o=void 0,i={unversionedId:"cli/fleet-controller/fleet-manager",id:"version-0.9/cli/fleet-controller/fleet-manager",title:"",description:"fleet-manager",source:"@site/versioned_docs/version-0.9/cli/fleet-controller/fleet-manager.md",sourceDirName:"cli/fleet-controller",slug:"/cli/fleet-controller/fleet-manager",permalink:"/0.9/cli/fleet-controller/fleet-manager",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.9/cli/fleet-controller/fleet-manager.md",tags:[],version:"0.9",lastUpdatedAt:1721380485,formattedLastUpdatedAt:"Jul 19, 2024",frontMatter:{title:"",sidebar_label:"fleet-manager"},sidebar:"docs",previous:{title:"fleet test",permalink:"/0.9/cli/fleet-cli/fleet_test"},next:{title:"Cluster and Bundle State",permalink:"/0.9/cluster-bundles-state"}},c={},s=[{value:"fleet-manager",id:"fleet-manager",level:2},{value:"Options",id:"options",level:3}],f={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,l.yg)(p,(0,n.A)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"fleet-manager"},"fleet-manager"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"fleet-manager [flags]\n")),(0,l.yg)("h3",{id:"options"},"Options"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'      --debug               Turn on debug logging\n      --debug-level int     If debugging is enabled, set klog -v=X\n      --disable-bootstrap   disable local cluster components\n      --disable-gitops      disable gitops components\n  -h, --help                help for fleet-manager\n      --kubeconfig string   Kubeconfig file\n      --namespace string    namespace to watch (default "cattle-fleet-system")\n')))}u.isMDXComponent=!0}}]);