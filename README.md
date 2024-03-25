# k8s_node


## Start
```bash
kubectl create deploy node-deploy --image=mipnorip/node_app:latest 
# up replicas
kubectl scale deployment node-deploy --replicas=10
kubectl get pods # watch pods
kubectl expose deployment node-deploy --type=LoadBalancer --port=8080 --target-port=3000

# for minikube
minikube tunnel
```