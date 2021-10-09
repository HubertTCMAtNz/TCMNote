[tutorial](https://kubernetes.io/docs/tutorials/)  

1. [minikube start](https://minikube.sigs.k8s.io/docs/start/)  
    ```powershell
    New-Item -Path 'c:' -Name 'minikube' -ItemType Directory -Force
Invoke-WebRequest -OutFile 'c:\tools\minikube\minikube.exe' -Uri 'https://github.com/kubernetes/minikube/releases/latest/download/minikube-windows-amd64.exe' -UseBasicParsing

    ```
    
    some commands:  
    ```sh
    minikube version
    minikube start # start vm
    kubectl version
    kubectl cluster-info
    kubectl get nodes
    
    kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
    kubectl get deployments
    
    kubectl proxy
    
    export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
    echo Name of the Pod: $POD_NAME
    curl http://localhost:8001/api/v1/namespaces/default/pods/$POD_NAME/
    
    kubectl get pods
    kubectl describe pods
    
    
    export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
    
    kubectl get deployments
    kubectl get rs
    
    kubectl scale deployments/kubernetes-bootcamp --replicas=4
    ```