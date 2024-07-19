"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2404],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(8168),l=(n(6540),n(5680));const a={},o="Uninstall",i={unversionedId:"uninstall",id:"uninstall",title:"Uninstall",description:"Fleet is packaged as two Helm charts so uninstall is accomplished by",source:"@site/docs/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/uninstall",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/uninstall.md",tags:[],version:"current",lastUpdatedAt:1721380485,formattedLastUpdatedAt:"Jul 19, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Creating a Deployment",permalink:"/tut-deployment"},next:{title:"Architecture",permalink:"/architecture"}},c={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"uninstall"},"Uninstall"),(0,l.yg)("p",null,"Fleet is packaged as two Helm charts so uninstall is accomplished by\nuninstalling the appropriate Helm charts. To uninstall Fleet run the following\ntwo commands:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"helm -n cattle-fleet-system uninstall fleet\nhelm -n cattle-fleet-system uninstall fleet-crd\n")),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"Uninstalling the CRDs will remove all deployed workloads.")))}m.isMDXComponent=!0}}]);