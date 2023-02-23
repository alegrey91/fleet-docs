"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[3667],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=l,h=d["".concat(o,".").concat(u)]||d[u]||m[u]||s;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const s={},r="Namespaces",i={unversionedId:"namespaces",id:"version-0.5/namespaces",title:"Namespaces",description:"All types in the Fleet manager are namespaced.  The namespaces of the manager types do not correspond to the namespaces",source:"@site/versioned_docs/version-0.5/namespaces.md",sourceDirName:".",slug:"/namespaces",permalink:"/0.5/namespaces",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.5/namespaces.md",tags:[],version:"0.5",lastUpdatedAt:1677162457,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Cluster Groups",permalink:"/0.5/cluster-group"},next:{title:"Adding a GitRepo",permalink:"/0.5/gitrepo-add"}},o={},p=[{value:"GitRepos, Bundles, Clusters, ClusterGroups",id:"gitrepos-bundles-clusters-clustergroups",level:2},{value:"Namespace Creation Behavior in Bundles",id:"namespace-creation-behavior-in-bundles",level:2},{value:"Special Namespaces",id:"special-namespaces",level:2},{value:"fleet-local",id:"fleet-local",level:3},{value:"cattle-fleet-system",id:"cattle-fleet-system",level:3},{value:"cattle-fleet-clusters-system",id:"cattle-fleet-clusters-system",level:3},{value:"Cluster namespaces",id:"cluster-namespaces",level:3},{value:"Cross namespace deployments",id:"cross-namespace-deployments",level:2},{value:"Restricting GitRepos",id:"restricting-gitrepos",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"namespaces"},"Namespaces"),(0,l.kt)("p",null,"All types in the Fleet manager are namespaced.  The namespaces of the manager types do not correspond to the namespaces\nof the deployed resources in the downstream cluster. Understanding how namespaces are use in the Fleet manager is\nimportant to understand the security model and how one can use Fleet in a multi-tenant fashion."),(0,l.kt)("h2",{id:"gitrepos-bundles-clusters-clustergroups"},"GitRepos, Bundles, Clusters, ClusterGroups"),(0,l.kt)("p",null,"The primary types are all scoped to a namespace. All selectors for ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo")," targets will be evaluated against\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"Clusters")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterGroups")," in the same namespaces. This means that if you give ",(0,l.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"update")," privileges\nto a the ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo")," type in a namespace, that end user can modify the selector to match any cluster in that namespace.\nThis means in practice if you want to have two teams self manage their own ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo")," registrations but they should\nnot be able to target each others clusters, they should be in different namespaces."),(0,l.kt)("h2",{id:"namespace-creation-behavior-in-bundles"},"Namespace Creation Behavior in Bundles"),(0,l.kt)("p",null,"When deploying a Fleet bundle, the specified namespace will automatically be created if it does not already exist."),(0,l.kt)("h2",{id:"special-namespaces"},"Special Namespaces"),(0,l.kt)("h3",{id:"fleet-local"},"fleet-local"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"fleet-local")," namespace is a special namespace used for the single cluster use case or to bootstrap\nthe configuration of the Fleet manager."),(0,l.kt)("p",null,"When fleet is installed the ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet-local")," namespace is created along with one ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster")," called ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," and one\n",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterGroup")," called ",(0,l.kt)("inlineCode",{parentName:"p"},"default"),".  If no targets are specified on a ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo"),", it is by default targeted to the\n",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterGroup")," named ",(0,l.kt)("inlineCode",{parentName:"p"},"default"),".  This means that all ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepos")," created in ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet-local")," will\nautomatically target the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster"),".  The ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster")," refers to the cluster the Fleet manager is running\non."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," If you would like to migrate your cluster from ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet-local")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"default"),", please see this ",(0,l.kt)("a",{parentName:"p",href:"/0.5/troubleshooting#migrate-the-local-cluster-to-the-fleet-default-cluster"},"documentation"),"."),(0,l.kt)("h3",{id:"cattle-fleet-system"},"cattle-fleet-system"),(0,l.kt)("p",null,"The Fleet controller and Fleet agent run in this namespace. All service accounts referenced by ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepos")," are expected\nto live in this namespace in the downstream cluster."),(0,l.kt)("h3",{id:"cattle-fleet-clusters-system"},"cattle-fleet-clusters-system"),(0,l.kt)("p",null,"This namespace holds secrets for the cluster registration process. It should contain no other resources in it,\nespecially secrets."),(0,l.kt)("h3",{id:"cluster-namespaces"},"Cluster namespaces"),(0,l.kt)("p",null,"For every cluster that is registered a namespace is created by the Fleet manager for that cluster.\nThese namespaces are named in the form ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-${namespace}-${cluster}-${random}"),".  The purpose of this\nnamespace is that all ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleDeployments")," for that cluster are put into this namespace and\nthen the downstream cluster is given access to watch and update ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleDeployments")," in that namespace only."),(0,l.kt)("h2",{id:"cross-namespace-deployments"},"Cross namespace deployments"),(0,l.kt)("p",null,"It is possible to create a GitRepo that will deploy across namespaces. The primary purpose of this is so that a\ncentral privileged team can manage common configuration for many clusters that are managed by different teams. The way\nthis is accomplished is by creating a ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleNamespaceMapping")," resource in a cluster."),(0,l.kt)("p",null,"If you are creating a ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleNamespaceMapping")," resource it is best to do it in a namespace that only contains ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepos"),"\nand no ",(0,l.kt)("inlineCode",{parentName:"p"},"Clusters"),".  It seems to get confusing if you have Clusters in the same repo as the cross namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepos")," will still\nalways be evaluated against the current namespace.  So if you have clusters in the same namespace you may wish to make them\ncanary clusters."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleNamespaceMapping")," has only two fields.  Which are as below"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: BundleNamespaceMapping\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: not-important\n  namespace: typically-unique\n\n# Bundles to match by label.  The labels are defined in the fleet.yaml\n# labels field or from the GitRepo metadata.labels field\nbundleSelector:\n  matchLabels:\n   foo: bar\n\n# Namespaces to match by label\nnamespaceSelector:\n  matchLabels:\n   foo: bar\n")),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleNamespaceMappings")," ",(0,l.kt)("inlineCode",{parentName:"p"},"bundleSelector")," field matches a ",(0,l.kt)("inlineCode",{parentName:"p"},"Bundles")," labels then that ",(0,l.kt)("inlineCode",{parentName:"p"},"Bundle")," target criteria will\nbe evaluated against all clusters in all namespaces that match ",(0,l.kt)("inlineCode",{parentName:"p"},"namespaceSelector"),". One can specify labels for the created\nbundles from git by putting labels in the ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," file or on the ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.labels")," field on the ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo"),"."),(0,l.kt)("h2",{id:"restricting-gitrepos"},"Restricting GitRepos"),(0,l.kt)("p",null,"A namespace can contain multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepoRestriction")," resources. All ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepos"),"\ncreated in that namespace will be checked against the list of restrictions.\nIf a ",(0,l.kt)("inlineCode",{parentName:"p"},"GitRepo")," violates one of the constraints its ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleDeployment")," will be\nin an error state and won't be deployed."),(0,l.kt)("p",null,"This can also be used to set the defaults for GitRepo's ",(0,l.kt)("inlineCode",{parentName:"p"},"serviceAccount")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"clientSecretName")," fields."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: GitRepoRestriction\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: restriction\n  namespace: typically-unique\nallowedClientSecretNames: []\nallowedRepoPatterns: []\nallowedServiceAccounts: []\ndefaultClientSecretName: ""\ndefaultServiceAccount: ""\n')))}m.isMDXComponent=!0}}]);