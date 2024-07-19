"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[67],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(6540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=l,y=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return t?a.createElement(y,i(i({ref:n},m),{},{components:t})):a.createElement(y,i({ref:n},m))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(8168),l=(t(6540),t(5680));const r={},i="Git Repository Contents",o={unversionedId:"gitrepo-content",id:"version-0.9/gitrepo-content",title:"Git Repository Contents",description:"Fleet will create bundles from a git repository. This happens either explicitly by specifying paths, or when a fleet.yaml is found.",source:"@site/versioned_docs/version-0.9/gitrepo-content.md",sourceDirName:".",slug:"/gitrepo-content",permalink:"/0.9/gitrepo-content",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.9/gitrepo-content.md",tags:[],version:"0.9",lastUpdatedAt:1721380485,formattedLastUpdatedAt:"Jul 19, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Bundle Lifecycle",permalink:"/0.9/ref-bundle-stages"},next:{title:"Namespaces",permalink:"/0.9/namespaces"}},s={},p=[{value:"How repos are scanned",id:"how-repos-are-scanned",level:2},{value:"Excluding files and directories from bundles",id:"excluding-files-and-directories-from-bundles",level:3},{value:"<code>fleet.yaml</code>",id:"fleetyaml",level:2},{value:"Using Helm Values",id:"using-helm-values",level:2},{value:"Using ValuesFrom",id:"using-valuesfrom",level:3},{value:"Per Cluster Customization",id:"per-cluster-customization",level:2},{value:"Raw YAML Resource Customization",id:"raw-yaml-resource-customization",level:2},{value:"Cluster and Bundle State",id:"cluster-and-bundle-state",level:2}],m={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,l.yg)(d,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"git-repository-contents"},"Git Repository Contents"),(0,l.yg)("p",null,"Fleet will create bundles from a git repository. This happens either explicitly by specifying paths, or when a ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," is found."),(0,l.yg)("p",null,"Each bundle is created from paths in a GitRepo and modified further by reading the discovered ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," file.\nBundle lifecycles are tracked between releases by the helm releaseName field added to each bundle. If the releaseName is not\nspecified within fleet.yaml it is generated from ",(0,l.yg)("inlineCode",{parentName:"p"},"GitRepo.name + path"),". Long names are truncated and a ",(0,l.yg)("inlineCode",{parentName:"p"},"-<hash>")," prefix is added."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"The git repository has no explicitly required structure.")," It is important\nto realize the scanned resources will be saved as a resource in Kubernetes so\nyou want to make sure the directories you are scanning in git do not contain\narbitrarily large resources. Right now there is a limitation that the resources\ndeployed must ",(0,l.yg)("strong",{parentName:"p"},"gzip to less than 1MB"),"."),(0,l.yg)("h2",{id:"how-repos-are-scanned"},"How repos are scanned"),(0,l.yg)("p",null,"Multiple paths can be defined for a ",(0,l.yg)("inlineCode",{parentName:"p"},"GitRepo")," and each path is scanned independently.\nInternally each scanned path will become a ",(0,l.yg)("a",{parentName:"p",href:"/0.9/concepts"},"bundle")," that Fleet will manage,\ndeploy, and monitor independently."),(0,l.yg)("p",null,"The following files are looked for to determine the how the resources will be deployed."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"File"),(0,l.yg)("th",{parentName:"tr",align:null},"Location"),(0,l.yg)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"Chart.yaml"),":"),(0,l.yg)("td",{parentName:"tr",align:null},"/ relative to ",(0,l.yg)("inlineCode",{parentName:"td"},"path")," or custom path from ",(0,l.yg)("inlineCode",{parentName:"td"},"fleet.yaml")),(0,l.yg)("td",{parentName:"tr",align:null},"The resources will be deployed as a Helm chart. Refer to the ",(0,l.yg)("inlineCode",{parentName:"td"},"fleet.yaml")," for more options.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"kustomization.yaml"),":"),(0,l.yg)("td",{parentName:"tr",align:null},"/ relative to ",(0,l.yg)("inlineCode",{parentName:"td"},"path")," or custom path from ",(0,l.yg)("inlineCode",{parentName:"td"},"fleet.yaml")),(0,l.yg)("td",{parentName:"tr",align:null},"The resources will be deployed using Kustomize. Refer to the ",(0,l.yg)("inlineCode",{parentName:"td"},"fleet.yaml")," for more options.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"fleet.yaml")),(0,l.yg)("td",{parentName:"tr",align:null},"Any subpath"),(0,l.yg)("td",{parentName:"tr",align:null},"If any fleet.yaml is found a new ",(0,l.yg)("a",{parentName:"td",href:"/0.9/concepts"},"bundle")," will be defined. This allows mixing charts, kustomize, and raw YAML in the same repo")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"}," *.yaml ")),(0,l.yg)("td",{parentName:"tr",align:null},"Any subpath"),(0,l.yg)("td",{parentName:"tr",align:null},"If a ",(0,l.yg)("inlineCode",{parentName:"td"},"Chart.yaml")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"kustomization.yaml")," is not found then any ",(0,l.yg)("inlineCode",{parentName:"td"},".yaml")," or ",(0,l.yg)("inlineCode",{parentName:"td"},".yml")," file will be assumed to be a Kubernetes resource and will be deployed.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"overlays/{name}")),(0,l.yg)("td",{parentName:"tr",align:null},"/ relative to ",(0,l.yg)("inlineCode",{parentName:"td"},"path")),(0,l.yg)("td",{parentName:"tr",align:null},"When deploying using raw YAML (not Kustomize or Helm) ",(0,l.yg)("inlineCode",{parentName:"td"},"overlays")," is a special directory for customizations.")))),(0,l.yg)("h3",{id:"excluding-files-and-directories-from-bundles"},"Excluding files and directories from bundles"),(0,l.yg)("p",null,"Fleet supports file and directory exclusion by means of ",(0,l.yg)("inlineCode",{parentName:"p"},".fleetignore")," files, in a similar fashion to how ",(0,l.yg)("inlineCode",{parentName:"p"},".gitignore"),"\nfiles behave in git repositories:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Glob syntax is used to match files or directories, using Golang's\n",(0,l.yg)("a",{parentName:"li",href:"https://pkg.go.dev/path/filepath#Match"},(0,l.yg)("inlineCode",{parentName:"a"},"filepath.Match"))),(0,l.yg)("li",{parentName:"ul"},"Empty lines are skipped, and can therefore be used to improve readability"),(0,l.yg)("li",{parentName:"ul"},"Characters like white spaces and ",(0,l.yg)("inlineCode",{parentName:"li"},"#")," can be escaped with a backslash"),(0,l.yg)("li",{parentName:"ul"},"Trailing spaces are ignored, unless escaped"),(0,l.yg)("li",{parentName:"ul"},"Comments, ie lines starting with unescaped ",(0,l.yg)("inlineCode",{parentName:"li"},"#"),", are skipped"),(0,l.yg)("li",{parentName:"ul"},"A given line can match a file or a directory, even if no separator is provided: eg. ",(0,l.yg)("inlineCode",{parentName:"li"},"subdir/*")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"subdir")," are both\nvalid ",(0,l.yg)("inlineCode",{parentName:"li"},".fleetignore")," lines, and ",(0,l.yg)("inlineCode",{parentName:"li"},"subdir")," matches both files and directories called ",(0,l.yg)("inlineCode",{parentName:"li"},"subdir")),(0,l.yg)("li",{parentName:"ul"},"A match may be found for a file or directory at any level below the directory where a ",(0,l.yg)("inlineCode",{parentName:"li"},".fleetignore")," lives, ie\n",(0,l.yg)("inlineCode",{parentName:"li"},"foo.yaml")," will match ",(0,l.yg)("inlineCode",{parentName:"li"},"./foo.yaml")," as well as ",(0,l.yg)("inlineCode",{parentName:"li"},"./path/to/foo.yaml")),(0,l.yg)("li",{parentName:"ul"},"Multiple ",(0,l.yg)("inlineCode",{parentName:"li"},".fleetignore")," files are supported. For instance, in the following directory structure, only\n",(0,l.yg)("inlineCode",{parentName:"li"},"root/something.yaml"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"bar/something2.yaml")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"foo/something.yaml")," will end up in a bundle:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"root/\n\u251c\u2500\u2500 .fleetignore            # contains `ignore-always.yaml'\n\u251c\u2500\u2500 something.yaml\n\u251c\u2500\u2500 bar\n\u2502\xa0\xa0 \u251c\u2500\u2500 .fleetignore        # contains `something.yaml`\n\u2502\xa0\xa0 \u251c\u2500\u2500 ignore-always.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 something2.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 something.yaml\n\u2514\u2500\u2500 foo\n \xa0\xa0 \u251c\u2500\u2500 ignore-always.yaml\n \xa0\xa0 \u2514\u2500\u2500 something.yaml\n")),(0,l.yg)("p",null,"This currently comes with a few limitations, the following not being supported:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Double asterisks (",(0,l.yg)("inlineCode",{parentName:"li"},"**"),")"),(0,l.yg)("li",{parentName:"ul"},"Explicit inclusions with ",(0,l.yg)("inlineCode",{parentName:"li"},"!"))),(0,l.yg)("h2",{id:"fleetyaml"},(0,l.yg)("inlineCode",{parentName:"h2"},"fleet.yaml")),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," is an optional file that can be included in the git repository to change the behavior of how\nthe resources are deployed and customized.  The ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," is always at the root relative to the ",(0,l.yg)("inlineCode",{parentName:"p"},"path")," of the ",(0,l.yg)("inlineCode",{parentName:"p"},"GitRepo"),"\nand if a subdirectory is found with a ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," a new ",(0,l.yg)("a",{parentName:"p",href:"/0.9/concepts"},"bundle")," is defined that will then be\nconfigured differently from the parent bundle."),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},(0,l.yg)("strong",{parentName:"p"},"Helm chart dependencies"),":\nIt is up to the user to fulfill the dependency list for the Helm charts. As such, you must manually run ",(0,l.yg)("inlineCode",{parentName:"p"},"helm dependencies update $chart")," OR run ",(0,l.yg)("inlineCode",{parentName:"p"},"helm dependencies build $chart")," prior to install. See the ",(0,l.yg)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/deploy-across-clusters/fleet/#helm-chart-dependencies"},"Fleet docs")," in Rancher for more information.")),(0,l.yg)("p",null,"The available fields are documented in the ",(0,l.yg)("a",{parentName:"p",href:"/0.9/ref-fleet-yaml"},"fleet.yaml reference")),(0,l.yg)("p",null,"For a private Helm repo, users can reference a secret from the git repo resource.\nSee ",(0,l.yg)("a",{parentName:"p",href:"/0.9/gitrepo-add#using-private-helm-repositories"},"Using Private Helm Repositories")," for more information."),(0,l.yg)("h2",{id:"using-helm-values"},"Using Helm Values"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"How changes are applied to ",(0,l.yg)("inlineCode",{parentName:"strong"},"values.yaml")),":"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Note that the most recently applied changes to the ",(0,l.yg)("inlineCode",{parentName:"p"},"values.yaml")," will override any previously existing values.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"When changes are applied to the ",(0,l.yg)("inlineCode",{parentName:"p"},"values.yaml")," from multiple sources at the same time, the values will update in the following order: ",(0,l.yg)("inlineCode",{parentName:"p"},"helm.values")," -> ",(0,l.yg)("inlineCode",{parentName:"p"},"helm.valuesFiles")," -> ",(0,l.yg)("inlineCode",{parentName:"p"},"helm.valuesFrom"),". That means ",(0,l.yg)("inlineCode",{parentName:"p"},"valuesFrom")," will take precedence over both, ",(0,l.yg)("inlineCode",{parentName:"p"},"valuesFiles")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"values"),"."))),(0,l.yg)("h3",{id:"using-valuesfrom"},"Using ValuesFrom"),(0,l.yg)("p",null,"These examples showcase the style and format for using ",(0,l.yg)("inlineCode",{parentName:"p"},"valuesFrom"),". ConfigMaps and Secrets should be created in ",(0,l.yg)("em",{parentName:"p"},"downstream clusters"),"."),(0,l.yg)("p",null,"Example ",(0,l.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/configmap/"},"ConfigMap"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: configmap-values\n  namespace: default\ndata:\n  values.yaml: |-\n    replication: true\n    replicas: 2\n    serviceType: NodePort\n")),(0,l.yg)("p",null,"Example ",(0,l.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Secret"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: secret-values\n  namespace: default\nstringData:\n  values.yaml: |-\n    replication: true\n    replicas: 3\n    serviceType: NodePort\n")),(0,l.yg)("p",null,"A secret like that, can be created from a YAML file ",(0,l.yg)("inlineCode",{parentName:"p"},"secretdata.yaml")," by running the following kubectl command: ",(0,l.yg)("inlineCode",{parentName:"p"},"kubectl create secret generic secret-values --from-file=values.yaml=secretdata.yaml")),(0,l.yg)("p",null,"The resources can then be referenced from a ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'helm:\n  chart: simple-chart\n  valuesFrom:\n    - secretKeyRef:\n        name: secret-values\n        namespace: default\n        key: values.yaml\n    - configMapKeyRef:\n        name: configmap-values\n        namespace: default\n        key: values.yaml\n  values:\n    replicas: "4"\n')),(0,l.yg)("h2",{id:"per-cluster-customization"},"Per Cluster Customization"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"GitRepo")," defines which clusters a git repository should be deployed to and the ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," in the repository\ndetermines how the resources are customized per target."),(0,l.yg)("p",null,"All clusters and cluster groups in the same namespace as the ",(0,l.yg)("inlineCode",{parentName:"p"},"GitRepo")," will be evaluated against all targets of that\n",(0,l.yg)("inlineCode",{parentName:"p"},"GitRepo"),". The targets list is evaluated one by one and if there is a match the resource will be deployed to the cluster.\nIf no match is made against the target list on the ",(0,l.yg)("inlineCode",{parentName:"p"},"GitRepo")," then the resources will not be deployed to that cluster.\nOnce a target cluster is matched the ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," from the git repository is then consulted for customizations. The\n",(0,l.yg)("inlineCode",{parentName:"p"},"targetCustomizations")," in the ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," will be evaluated one by one and the first match will define how the\nresource is to be configured. If no match is made the resources will be deployed with no additional customizations."),(0,l.yg)("p",null,"There are three approaches to matching clusters for both ",(0,l.yg)("inlineCode",{parentName:"p"},"GitRepo")," ",(0,l.yg)("inlineCode",{parentName:"p"},"targets")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," ",(0,l.yg)("inlineCode",{parentName:"p"},"targetCustomizations"),'.\nOne can use cluster selectors, cluster group selectors, or an explicit cluster group name.  All criteria is additive so\nthe final match is evaluated as "clusterSelector && clusterGroupSelector && clusterGroup".  If any of the three have the\ndefault value it is dropped from the criteria.  The default value is either null or "".  It is important to realize\nthat the value ',(0,l.yg)("inlineCode",{parentName:"p"},"{}"),' for a selector means "match everything."'),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"targetCustomizations:\n- name: all\n  # Match everything\n  clusterSelector: {}\n- name: none\n  # Selector ignored\n  clusterSelector: null\n")),(0,l.yg)("p",null,"When matching a cluster by name, make sure to use the name of the\n",(0,l.yg)("inlineCode",{parentName:"p"},"clusters.fleet.cattle.io")," resource. The Rancher UI also has a provisioning and\na management cluster resource. Since the management cluster resource is not\nnamespaced, its name is different and contains a random suffix."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"targetCustomizations:\n- name: prod\n  clusterName: fleetname\n")),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"gitrepo-targets#customization-per-cluster"},"Mapping to Downstream Clusters")," for more information and a list of supported customizations."),(0,l.yg)("h2",{id:"raw-yaml-resource-customization"},"Raw YAML Resource Customization"),(0,l.yg)("p",null,"When using Kustomize or Helm the ",(0,l.yg)("inlineCode",{parentName:"p"},"kustomization.yaml")," or the ",(0,l.yg)("inlineCode",{parentName:"p"},"helm.values")," will control how the resource are\ncustomized per target cluster. If you are using raw YAML then the following simple mechanism is built-in and can\nbe used.  The ",(0,l.yg)("inlineCode",{parentName:"p"},"overlays/")," folder in the git repo is treated specially as folder containing folders that\ncan be selected to overlay on top per target cluster. The resource overlay content\nuses a file name based approach.  This is different from kustomize which uses a resource based approach.  In kustomize\nthe resource Group, Kind, Version, Name, and Namespace identify resources and are then merged or patched.  For Fleet\nthe overlay resources will override or patch content with a matching file name."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"# Base files\ndeployment.yaml\nsvc.yaml\n\n# Overlay files\n\n# The following file will be added\noverlays/custom/configmap.yaml\n# The following file will replace svc.yaml\noverlays/custom/svc.yaml\n# The following file will patch deployment.yaml\noverlays/custom/deployment_patch.yaml\n")),(0,l.yg)("p",null,"A file named ",(0,l.yg)("inlineCode",{parentName:"p"},"foo")," will replace a file called ",(0,l.yg)("inlineCode",{parentName:"p"},"foo")," from the base resources or a previous overlay.  In order to patch\nthe contents of a file the convention of adding ",(0,l.yg)("inlineCode",{parentName:"p"},"_patch.")," (notice the trailing period) to the filename is used. The string ",(0,l.yg)("inlineCode",{parentName:"p"},"_patch."),"\nwill be replaced with ",(0,l.yg)("inlineCode",{parentName:"p"},".")," from the file name and that will be used as the target.  For example ",(0,l.yg)("inlineCode",{parentName:"p"},"deployment_patch.yaml"),"\nwill target ",(0,l.yg)("inlineCode",{parentName:"p"},"deployment.yaml"),".  The patch will be applied using JSON Merge, Strategic Merge Patch, or JSON Patch.\nWhich strategy is used is based on the file content. Even though JSON strategies are used, the files can be written\nusing YAML syntax."),(0,l.yg)("h2",{id:"cluster-and-bundle-state"},"Cluster and Bundle State"),(0,l.yg)("p",null,"See ",(0,l.yg)("a",{parentName:"p",href:"/0.9/cluster-bundles-state"},"Cluster and Bundle state"),"."))}c.isMDXComponent=!0}}]);