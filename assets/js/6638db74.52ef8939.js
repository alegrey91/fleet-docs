"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[5408],{7713:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"0.7","label":"0.7","banner":null,"badge":true,"noIndex":false,"className":"docs-version-0.7","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Overview","href":"/0.7/","docId":"index"},{"type":"category","label":"Tutorials","collapsed":false,"items":[{"type":"link","label":"Quick Start","href":"/0.7/quickstart","docId":"quickstart"},{"type":"link","label":"Creating a Deployment","href":"/0.7/tut-deployment","docId":"tut-deployment"},{"type":"link","label":"Uninstall","href":"/0.7/uninstall","docId":"uninstall"}],"collapsible":true},{"type":"category","label":"Explanations","collapsed":false,"items":[{"type":"link","label":"Architecture","href":"/0.7/architecture","docId":"architecture"},{"type":"link","label":"Core Concepts","href":"/0.7/concepts","docId":"concepts"},{"type":"link","label":"Bundle Lifecycle","href":"/0.7/ref-bundle-stages","docId":"ref-bundle-stages"},{"type":"link","label":"Git Repository Contents","href":"/0.7/gitrepo-content","docId":"gitrepo-content"},{"type":"link","label":"Namespaces","href":"/0.7/namespaces","docId":"namespaces"},{"type":"link","label":"Custom Resources","href":"/0.7/ref-resources","docId":"ref-resources"}],"collapsible":true},{"type":"category","label":"How-tos for Operators","collapsed":false,"items":[{"type":"link","label":"Installation Details","href":"/0.7/installation","docId":"installation"},{"type":"link","label":"Register Downstream Clusters","href":"/0.7/cluster-registration","docId":"cluster-registration"},{"type":"link","label":"Create Cluster Groups","href":"/0.7/cluster-group","docId":"cluster-group"},{"type":"link","label":"Setup Multi User","href":"/0.7/multi-user","docId":"multi-user"}],"collapsible":true},{"type":"category","label":"How-tos for Users","collapsed":false,"items":[{"type":"link","label":"Create a GitRepo Resource","href":"/0.7/gitrepo-add","docId":"gitrepo-add"},{"type":"link","label":"Mapping to Downstream Clusters","href":"/0.7/gitrepo-targets","docId":"gitrepo-targets"},{"type":"link","label":"Generating Diffs to Ignore Modified GitRepos","href":"/0.7/bundle-diffs","docId":"bundle-diffs"},{"type":"link","label":"Using Webhooks Instead of Polling","href":"/0.7/webhook","docId":"webhook"},{"type":"link","label":"Using Image Scan to Update Container Image References","href":"/0.7/imagescan","docId":"imagescan"},{"type":"link","label":"Create a Bundle Resource","href":"/0.7/bundle-add","docId":"bundle-add"}],"collapsible":true},{"type":"category","label":"Reference","collapsed":false,"items":[{"type":"category","label":"CLI","items":[{"type":"link","label":"fleet-agent","href":"/0.7/cli/fleet-agent/","docId":"cli/fleet-agent/fleet-agent"},{"type":"category","label":"fleet-gitjob-cli","items":[{"type":"link","label":"fleet","href":"/0.7/cli/fleet-cli/fleet","docId":"cli/fleet-cli/fleet"},{"type":"link","label":"fleet apply","href":"/0.7/cli/fleet-cli/fleet_apply","docId":"cli/fleet-cli/fleet_apply"},{"type":"link","label":"fleet test","href":"/0.7/cli/fleet-cli/fleet_test","docId":"cli/fleet-cli/fleet_test"}],"collapsed":true,"collapsible":true},{"type":"link","label":"fleet-manager","href":"/0.7/cli/fleet-controller/fleet-manager","docId":"cli/fleet-controller/fleet-manager"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Cluster and Bundle State","href":"/0.7/cluster-bundles-state","docId":"cluster-bundles-state"},{"type":"link","label":"Cluster Registration Internals","href":"/0.7/ref-registration","docId":"ref-registration"},{"type":"link","label":"Configuration","href":"/0.7/ref-configuration","docId":"ref-configuration"},{"type":"link","label":"Custom Resources Spec","href":"/0.7/ref-crds","docId":"ref-crds"},{"type":"link","label":"fleet.yaml","href":"/0.7/ref-fleet-yaml","docId":"ref-fleet-yaml"},{"type":"link","label":"GitRepo Resource","href":"/0.7/ref-gitrepo","docId":"ref-gitrepo"},{"type":"link","label":"Bundle Resource","href":"/0.7/ref-bundle","docId":"ref-bundle"}],"collapsible":true},{"type":"link","label":"Troubleshooting","href":"/0.7/troubleshooting","docId":"troubleshooting"},{"type":"category","label":"Changelog","items":[{"type":"link","label":"v0.7.0","href":"/0.7/changelogs/changelogs/v0.7.0","docId":"changelogs/changelogs/v0.7.0"},{"type":"link","label":"v0.7.1","href":"/0.7/changelogs/changelogs/v0.7.1","docId":"changelogs/changelogs/v0.7.1"}],"collapsed":true,"collapsible":true}]},"docs":{"architecture":{"id":"architecture","title":"Architecture","description":"Fleet has two primary components.  The Fleet manager and the cluster agents.  These","sidebar":"docs"},"bundle-add":{"id":"bundle-add","title":"Create a Bundle Resource","description":"Bundles are automatically created by Fleet when a GitRepo is created. In most cases Bundles should not be created","sidebar":"docs"},"bundle-diffs":{"id":"bundle-diffs","title":"Generating Diffs to Ignore Modified GitRepos","description":"Continuous Delivery in Rancher is powered by fleet. When a user adds a GitRepo CR, then Continuous Delivery creates the associated fleet bundles.","sidebar":"docs"},"changelogs/changelogs/v0.7.0":{"id":"changelogs/changelogs/v0.7.0","title":"v0.7.0","description":"(rancherio-gh-m) released this 2023-06-12 1329 +0000 UTC","sidebar":"docs"},"changelogs/changelogs/v0.7.1":{"id":"changelogs/changelogs/v0.7.1","title":"v0.7.1","description":"(rancherio-gh-m) released this 2023-08-16 1037 +0000 UTC","sidebar":"docs"},"changelogs/index":{"id":"changelogs/index","title":"0.7 Changelogs","description":"* v0.7.1 (latest)"},"cli/fleet-agent/fleet-agent":{"id":"cli/fleet-agent/fleet-agent","title":"","description":"fleet-agent","sidebar":"docs"},"cli/fleet-cli/fleet":{"id":"cli/fleet-cli/fleet","title":"","description":"fleet","sidebar":"docs"},"cli/fleet-cli/fleet_apply":{"id":"cli/fleet-cli/fleet_apply","title":"","description":"fleet apply","sidebar":"docs"},"cli/fleet-cli/fleet_test":{"id":"cli/fleet-cli/fleet_test","title":"","description":"fleet test","sidebar":"docs"},"cli/fleet-controller/fleet-manager":{"id":"cli/fleet-controller/fleet-manager","title":"","description":"fleet-manager","sidebar":"docs"},"cluster-bundles-state":{"id":"cluster-bundles-state","title":"Cluster and Bundle State","description":"Clusters and Bundles have different states in each phase of applying Bundles.","sidebar":"docs"},"cluster-group":{"id":"cluster-group","title":"Create Cluster Groups","description":"Clusters in a namespace can be put into a cluster group. A cluster group is essentially a named selector.","sidebar":"docs"},"cluster-registration":{"id":"cluster-registration","title":"Register Downstream Clusters","description":"Overview","sidebar":"docs"},"concepts":{"id":"concepts","title":"Core Concepts","description":"Fleet is fundamentally a set of Kubernetes custom resource definitions (CRDs) and controllers","sidebar":"docs"},"gitrepo-add":{"id":"gitrepo-add","title":"Create a GitRepo Resource","description":"Create GitRepo Instance","sidebar":"docs"},"gitrepo-content":{"id":"gitrepo-content","title":"Git Repository Contents","description":"Fleet will create bundles from a git repository. This happens either explicitly by specifying paths, or when a fleet.yaml is found.","sidebar":"docs"},"gitrepo-targets":{"id":"gitrepo-targets","title":"Mapping to Downstream Clusters","description":"Fleet in Rancher allows users to manage clusters easily as if they were one cluster. Users can deploy bundles, which can be comprised of deployment manifests or any other Kubernetes resource, across clusters using grouping configuration.","sidebar":"docs"},"imagescan":{"id":"imagescan","title":"Using Image Scan to Update Container Image References","description":"Image scan in fleet allows you to scan your image repository, fetch the desired image and update your git repository,","sidebar":"docs"},"index":{"id":"index","title":"Overview","description":"What is Fleet?","sidebar":"docs"},"installation":{"id":"installation","title":"Installation Details","description":"The installation is broken up into two different use cases: single and multi-cluster.","sidebar":"docs"},"multi-user":{"id":"multi-user","title":"Setup Multi User","description":"Fleet uses Kubernetes RBAC where possible.","sidebar":"docs"},"namespaces":{"id":"namespaces","title":"Namespaces","description":"All types in the Fleet manager are namespaced.  The namespaces of the manager types do not correspond to the namespaces","sidebar":"docs"},"quickstart":{"id":"quickstart","title":"Quick Start","description":"Who needs documentation, lets just run this thing!","sidebar":"docs"},"ref-bundle":{"id":"ref-bundle","title":"Bundle Resource","description":"Bundles are automatically created by Fleet when a GitRepo is created.","sidebar":"docs"},"ref-bundle-stages":{"id":"ref-bundle-stages","title":"Bundle Lifecycle","description":"A bundle is an internal resource used for the orchestration of resources from git. When a GitRepo is scanned it will produce one or more bundles.","sidebar":"docs"},"ref-configuration":{"id":"ref-configuration","title":"Configuration","description":"A reference list of, mostly internal, configuration options.","sidebar":"docs"},"ref-crds":{"id":"ref-crds","title":"Custom Resources Spec","description":"* GitRepo","sidebar":"docs"},"ref-fleet-yaml":{"id":"ref-fleet-yaml","title":"fleet.yaml","description":"The fleet.yaml file adds options to a bundle. Any directory with a fleet.yaml is automatically turned into bundle.","sidebar":"docs"},"ref-gitrepo":{"id":"ref-gitrepo","title":"GitRepo Resource","description":"The GitRepo resource describes git repositories, how to access them and where the bundles are located.","sidebar":"docs"},"ref-registration":{"id":"ref-registration","title":"Cluster Registration Internals","description":"Detailed analysis of the registration process for clusters. This shows the interaction of controllers, resources and service accounts during the registration of a new downstream cluster or the local cluster.","sidebar":"docs"},"ref-resources":{"id":"ref-resources","title":"Custom Resources","description":"This shows the resources, also the internal ones, involved in creating a deployment from a git repository.","sidebar":"docs"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"This section contains commands and tips to troubleshoot Fleet.","sidebar":"docs"},"tut-deployment":{"id":"tut-deployment","title":"Creating a Deployment","description":"To deploy workloads onto downstream clusters, first create a Git repo, then create a GitRepo resource and apply it.","sidebar":"docs"},"uninstall":{"id":"uninstall","title":"Uninstall","description":"Fleet is packaged as two Helm charts so uninstall is accomplished by","sidebar":"docs"},"webhook":{"id":"webhook","title":"Using Webhooks Instead of Polling","description":"By default, Fleet utilizes polling (default: 15 seconds) to pull from a Git repo.However, this can be configured to utilize a webhook instead.Fleet currently supports Github,","sidebar":"docs"}}}')}}]);