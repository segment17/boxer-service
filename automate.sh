#!/usr/bin/env bash
start=$(date +%s)
kubectl delete deployments --all
kubectl delete svc --all
eval $(minikube docker-env)
docker build -t segment17/boxerservice .
kubectl apply -f manifest.yaml
latest_pod=$(kubectl get pods --sort-by=.metadata.creationTimestamp -o jsonpath="{.items[-1].metadata.name}")
while [[ $(kubectl get pods $latest_pod -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]]; do echo "waiting for pod" && sleep 1; done
kubectl exec $latest_pod -- bash -c "yarn test --tags '@EndToEnd'"
# kubectl exec $latest_pod -- bash -c "yarn test --tags '@Component'"
end=$(date +%s)
echo $(($end-$start))
