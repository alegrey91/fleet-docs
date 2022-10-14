"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Overview","href":"/","docId":"index"},{"type":"link","label":"Quick Start","href":"/quickstart","docId":"quickstart"},{"type":"link","label":"Core Concepts","href":"/concepts","docId":"concepts"},{"type":"link","label":"Architecture","href":"/architecture","docId":"architecture"},{"type":"link","label":"Examples","href":"/examples","docId":"examples"},{"type":"category","label":"Operator Guide","items":[{"type":"category","label":"Managing Clusters","items":[{"type":"category","label":"Registering","items":[{"type":"link","label":"Overview","href":"/cluster-overview","docId":"cluster-overview"},{"type":"link","label":"Cluster Registration Tokens","href":"/cluster-tokens","docId":"cluster-tokens"},{"type":"link","label":"Agent Initiated","href":"/agent-initiated","docId":"agent-initiated"},{"type":"link","label":"Manager Initiated","href":"/manager-initiated","docId":"manager-initiated"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"category","label":"Cluster Groups","items":[{"type":"link","label":"Cluster Groups","href":"/cluster-group","docId":"cluster-group"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Namespaces","href":"/namespaces","docId":"namespaces"}],"collapsed":true,"collapsible":true},{"type":"category","label":"User Guide","items":[{"type":"category","label":"Managing Git Repos","items":[{"type":"link","label":"Adding a GitRepo","href":"/gitrepo-add","docId":"gitrepo-add"},{"type":"link","label":"Expected Repo Structure","href":"/gitrepo-structure","docId":"gitrepo-structure"},{"type":"link","label":"Mapping to Downstream Clusters","href":"/gitrepo-targets","docId":"gitrepo-targets"},{"type":"link","label":"Generating Diffs for Modified GitRepos","href":"/bundle-diffs","docId":"bundle-diffs"},{"type":"link","label":"Webhook","href":"/webhook","docId":"webhook"},{"type":"link","label":"Image scan","href":"/imagescan","docId":"imagescan"},{"type":"link","label":"Cluster and Bundle state","href":"/cluster-bundles-state","docId":"cluster-bundles-state"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"link","label":"Troubleshooting","href":"/troubleshooting","docId":"troubleshooting"},{"type":"category","label":"Advanced Users","items":[{"type":"link","label":"Advanced Users","href":"/advanced-users","docId":"advanced-users"},{"type":"category","label":"Installation","items":[{"type":"link","label":"Installation","href":"/installation","docId":"installation"},{"type":"link","label":"Single Cluster Install","href":"/single-cluster-install","docId":"single-cluster-install"},{"type":"link","label":"Multi-cluster Install","href":"/multi-cluster-install","docId":"multi-cluster-install"},{"type":"link","label":"Uninstall","href":"/uninstall","docId":"uninstall"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true}]},"docs":{"advanced-users":{"id":"advanced-users","title":"Advanced Users","description":"Note that using Fleet outside of Rancher is highly discouraged for any users who do not need to perform advanced actions. However, there are some advanced use cases that may need to be performed outside of Rancher, also known as Standalone Fleet, or Fleet without Rancher. This section will highlight such use cases.","sidebar":"docs"},"agent-initiated":{"id":"agent-initiated","title":"Agent Initiated","description":"Refer to the overview page for a background information on the agent initiated registration style.","sidebar":"docs"},"architecture":{"id":"architecture","title":"Architecture","description":"Fleet has two primary components.  The Fleet manager and the cluster agents.  These","sidebar":"docs"},"bundle-diffs":{"id":"bundle-diffs","title":"Generating Diffs for Modified GitRepos","description":"Continuous Delivery in Rancher is powered by fleet. When a user adds a GitRepo CR, then Continuous Delivery creates the associated fleet bundles.","sidebar":"docs"},"cluster-bundles-state":{"id":"cluster-bundles-state","title":"Cluster and Bundle state","description":"Clusters and Bundles have different states in each phase of applying Bundles.","sidebar":"docs"},"cluster-group":{"id":"cluster-group","title":"Cluster Groups","description":"Clusters in a namespace can be put into a cluster group. A cluster group is essentially a named selector.","sidebar":"docs"},"cluster-overview":{"id":"cluster-overview","title":"Overview","description":"There are two specific styles to registering clusters. These styles will be referred","sidebar":"docs"},"cluster-tokens":{"id":"cluster-tokens","title":"Cluster Registration Tokens","description":"!!! hint \\"Not needed for Manager initiated registration\\"","sidebar":"docs"},"concepts":{"id":"concepts","title":"Core Concepts","description":"Fleet is fundamentally a set of Kubernetes custom resource definitions (CRDs) and controllers","sidebar":"docs"},"examples":{"id":"examples","title":"Examples","description":"Lifecycle of a Fleet Bundle","sidebar":"docs"},"gitrepo-add":{"id":"gitrepo-add","title":"Adding a GitRepo","description":"Proper namespace","sidebar":"docs"},"gitrepo-structure":{"id":"gitrepo-structure","title":"Expected Repo Structure","description":"The git repository has no explicitly required structure. It is important","sidebar":"docs"},"gitrepo-targets":{"id":"gitrepo-targets","title":"Mapping to Downstream Clusters","description":"!!! hint \\"Multi-cluster Only\\"","sidebar":"docs"},"imagescan":{"id":"imagescan","title":"Image scan","description":"Image scan in fleet allows you to scan your image repository, fetch the desired image and update your git repository,","sidebar":"docs"},"index":{"id":"index","title":"Overview","description":"What is Fleet?","sidebar":"docs"},"installation":{"id":"installation","title":"Installation","description":"The installation is broken up into two different use cases: Single and","sidebar":"docs"},"manager-initiated":{"id":"manager-initiated","title":"Manager Initiated","description":"Refer to the overview page for a background information on the manager initiated registration style.","sidebar":"docs"},"multi-cluster-install":{"id":"multi-cluster-install","title":"Multi-cluster Install","description":"Note: Downstream clusters in Rancher are automatically registered in Fleet. Users can access Fleet under Continuous Delivery on Rancher.","sidebar":"docs"},"namespaces":{"id":"namespaces","title":"Namespaces","description":"All types in the Fleet manager are namespaced.  The namespaces of the manager types do not correspond to the namespaces","sidebar":"docs"},"quickstart":{"id":"quickstart","title":"Quick Start","description":"Who needs documentation, lets just run this thing!","sidebar":"docs"},"single-cluster-install":{"id":"single-cluster-install","title":"Single Cluster Install","description":"In this use case you have only one cluster.  The cluster will run both the Fleet","sidebar":"docs"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"This section contains commands and tips to troubleshoot Fleet.","sidebar":"docs"},"uninstall":{"id":"uninstall","title":"Uninstall","description":"Fleet is packaged as two Helm charts so uninstall is accomplished by","sidebar":"docs"},"webhook":{"id":"webhook","title":"Webhook","description":"By default, Fleet utilizes polling (default: 15 seconds) to pull from a Git repo.However, this can be configured to utilize a webhook instead.Fleet currently supports Github,","sidebar":"docs"}}}')}}]);