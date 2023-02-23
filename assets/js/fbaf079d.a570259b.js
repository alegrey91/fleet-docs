"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2030],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={},i="Generating Diffs for Modified GitRepos",s={unversionedId:"bundle-diffs",id:"bundle-diffs",title:"Generating Diffs for Modified GitRepos",description:"Continuous Delivery in Rancher is powered by fleet. When a user adds a GitRepo CR, then Continuous Delivery creates the associated fleet bundles.",source:"@site/docs/bundle-diffs.md",sourceDirName:".",slug:"/bundle-diffs",permalink:"/bundle-diffs",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/bundle-diffs.md",tags:[],version:"current",lastUpdatedAt:1677162457,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Mapping to Downstream Clusters",permalink:"/gitrepo-targets"},next:{title:"Webhook",permalink:"/webhook"}},l={},p=[{value:"1. ValidatingWebhookConfiguration:",id:"1-validatingwebhookconfiguration",level:3},{value:"2. Deployment gatekeeper-controller-manager:",id:"2-deployment-gatekeeper-controller-manager",level:3},{value:"3. Deployment gatekeeper-audit:",id:"3-deployment-gatekeeper-audit",level:3},{value:"Combining It All Together",id:"combining-it-all-together",level:3}],c={toc:p};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generating-diffs-for-modified-gitrepos"},"Generating Diffs for Modified GitRepos"),(0,o.kt)("p",null,"Continuous Delivery in Rancher is powered by fleet. When a user adds a GitRepo CR, then Continuous Delivery creates the associated fleet bundles."),(0,o.kt)("p",null,"You can access these bundles by navigating to the Cluster Explorer (Dashboard UI), and selecting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bundles")," section."),(0,o.kt)("p",null,"The bundled charts may have some objects that are amended at runtime, for example in ValidatingWebhookConfiguration the ",(0,o.kt)("inlineCode",{parentName:"p"},"caBundle")," is empty and the CA cert is injected by the cluster."),(0,o.kt)("p",null,'This leads the status of the bundle and associated GitRepo to be reported as "Modified"'),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(9366).Z,width:"1191",height:"344"})),(0,o.kt)("p",null,"Associated Bundle\n",(0,o.kt)("img",{src:t(6368).Z,width:"1188",height:"420"})),(0,o.kt)("p",null,"Fleet bundles support the ability to specify a custom ",(0,o.kt)("a",{parentName:"p",href:"http://jsonpatch.com/"},"jsonPointer patch"),"."),(0,o.kt)("p",null,"With the patch, users can instruct fleet to ignore object modifications."),(0,o.kt)("p",null,"In this example, we are trying to deploy opa-gatekeeper using Continuous Delivery to our clusters."),(0,o.kt)("p",null,"The opa-gatekeeper bundle associated with the opa GitRepo is in modified state."),(0,o.kt)("p",null,"Each path in the GitRepo CR, has an associated Bundle CR. The user can view the Bundles, and the associated diff needed in the Bundle status."),(0,o.kt)("p",null,"In our case the differences detected are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  summary:\n    desiredReady: 1\n    modified: 1\n    nonReadyResources:\n    - bundleState: Modified\n      modifiedStatus:\n      - apiVersion: admissionregistration.k8s.io/v1\n        kind: ValidatingWebhookConfiguration\n        name: gatekeeper-validating-webhook-configuration\n        patch: \'{"$setElementOrder/webhooks":[{"name":"validation.gatekeeper.sh"},{"name":"check-ignore-label.gatekeeper.sh"}],"webhooks":[{"clientConfig":{"caBundle":"Cg=="},"name":"validation.gatekeeper.sh","rules":[{"apiGroups":["*"],"apiVersions":["*"],"operations":["CREATE","UPDATE"],"resources":["*"]}]},{"clientConfig":{"caBundle":"Cg=="},"name":"check-ignore-label.gatekeeper.sh","rules":[{"apiGroups":[""],"apiVersions":["*"],"operations":["CREATE","UPDATE"],"resources":["namespaces"]}]}]}\'\n      - apiVersion: apps/v1\n        kind: Deployment\n        name: gatekeeper-audit\n        namespace: cattle-gatekeeper-system\n        patch: \'{"spec":{"template":{"spec":{"$setElementOrder/containers":[{"name":"manager"}],"containers":[{"name":"manager","resources":{"limits":{"cpu":"1000m"}}}],"tolerations":[]}}}}\'\n      - apiVersion: apps/v1\n        kind: Deployment\n        name: gatekeeper-controller-manager\n        namespace: cattle-gatekeeper-system\n        patch: \'{"spec":{"template":{"spec":{"$setElementOrder/containers":[{"name":"manager"}],"containers":[{"name":"manager","resources":{"limits":{"cpu":"1000m"}}}],"tolerations":[]}}}}\'\n')),(0,o.kt)("p",null,"Based on this summary, there are three objects which need to be patched."),(0,o.kt)("p",null,"We will look at these one at a time."),(0,o.kt)("h3",{id:"1-validatingwebhookconfiguration"},"1. ValidatingWebhookConfiguration:"),(0,o.kt)("p",null,"The gatekeeper-validating-webhook-configuration validating webhook has two ValidatingWebhooks in its spec. "),(0,o.kt)("p",null,"In cases where more than one element in the field requires a patch, that patch will refer these to as ",(0,o.kt)("inlineCode",{parentName:"p"},"$setElementOrder/ELEMENTNAME")," "),(0,o.kt)("p",null,"From this information, we can see the two ValidatingWebhooks in question are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  "$setElementOrder/webhooks": [\n    {\n      "name": "validation.gatekeeper.sh"\n    },\n    {\n      "name": "check-ignore-label.gatekeeper.sh"\n    }\n  ],\n')),(0,o.kt)("p",null,"Within each ValidatingWebhook, the fields that need to be ignore are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    {\n      "clientConfig": {\n        "caBundle": "Cg=="\n      },\n      "name": "validation.gatekeeper.sh",\n      "rules": [\n        {\n          "apiGroups": [\n            "*"\n          ],\n          "apiVersions": [\n            "*"\n          ],\n          "operations": [\n            "CREATE",\n            "UPDATE"\n          ],\n          "resources": [\n            "*"\n          ]\n        }\n      ]\n    },\n')),(0,o.kt)("p",null," and "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    {\n     "clientConfig": {\n       "caBundle": "Cg=="\n     },\n     "name": "check-ignore-label.gatekeeper.sh",\n     "rules": [\n       {\n         "apiGroups": [\n           ""\n         ],\n         "apiVersions": [\n           "*"\n         ],\n         "operations": [\n           "CREATE",\n           "UPDATE"\n         ],\n         "resources": [\n           "namespaces"\n         ]\n       }\n     ]\n   }\n')),(0,o.kt)("p",null,"In summary, we need to ignore the fields ",(0,o.kt)("inlineCode",{parentName:"p"},"rules")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clientConfig.caBundle")," in our patch specification."),(0,o.kt)("p",null,"The field webhook in the ValidatingWebhookConfiguration spec is an array, so we need to address the elements by their index values."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(1418).Z,width:"1104",height:"837"})),(0,o.kt)("p",null,"Based on this information, our diff patch would look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  - apiVersion: admissionregistration.k8s.io/v1\n    kind: ValidatingWebhookConfiguration\n    name: gatekeeper-validating-webhook-configuration\n    operations:\n    - {"op": "remove", "path":"/webhooks/0/clientConfig/caBundle"}\n    - {"op": "remove", "path":"/webhooks/0/rules"}\n    - {"op": "remove", "path":"/webhooks/1/clientConfig/caBundle"}\n    - {"op": "remove", "path":"/webhooks/1/rules"}\n')),(0,o.kt)("h3",{id:"2-deployment-gatekeeper-controller-manager"},"2. Deployment gatekeeper-controller-manager:"),(0,o.kt)("p",null,"The gatekeeper-controller-manager deployment is modified since there are cpu limits and tolerations applied (which are not in the actual bundle)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "spec": {\n    "template": {\n      "spec": {\n        "$setElementOrder/containers": [\n          {\n            "name": "manager"\n          }\n        ],\n        "containers": [\n          {\n            "name": "manager",\n            "resources": {\n              "limits": {\n                "cpu": "1000m"\n              }\n            }\n          }\n        ],\n        "tolerations": []\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"In this case, there is only 1 container in the deployment container spec, and that container has cpu limits and tolerations added."),(0,o.kt)("p",null,"Based on this information, our diff patch would look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  - apiVersion: apps/v1\n    kind: Deployment\n    name: gatekeeper-controller-manager\n    namespace: cattle-gatekeeper-system\n    operations:\n    - {"op": "remove", "path": "/spec/template/spec/containers/0/resources/limits/cpu"}\n    - {"op": "remove", "path": "/spec/template/spec/tolerations"}\n')),(0,o.kt)("h3",{id:"3-deployment-gatekeeper-audit"},"3. Deployment gatekeeper-audit:"),(0,o.kt)("p",null,"The gatekeeper-audit deployment is modified in a similarly, to the gatekeeper-controller-manager, with additional cpu limits and tolerations applied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "spec": {\n    "template": {\n      "spec": {\n        "$setElementOrder/containers": [\n          {\n            "name": "manager"\n          }\n        ],\n        "containers": [\n          {\n            "name": "manager",\n            "resources": {\n              "limits": {\n                "cpu": "1000m"\n              }\n            }\n          }\n        ],\n        "tolerations": []\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Similar to gatekeeper-controller-manager, there is only 1 container in the deployments container spec, and that has cpu limits and tolerations added."),(0,o.kt)("p",null,"Based on this information, our diff patch would look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  - apiVersion: apps/v1\n    kind: Deployment\n    name: gatekeeper-audit\n    namespace: cattle-gatekeeper-system\n    operations:\n    - {"op": "remove", "path": "/spec/template/spec/containers/0/resources/limits/cpu"}\n    - {"op": "remove", "path": "/spec/template/spec/tolerations"}\n')),(0,o.kt)("h3",{id:"combining-it-all-together"},"Combining It All Together"),(0,o.kt)("p",null,"We can now combine all these patches as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'diff:\n  comparePatches:\n  - apiVersion: apps/v1\n    kind: Deployment\n    name: gatekeeper-audit\n    namespace: cattle-gatekeeper-system\n    operations:\n    - {"op": "remove", "path": "/spec/template/spec/containers/0/resources/limits/cpu"}\n    - {"op": "remove", "path": "/spec/template/spec/tolerations"}\n  - apiVersion: apps/v1\n    kind: Deployment\n    name: gatekeeper-controller-manager\n    namespace: cattle-gatekeeper-system\n    operations:\n    - {"op": "remove", "path": "/spec/template/spec/containers/0/resources/limits/cpu"}\n    - {"op": "remove", "path": "/spec/template/spec/tolerations"}\n  - apiVersion: admissionregistration.k8s.io/v1\n    kind: ValidatingWebhookConfiguration\n    name: gatekeeper-validating-webhook-configuration\n    operations:\n    - {"op": "remove", "path":"/webhooks/0/clientConfig/caBundle"}\n    - {"op": "remove", "path":"/webhooks/0/rules"}\n    - {"op": "remove", "path":"/webhooks/1/clientConfig/caBundle"}\n    - {"op": "remove", "path":"/webhooks/1/rules"}\n')),(0,o.kt)("p",null,"We can add these now to the bundle directly to test and also commit the same to the ",(0,o.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," in your GitRepo."),(0,o.kt)("p",null,'Once these are added, the GitRepo should deploy and be in "Active" status.'))}d.isMDXComponent=!0},6368:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ModifiedBundle-636a094dc9a854e2cc752ad34fcadd60.png"},9366:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ModifiedGitRepo-17a5600892cf08e11388c8612131d81d.png"},1418:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/WebhookConfigurationSpec-0721d92eb5e5e87e815ad8fe32242bed.png"}}]);