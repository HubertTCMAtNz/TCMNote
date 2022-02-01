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
    
    
- Error from server (InternalError): error when creating "./basic.yaml": Internal error occurred: failed calling webhook "validate.nginx.ingress.kubernetes.io": Post "https://ingress-nginx-controller-admission.ingress-nginx.svc:443/networking/v1/ingresses?timeout=10s": context deadline exceeded  
	https://stackoverflow.com/questions/61365202/nginx-ingress-service-ingress-nginx-controller-admission-not-found/62044090#62044090  
	https://stackoverflow.com/questions/61616203/nginx-ingress-controller-failed-calling-webhook

- https://hellokube.dev/posts/configure-minikube-ingress-on-wsl2/    (not sure whether should be applied to my env)
	https://stackoverflow.com/questions/58561682/minikube-with-ingress-example-not-working  

- minikube addons enable ingress
- minikube kubectl -- apply -f ./basic.yaml 
- minikube service bootcamp --url  
- minikube tunnel  