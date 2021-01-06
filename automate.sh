#!/usr/bin/env bash
kubectl delete deployments --all
kubectl delete svc --all
docker build -t segment17/boxerservice .
kubectl apply -f manifest.yaml
latest_pod=$(kubectl get pods --sort-by=.metadata.creationTimestamp -o jsonpath="{.items[-1].metadata.name}")
while [[ $(kubectl get pods $latest_pod -o 'jsonpath={..status.conditions[?(@.type=="Ready")].status}') != "True" ]]; do echo "waiting for pod" && sleep 1; done
kubectl exec $latest_pod -- bash -c "yarn test"
