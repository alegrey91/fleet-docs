"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[3862],{6828:(e,t,n)=>{n.d(t,{d:()=>l});const l={"v0.5":{fleet:"https://github.com/rancher/fleet/releases/download/v0.5.0/fleet-0.5.0.tgz",fleetAgent:"https://github.com/rancher/fleet/releases/download/v0.5.0/fleet-agent-0.5.0.tgz",fleetCRD:"https://github.com/rancher/fleet/releases/download/v0.5.0/fleet-crd-0.5.0.tgz"},next:{fleet:"https://github.com/rancher/fleet/releases/download/v0.6.0-alpha2/fleet-0.6.0-alpha2.tgz",fleetAgent:"https://github.com/rancher/fleet/releases/download/v0.6.0-alpha2/fleet-agent-0.6.0-alpha2.tgz",fleetCRD:"https://github.com/rancher/fleet/releases/download/v0.6.0-alpha2/fleet-crd-0.6.0-alpha2.tgz"}}},3151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var l=n(7462),a=(n(7294),n(3905)),r=n(6828),s=n(814);const i={},o="Multi Cluster Install",c={unversionedId:"multi-cluster-install",id:"multi-cluster-install",title:"Multi Cluster Install",description:"Note: Downstream clusters in Rancher are automatically registered in Fleet. Users can access Fleet under Continuous Delivery on Rancher.",source:"@site/docs/multi-cluster-install.md",sourceDirName:".",slug:"/multi-cluster-install",permalink:"/multi-cluster-install",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/multi-cluster-install.md",tags:[],version:"current",lastUpdatedAt:1677162457,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Single Cluster Install",permalink:"/single-cluster-install"},next:{title:"Uninstall",permalink:"/uninstall"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Helm 3",id:"helm-3",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"API Server URL and CA certificate",id:"api-server-url-and-ca-certificate",level:2},{value:"Install",id:"install",level:2}],d={toc:p};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multi-cluster-install"},"Multi Cluster Install"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9225).Z,width:"969",height:"775"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Downstream clusters in Rancher are automatically registered in Fleet. Users can access Fleet under ",(0,a.kt)("inlineCode",{parentName:"p"},"Continuous Delivery")," on Rancher."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning:")," The multi-cluster install described below is ",(0,a.kt)("strong",{parentName:"p"},"only")," covered in standalone Fleet, which is untested by Rancher QA. "),(0,a.kt)("p",null,"In the below use case, you will setup a centralized Fleet manager.  The centralized Fleet manager is a\nKubernetes cluster running the Fleet controllers. After installing the Fleet manager, you will then\nneed to register remote downstream clusters with the Fleet manager."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"helm-3"},"Helm 3"),(0,a.kt)("p",null,"Fleet is distributed as a Helm chart. Helm 3 is a CLI, has no server side component, and is\nfairly straight forward. To install the Helm 3 CLI follow the\n",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"official install instructions"),". The TL;DR is"),(0,a.kt)("p",null,"macOS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install helm\n")),(0,a.kt)("p",null,"Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"choco install kubernetes-helm\n")),(0,a.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"The Fleet manager is a controller running on a Kubernetes cluster so an existing cluster is required. All\ndownstream cluster that will be managed will need to communicate to this central Kubernetes cluster. This\nmeans the Kubernetes API server URL must be accessible to the downstream clusters. Any Kubernetes community\nsupported version of Kubernetes will work, in practice this means 1.15 or greater."),(0,a.kt)("h2",{id:"api-server-url-and-ca-certificate"},"API Server URL and CA certificate"),(0,a.kt)("p",null,"In order for your Fleet management installation to properly work it is important\nthe correct API server URL and CA certificates are configured properly.  The Fleet agents\nwill communicate to the Kubernetes API server URL. This means the Kubernetes\nAPI server must be accessible to the downstream clusters.  You will also need\nto obtain the CA certificate of the API server. The easiest way to obtain this information\nis typically from your kubeconfig file (",(0,a.kt)("inlineCode",{parentName:"p"},"${HOME}/.kube/config"),"). The ",(0,a.kt)("inlineCode",{parentName:"p"},"server"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"certificate-authority-data"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"certificate-authority")," fields will have these values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTi...\n    server: https://example.com:6443\n")),(0,a.kt)("p",null,"Please note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"certificate-authority-data")," field is base64 encoded and will need to be\ndecoded before you save it into a file. This can be done by saving the base64 encoded contents to\na file and then running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"base64 -d encoded-file > ca.pem\n")),(0,a.kt)("p",null,"If you have ",(0,a.kt)("inlineCode",{parentName:"p"},"jq")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"base64")," available then this one-liners will pull all CA certificates from your\n",(0,a.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," and place then in a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"ca.pem"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl config view -o json --raw  | jq -r '.clusters[].cluster[\"certificate-authority-data\"]' | base64 -d > ca.pem\n")),(0,a.kt)("p",null,"If you have a multi-cluster setup, you can use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# replace CLUSTERNAME with the name of the cluster according to your KUBECONFIG\nkubectl config view -o json --raw  | jq -r \'.clusters[] | select(.name=="CLUSTERNAME").cluster["certificate-authority-data"]\' | base64 -d > ca.pem\n')),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"In the following example it will be assumed the API server URL from the ",(0,a.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," which is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com:6443"),"\nand the CA certificate is in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"ca.pem"),". If your API server URL is signed by a well-known CA you can\nomit the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiServerCA")," parameter below or just create an empty ",(0,a.kt)("inlineCode",{parentName:"p"},"ca.pem")," file (ie ",(0,a.kt)("inlineCode",{parentName:"p"},"touch ca.pem"),")."),(0,a.kt)("p",null,"Run the following commands"),(0,a.kt)("p",null,"Setup the environment with your specific values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'API_SERVER_URL="https://example.com:6443"\nAPI_SERVER_CA="ca.pem"\n')),(0,a.kt)("p",null,"If you have a multi-cluster setup, you can use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# replace CLUSTERNAME with the name of the cluster according to your KUBECONFIG\nAPI_SERVER_URL=$(kubectl config view -o json --raw  | jq -r \'.clusters[] | select(.name=="CLUSTER").cluster["server"]\')\n# Leave empty if your API server is signed by a well known CA\nAPI_SERVER_CA="ca.pem"\n')),(0,a.kt)("p",null,"First validate the server URL is correct."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fLk ${API_SERVER_URL}/version\n")),(0,a.kt)("p",null,"The output of this command should be JSON with the version of the Kubernetes server or a ",(0,a.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")," error.\nIf you do not get either of these results than please ensure you have the correct URL. The API server port is typically\n6443 for Kubernetes."),(0,a.kt)("p",null,"Next validate that the CA certificate is proper by running the below command.  If your API server is signed by a\nwell known CA then omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"--cacert ${API_SERVER_CA}")," part of the command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fL --cacert ${API_SERVER_CA} ${API_SERVER_URL}/version\n")),(0,a.kt)("p",null,"If you get a valid JSON response or an ",(0,a.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")," then it worked. The Unauthorized error is\nonly because the curl command is not setting proper credentials, but this validates that the TLS\nconnection work and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ca.pem")," is correct for this URL. If you get a ",(0,a.kt)("inlineCode",{parentName:"p"},"SSL certificate problem")," then\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"ca.pem")," is not correct. The contents of the ",(0,a.kt)("inlineCode",{parentName:"p"},"${API_SERVER_CA}")," file should look similar to the below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\nMIIBVjCB/qADAgECAgEAMAoGCCqGSM49BAMCMCMxITAfBgNVBAMMGGszcy1zZXJ2\nZXItY2FAMTU5ODM5MDQ0NzAeFw0yMDA4MjUyMTIwNDdaFw0zMDA4MjMyMTIwNDda\nMCMxITAfBgNVBAMMGGszcy1zZXJ2ZXItY2FAMTU5ODM5MDQ0NzBZMBMGByqGSM49\nAgEGCCqGSM49AwEHA0IABDXlQNkXnwUPdbSgGz5Rk6U9ldGFjF6y1YyF36cNGk4E\n0lMgNcVVD9gKuUSXEJk8tzHz3ra/+yTwSL5xQeLHBl+jIzAhMA4GA1UdDwEB/wQE\nAwICpDAPBgNVHRMBAf8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIFMtZ5gGDoDs\nciRyve+T4xbRNVHES39tjjup/LuN4tAgAiAteeB3jgpTMpZyZcOOHl9gpZ8PgEcN\nKDs/pb3fnMTtpA==\n-----END CERTIFICATE-----\n")),(0,a.kt)("p",null,"Once you have validated the API server URL and API server CA parameters, install the following two\nHelm charts."),(0,a.kt)("p",null,"First install the Fleet CustomResourcesDefintions."),(0,a.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"helm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet-crd"," ",r.d.next.fleetCRD),(0,a.kt)("p",null,"Second install the Fleet controllers."),(0,a.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},'helm -n cattle-fleet-system install --create-namespace --wait \\\n    --set apiServerURL="${API_SERVER_URL}" \\\n    --set-file apiServerCA="${API_SERVER_CA}" \\\n    fleet'," ",r.d.next.fleet),(0,a.kt)("p",null,"Fleet should be ready to use. You can check the status of the Fleet controller pods by running the below commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n cattle-fleet-system logs -l app=fleet-controller\nkubectl -n cattle-fleet-system get pods -l app=fleet-controller\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                                READY   STATUS    RESTARTS   AGE\nfleet-controller-64f49d756b-n57wq   1/1     Running   0          3m21s\n")),(0,a.kt)("p",null,"At this point the Fleet manager should be ready. You can now ",(0,a.kt)("a",{parentName:"p",href:"/cluster-overview"},"register clusters")," and ",(0,a.kt)("a",{parentName:"p",href:"/gitrepo-add"},"git repos")," with\nthe Fleet manager."))}h.isMDXComponent=!0},9225:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/arch-1c6cd25727f6427c62add813758335a8.png"}}]);