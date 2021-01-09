---
title: "Running a Websockets and React application on AKS"
date: "2020-09-18"
description: "Browser based game created with React, with a Golang Websocket backend, hosted on Azure Kubernetes Service"
tags: [aks, kubernetes, azure, go, golang, react, javascript, websockets, redis]
---

### Introduction
tl;dr Ring of Fire / Kings browser game 
<a href="https://ringofire.edsdemo.co.uk" target="_blank">ringofire.edsdemo.co.uk</a>

After the UK went into national lockdown, I found myself with more free time over the weekends and in the evenings. I took the opportunity to brush up on my coding skills, and even ended up learning a new language entirely - Go.

Zoom/Skype calls with my friends became the new Friday/Saturday night, and I wanted to build something that we'd all enjoy using. So, I decided to create a browser-based version of Ring of Fire (or Kings, as it's more commonly known outside the U.K) for us to use during our calls.

I chose to host this on Kubernetes as a bit of a refresher, and settled on AKS since the Control Plane for AKS is totally free, so you only pay for any nodes you have running. However if cost was not a factor I would've probably settled for EKS since AWS is my preferred Cloud provider.

As a side note, I'm not currently sharing the codebase for the application as it is still under development and needs some prettifying before I can share it publicly!

### Solution Overview
The infrastructure looks a little something like this.
<p align="center">
  <img src="/images/ringofire-azure/ringofire-azure.png">
</p>

I have omitted detailed architectural diagrams for services like external-dns, nginx ingress etc. for brevity. You can find more information on the individual systems inside their documentation.

#### Frontend
The frontend is a React app built using `create-react-app`. It uses redux, styled-components, and a little bit of particleJs for extra fanciness. A production build of the application is created and uploaded to an Azure Storage account, this acts as an origin for Azure CDN. The CDN provides managed certificates for HTTPS.

#### Backend
Initially I did a first pass of the backend which was written in Python using [Flask](https://flask.palletsprojects.com/en/1.1.x/) and [flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/). However I wanted to write this as if it was going to scale, so I did a bit of research and landed on using Go, as we can handle many concurrent connections with relatively little overhead.

The server leverages the [gorilla/websocket](https://github.com/gorilla/websocket) package for handling the Websocket connections. 

For storing our game data, I settled on using Redis, for a couple of reasons:

- In-Memory database = good performance
- We aren't bothered about persisting game data (though I know we can achieve this with Redis if desired)
- Ease of setup, I can just use the [official redis container image](https://hub.docker.com/_/redis) from docker hub
- ...and perhaps most importantly, we can make use of PubSub as a messaging mechanism between our servers.

Each server subscribes to a channel on the Redis cache, and when game data is written, the update is published to the channel. Servers receive the updated data push messages out to their connected clients with the updated game data. This allows players in the same room to be connected to different backend servers, allowing us to scale out our backend.

#### Platform
The AKS cluster used for hosting the backend is a fairly modest setup. It makes use of some really great tools such as [external-dns](https://github.com/kubernetes-sigs/external-dns), [NGINX ingress controller](https://github.com/kubernetes/ingress-nginx), [cert-manager](https://github.com/jetstack/cert-manager) and [fluxcd](https://github.com/fluxcd/flux). All these extras have been installed using helm to keep things neat and tidy.

FluxCD takes care of making sure that our resources in the cluster match up with our YAML manifests in our code repository. I also enabled CICD on my backend deployment so that when I push a new container image to ACR (tagged using the short commit SHA) flux will get the tag and update our deployment yaml for it, as well as updating the code in our repo too. This can be enabled by adding the following annotation to the deployment metadata.
```
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ringofire-backend
  annotations:
    fluxcd.io/automated: "true"
...
```
For more information on setting this up, see https://docs.fluxcd.io/en/1.21.0/references/automated-image-update/

### Wrapping up
Building this has taught me a lot, both in React and with Go. I really enjoyed writing code in Go as I had never dealt with a compiled, statically typed language before (having primarily come from Python and Javascript beforehand). After getting used to writing it and understanding pointers, I now find myself much preferring to write Go code over Python (and especially over Javascript).

From a React perspective, I learnt more about splitting up my React code into more manageable chunks and using Redux/Context API for passing data around components.

One unintended side effect of building this game is that I need to get drunk with my friends to properly test the game... silver linings I suppose? 😁