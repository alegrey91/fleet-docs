"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[1489],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(8168),l=(n(6540),n(5680));const o={},r="fleet.yaml",i={unversionedId:"ref-fleet-yaml",id:"version-0.10/ref-fleet-yaml",title:"fleet.yaml",description:"The fleet.yaml file adds options to a bundle. Any directory with a",source:"@site/versioned_docs/version-0.10/ref-fleet-yaml.md",sourceDirName:".",slug:"/ref-fleet-yaml",permalink:"/0.10/ref-fleet-yaml",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.10/ref-fleet-yaml.md",tags:[],version:"0.10",lastUpdatedAt:1721380485,formattedLastUpdatedAt:"Jul 19, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Custom Resources Spec",permalink:"/0.10/ref-crds"},next:{title:"GitRepo Resource",permalink:"/0.10/ref-gitrepo"}},s={},u=[{value:"Reference",id:"reference",level:3},{value:"Helm Options",id:"helm-options",level:3},{value:"How fleet-agent deploys the bundle",id:"how-fleet-agent-deploys-the-bundle",level:4},{value:"Helm Chart Download Options",id:"helm-chart-download-options",level:4},{value:"Helm Chart Value Options",id:"helm-chart-value-options",level:4},{value:"Templating",id:"templating",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,l.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"fleetyaml"},"fleet.yaml"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," file adds options to a bundle. Any directory with a\n",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," is automatically turned into bundle."),(0,l.yg)("p",null,"For more information on how to use the ",(0,l.yg)("inlineCode",{parentName:"p"},"fleet.yaml")," to customize bundles see\n",(0,l.yg)("a",{parentName:"p",href:"/0.10/gitrepo-content"},"Git Repository Contents"),"."),(0,l.yg)("p",null,"The content of the fleet.yaml corresponds to the struct at\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet/blob/b501b7e7864d37e310dfcdb109c73e5aec4240bb/pkg/bundlereader/read.go#L132-L139"},"pkg/bundlereader/read.go"),",\nwhich contains the ",(0,l.yg)("a",{parentName:"p",href:"./ref-crds#bundlespec"},"BundleSpec"),"."),(0,l.yg)("h3",{id:"reference"},"Reference"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="fleet.yaml"',title:'"fleet.yaml"'},'# The default namespace to be applied to resources. This field is not used to\n# enforce or lock down the deployment to a specific namespace, but instead\n# provide the default value of the namespace field if one is not specified in\n# the manifests.\n#\n# Default: default\ndefaultNamespace: default\n\n# All resources will be assigned to this namespace and if any cluster scoped\n# resource exists the deployment will fail.\n#\n# Default: ""\nnamespace: default\n\n# namespaceLabels are labels that will be appended to the namespace created by\n# Fleet.\nnamespaceLabels:\n  key: value\n\n# namespaceAnnotations are annotations that will be appended to the namespace\n# created by Fleet.\nnamespaceAnnotations:\n  key: value\n\n# Optional map of labels, that are set at the bundle and can be used in a\n# dependsOn.selector\nlabels:\n  key: value\n\nkustomize:\n  # Use a custom folder for kustomize resources. This folder must contain a\n  # kustomization.yaml file.\n  dir: ./kustomize\n\nhelm:\n\n  # These options control how "fleet apply" downloads the chart\n  #\n  # Use a custom location for the Helm chart. This can refer to any go-getter\n  # URL or OCI registry based helm chart URL e.g.\n  # "oci://ghcr.io/fleetrepoci/guestbook".  This allows one to download charts\n  # from most any location.  Also know that go-getter URL supports adding a\n  # digest to validate the download. If repo is set below this field is the name\n  # of the chart to lookup.\n  #\n  # It is possible to download the chart from a Git repository, e.g.  by using\n  # `git@github.com:rancher/fleet-examples//single-cluster/helm`. If a secret\n  # for the SSH key was defined in the GitRepo via `helmSecretName`, it will be\n  # injected into the chart URL.\n  #\n  # Git repositories can be downloaded via unauthenticated http, by using for\n  # example:\n  #\n  # `git::http://github.com/rancher/fleet-examples/single-cluster/helm`.\n  chart: ./chart\n\n  # A https URL to a Helm repo to download the chart from. It\'s typically easier\n  # to just use `chart` field and refer to a tgz file.  If repo is used the\n  # value of `chart` will be used as the chart name to lookup in the Helm\n  # repository.\n  repo: https://charts.rancher.io\n\n  # The version of the chart or semver constraint of the chart to find. If a\n  # constraint is specified it is evaluated each time git changes.\n  #\n  # The version also determines which chart to download from OCI registries.\n  # Note: OCI registries don\'t support the \'+\' character, which is supported by\n  # semver.  When pushing a helm chart with a tag containing the \'+\' character\n  # helm automatically replaces \'+\' to \'_\' before uploading it.\n  #\n  # You should use the version with the \'+\' in this file, as the \'_\' character\n  # is not supported by semver and Fleet also replaces \'+\' to \'_\' when accessing\n  # the OCI registry.\n  version: 0.1.0\n\n  # By default fleet downloads any dependency found in a helm chart.  Use\n  # disableDependencyUpdate: true to disable this feature.\n  disableDependencyUpdate: false\n\n  ### These options only work for helm-type bundles.\n  #\n  # Any values that should be placed in the `values.yaml` and passed to helm\n  # during install.\n  values:\n\n    any-custom: value\n\n    # All labels on Rancher clusters are available using\n    # global.fleet.clusterLabels.LABELNAME These can now be accessed directly as\n    # variables The variable\'s value will be an empty string if the referenced\n    # cluster label does not exist on the targeted cluster.\n    variableName: global.fleet.clusterLabels.LABELNAME\n\n    # See Templating notes below for more information on templating.\n    templatedLabel: "${ .ClusterLabels.LABELNAME }-foo"\n\n    valueFromEnv:\n      "${ .ClusterLabels.ENV }": ${ .ClusterValues.someValue | upper | quote }\n\n  # Path to any values files that need to be passed to helm during install.\n  valuesFiles:\n    - values1.yaml\n    - values2.yaml\n\n  # Allow to use values files from configmaps or secrets defined in the\n  # downstream clusters.\n  valuesFrom:\n    - configMapKeyRef:\n        name: configmap-values\n        # default to namespace of bundle\n        namespace: default\n        key: values.yaml\n    - secretKeyRef:\n        name: secret-values\n        namespace: default\n        key: values.yaml\n\n  ### These options control how fleet-agent deploys the bundle, they also apply\n  ### for kustomize- and manifest-style bundles.\n  #\n  # A custom release name to deploy the chart as. If not specified a release name\n  # will be generated by combining the invoking GitRepo.name + GitRepo.path.\n  releaseName: my-release\n  #\n  # Makes helm skip the check for its own annotations\n  takeOwnership: false\n  #\n  # Override immutable resources. This could be dangerous.\n  force: false\n  #\n  # Set the Helm --atomic flag when upgrading\n  atomic: false\n  #\n  # Disable go template pre-processing on the fleet values\n  disablePreProcess: false\n  #\n  # Disable DNS resolution in Helm\'s template functions\n  disableDNS: false\n  #\n  # Skip evaluation of the values.schema.json file\n  skipSchemaValidation: false\n  #\n  # If set and timeoutSeconds provided, will wait until all Jobs have been\n  # completed before marking the GitRepo as ready.  It will wait for as long as\n  # timeoutSeconds.\n  waitForJobs: true\n\n# A paused bundle will not update downstream clusters but instead mark the bundle\n# as OutOfSync. One can then manually confirm that a bundle should be deployed to\n# the downstream clusters.\n#\n# Default: false\npaused: false\n\nrolloutStrategy:\n\n  # A number or percentage of clusters that can be unavailable during an update\n  # of a bundle. This follows the same basic approach as a deployment rollout\n  # strategy. Once the number of clusters meets unavailable state update will be\n  # paused. Default value is 100% which doesn\'t take effect on update.\n  #\n  # default: 100%\n  maxUnavailable: 15%\n\n  # A number or percentage of cluster partitions that can be unavailable during\n  # an update of a bundle.\n  #\n  # default: 0\n  maxUnavailablePartitions: 20%\n\n  # A number of percentage of how to automatically partition clusters if not\n  # specific partitioning strategy is configured.\n  #\n  # default: 25%\n  autoPartitionSize: 10%\n\n  # A list of definitions of partitions.  If any target clusters do not match\n  # the configuration they are added to partitions at the end following the\n  # autoPartitionSize.\n  partitions:\n\n    # A user friend name given to the partition used for Display (optional).\n    # default: ""\n    - name: canary\n\n      # A number or percentage of clusters that can be unavailable in this\n      # partition before this partition is treated as done.\n      # default: 10%\n      maxUnavailable: 10%\n\n      # Selector matching cluster labels to include in this partition\n      clusterSelector:\n        matchLabels:\n          env: prod\n\n      # A cluster group name to include in this partition\n      clusterGroup: agroup\n\n      # Selector matching cluster group labels to include in this partition\n      clusterGroupSelector:\n        clusterSelector:\n          matchLabels:\n            env: prod\n\n# Target customization are used to determine how resources should be modified\n# per target Targets are evaluated in order and the first one to match a cluster\n# is used for that cluster.\ntargetCustomizations:\n\n  # The name of target. If not specified a default name of the format\n  # "target000" will be used. This value is mostly for display\n  - name: prod\n\n    # Custom namespace value overriding the value at the root.\n    namespace: newvalue\n\n    # Custom defaultNamespace value overriding the value at the root.\n    defaultNamespace: newdefaultvalue\n\n    # Custom kustomize options overriding the options at the root.\n    kustomize: {}\n\n    # Custom Helm options override the options at the root.\n    helm: {}\n\n    # If using raw YAML these are names that map to overlays/{name} that will be\n    # used to replace or patch a resource. If you wish to customize the file\n    # ./subdir/resource.yaml then a file\n    # ./overlays/myoverlay/subdir/resource.yaml will replace the base file.  A\n    # file named ./overlays/myoverlay/subdir/resource_patch.yaml will patch the\n    # base file.  A patch can in JSON Patch or JSON Merge format or a strategic\n    # merge patch for builtin Kubernetes types. Refer to "Raw YAML Resource\n    # Customization" below for more information.\n    yaml:\n      overlays:\n        - custom2\n        - custom3\n\n    # A selector used to match clusters.  The structure is the standard\n    # metav1.LabelSelector format. If clusterGroupSelector or clusterGroup is\n    # specified, clusterSelector will be used only to further refine the\n    # selection after clusterGroupSelector and clusterGroup is evaluated.\n    clusterSelector:\n      matchLabels:\n        env: prod\n\n    # A selector used to match a specific cluster by name. When using Fleet in\n    # Rancher, make sure to put the name of the clusters.fleet.cattle.io\n    # resource.\n    clusterName: dev-cluster\n\n    # A selector used to match cluster groups.\n    clusterGroupSelector:\n      matchLabels:\n        region: us-east\n\n    # A specific clusterGroup by name that will be selected.\n    clusterGroup: group1\n\n    # Resources will not be deployed in the matched clusters if doNotDeploy is\n    # true.\n    doNotDeploy: false\n\n    # Drift correction removes any external change made to resources managed by\n    # Fleet.  It performs a helm rollback, which uses a three-way merge strategy\n    # by default.  It will try to update all resources by doing a PUT request if\n    # force is enabled.  Three-way strategic merge might fail when updating an\n    # item inside of an array as it will try to add a new item instead of\n    # replacing the existing one.  This can be fixed by using force.  Keep in\n    # mind that resources might be recreated if force is enabled.  Failed\n    # rollback will be removed from the helm history unless keepFailHistory is\n    # set to true.\n    correctDrift:\n      enabled: false\n      force: false # Warning: it might recreate resources if set to true\n      keepFailHistory: false\n\n# dependsOn allows you to configure dependencies to other bundles. The current\n# bundle will only be deployed, after all dependencies are deployed and in a\n# Ready state.\ndependsOn:\n\n  # Format:\n  #     <GITREPO-NAME>-<BUNDLE_PATH> with all path separators replaced by "-"\n  #\n  # Example:\n  #\n  #      GitRepo name "one", Bundle path "/multi-cluster/hello-world"\n  #      results in "one-multi-cluster-hello-world".\n  #\n  # Note:\n  #\n  #   Bundle names are limited to 53 characters long. If longer they will be\n  #   shortened:\n  #\n  #     opni-fleet-examples-fleets-opni-ui-plugin-operator-crd becomes\n  #     opni-fleet-examples-fleets-opni-ui-plugin-opera-021f7\n  - name: one-multi-cluster-hello-world\n\n  # Select bundles to depend on based on their label.\n  - selector:\n      matchLabels:\n        app: weak-monkey\n\n# Ignore fields when monitoring a Bundle. This can be used when Fleet thinks\n# some conditions in Custom Resources makes the Bundle to be in an error state\n# when it shouldn\'t.\nignore:\n\n  # Conditions to be ignored\n  conditions:\n\n    # In this example a condition will be ignored if it contains\n    # {"type": "Active", "status", "False"}\n    - type: Active\n      status: "False"\n\n# Override targets defined in the GitRepo. The Bundle will not have any targets\n# from the GitRepo if overrideTargets is provided.\noverrideTargets:\n  - clusterSelector:\n      matchLabels:\n        env: dev\n')),(0,l.yg)("h3",{id:"helm-options"},"Helm Options"),(0,l.yg)("h4",{id:"how-fleet-agent-deploys-the-bundle"},"How fleet-agent deploys the bundle"),(0,l.yg)("p",null,"These options also apply to kustomize- and manifest-style bundles.  They control\nhow the fleet-agent deploys the bundle. All bundles are converted into Helm\ncharts and deployed with the Helm SDK.  These options are often similar to the\nHelm CLI options for install and update."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"releaseName"),(0,l.yg)("li",{parentName:"ul"},"takeOwnership"),(0,l.yg)("li",{parentName:"ul"},"force"),(0,l.yg)("li",{parentName:"ul"},"atomic"),(0,l.yg)("li",{parentName:"ul"},"disablePreProcess"),(0,l.yg)("li",{parentName:"ul"},"disableDNS"),(0,l.yg)("li",{parentName:"ul"},"skipSchemaValidation"),(0,l.yg)("li",{parentName:"ul"},"waitForJobs")),(0,l.yg)("h4",{id:"helm-chart-download-options"},"Helm Chart Download Options"),(0,l.yg)("p",null,"These options are for Helm-style bundles, they specify how to download the\nchart."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"chart"),(0,l.yg)("li",{parentName:"ul"},"repo"),(0,l.yg)("li",{parentName:"ul"},"version")),(0,l.yg)("p",null,"The reference to the chart can be either:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"a local path in the cloned Git repository, specified by ",(0,l.yg)("inlineCode",{parentName:"li"},"chart"),"."),(0,l.yg)("li",{parentName:"ul"},"a ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/hashicorp/go-getter?tab=readme-ov-file#url-format"},"go-getter URL"),",\nspecified by ",(0,l.yg)("inlineCode",{parentName:"li"},"chart"),". This can be used to download a tarball\nof the chart. go-getter also allows to download a chart from a Git repo."),(0,l.yg)("li",{parentName:"ul"},"a Helm repository, specified by ",(0,l.yg)("inlineCode",{parentName:"li"},"repo")," and optionally ",(0,l.yg)("inlineCode",{parentName:"li"},"version"),"."),(0,l.yg)("li",{parentName:"ul"},"an OCI Helm repository, specified by ",(0,l.yg)("inlineCode",{parentName:"li"},"repo")," and optionally ",(0,l.yg)("inlineCode",{parentName:"li"},"version"),".")),(0,l.yg)("h4",{id:"helm-chart-value-options"},"Helm Chart Value Options"),(0,l.yg)("p",null,"Options for the downloaded Helm chart."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"values"),(0,l.yg)("li",{parentName:"ul"},"valuesFiles"),(0,l.yg)("li",{parentName:"ul"},"valueFrom")),(0,l.yg)("h3",{id:"templating"},"Templating"),(0,l.yg)("p",null,"It is possible to specify the keys and values as go template strings for\nadvanced templating needs.  Most of the functions from the ",(0,l.yg)("a",{parentName:"p",href:"https://masterminds.github.io/sprig/"},"sprig templating\nlibrary")," are available."),(0,l.yg)("p",null,"Note that if the functions output changes with every call, e.g. ",(0,l.yg)("inlineCode",{parentName:"p"},"uuidv4"),", the\nbundle will get redeployed."),(0,l.yg)("p",null,"The template context has the following keys:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},".ClusterValues")," are retrieved from target cluster's ",(0,l.yg)("inlineCode",{parentName:"li"},"spec.templateValues")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},".ClusterLabels")," and ",(0,l.yg)("inlineCode",{parentName:"li"},".ClusterAnnotations")," are the labels and annotations in\nthe cluster resource."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},".ClusterName")," as the fleet's cluster resource name."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},".ClusterNamespace")," as the namespace in which the cluster resource exists.")),(0,l.yg)("p",null,"To access Labels or Annotations by their key name:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'${ get .ClusterLabels "management.cattle.io/cluster-display-name" }\n')),(0,l.yg)("p",null,"Note: The fleet.yaml must be valid yaml. Templating uses ",(0,l.yg)("inlineCode",{parentName:"p"},"${ }")," as delims,\nunlike Helm which uses ",(0,l.yg)("inlineCode",{parentName:"p"},"{{ }}"),".  These fleet.yaml template delimiters can be\nescaped using backticks, eg.:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"foo-bar-${`${PWD}`}\n")),(0,l.yg)("p",null,"will result in the following text:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"foo-bar-${PWD}\n")))}p.isMDXComponent=!0}}]);