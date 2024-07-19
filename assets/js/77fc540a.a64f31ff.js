"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[6094],{5680:(e,t,n)=>{n.d(t,{xA:()=>f,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,d=p["".concat(c,".").concat(g)]||p[g]||u[g]||l;return n?r.createElement(d,o(o({ref:t},f),{},{components:n})):r.createElement(d,o({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const l={title:"",sidebar_label:"fleet-agent"},o=void 0,i={unversionedId:"cli/fleet-agent/fleet-agent",id:"version-0.7/cli/fleet-agent/fleet-agent",title:"",description:"fleet-agent",source:"@site/versioned_docs/version-0.7/cli/fleet-agent/fleet-agent.md",sourceDirName:"cli/fleet-agent",slug:"/cli/fleet-agent/",permalink:"/0.7/cli/fleet-agent/",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.7/cli/fleet-agent/fleet-agent.md",tags:[],version:"0.7",lastUpdatedAt:1721380485,formattedLastUpdatedAt:"Jul 19, 2024",frontMatter:{title:"",sidebar_label:"fleet-agent"},sidebar:"docs",previous:{title:"Create a Bundle Resource",permalink:"/0.7/bundle-add"},next:{title:"fleet",permalink:"/0.7/cli/fleet-cli/fleet"}},c={},s=[{value:"fleet-agent",id:"fleet-agent",level:2},{value:"Options",id:"options",level:3}],f={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"fleet-agent"},"fleet-agent"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"fleet-agent [flags]\n")),(0,a.yg)("h3",{id:"options"},"Options"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"      --agent-scope string        An identifier used to scope the agent bundleID names, typically the same as namespace\n      --checkin-interval string   How often to post cluster status\n      --debug                     Turn on debug logging\n      --debug-level int           If debugging is enabled, set klog -v=X\n  -h, --help                      help for fleet-agent\n      --kubeconfig string         kubeconfig file\n      --namespace string          namespace to watch\n      --simulators int            Numbers of simulators to run\n")))}u.isMDXComponent=!0}}]);