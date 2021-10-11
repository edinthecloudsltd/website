---
title: "Building a Serverless Websocket Application on AWS"
date: "2021-01-09"
description: "Building a Serverless Websocket Application on AWS"
tags:
  [
    aws,
    serverless,
    lambda,
    api gateway,
    websockets,
    dynamodb,
    sns,
    simple notification service,
    go,
  ]
---

In a previous post I gave a brief insight into how a side project I'm working on is hosted. If you haven't checked it out you can find it [here](https://edintheclouds.io/posts/ringofire-azure).

It's been great hosting it on K8s, but it hasn't been very cost effective. I can host the app on a modestly sized node in Azure, but if it began to generate more traffic then I'd need to scale out, meaning costs could quickly escalate. What if there was a way for me to reduce cost, and increase scalability?

Enter serverless. I'm not going to regurgitate all of the pros/cons of serverless in this post, there are plenty out there that already do that. Instead I am going to document the process of moving this from one architecture to another, along with any issues/pitfalls I encounter along the way.

## 🕸 Old 🪦

Here's a refresher on the existing architecture

<p align="center">
  <img src="/images/ringofire-azure/ringofire-azure.png">
</p>

## ✨ New! ✨

Here is our architecture using Serverless services in AWS

<p align="center">
  <img src="/images/kings-serverless/kings-architecture.png">
</p>

It may not look like much, because it isn't much! I've omitted _some_ functions for brevity, but overall our solution is very simple and easy to understand. I'll walk you through the basics.

### The basics

1. User browses to https://ringofire.edintheclouds.io and loads the React App
2. App makes a connection to our Websocket API Gateway when loaded, this generates a connectionId.
3. User performs actions inside of the app (e.g. Create a game, pick a card, lock a room etc.) and these actions get routed by the API gateway to the relevant lambda function.
4. Lambda function reads the game data from DynamoDB, makes any necessary updates, and then publishes a message containing the game ID and action to an SNS topic.
5. A "broadcast" lambda is subscribed to the SNS topic, which reads the game ID and action from the message, gets the game data from DynamoDB and then posts a message to each connectionId associated with the game.
6. All users in the game receive a websocket message which then triggers the app to re-render the game and show the updated state.

This is different to hosting inside of a container because of a few reasons...

- It is all event-driven, functions are triggered by calls from API gateway, or whenever a message is published to SNS.
- I am offloading the Websocket connection management to API Gateway, I no longer need to write code to manage websocket connections in my app.
- I only pay for it when it is being actively used, instead of having idle instances in a kubernetes cluster.
- It will scale almost infinitely, so I don't have to worry about horizontal pod autoscalers or scaling my backend datastore.

### How is it deployed?

I've used the [serverless framework](https://www.serverless.com/) to deploy my solution. The reason for this was speed and simplicity. It's quite amazing to have the entire deployment defined in <250 lines of YAML (110 of which is custom CloudFormation for my DynamoDB and static site resources). 

The whole project was initialised using the command:

`sls create --template aws-go-mod --path myService`

That gives you a good skeleton for a go-based project, and once I'd done that I had my first lambda function up and running in a matter of minutes.

The Serverless framework is great because you don't have to think much about what resources to deploy, it kind of just magically does it for you. However I did find myself faced with the prospect of writing plain old Cloudformation, to achieve some customisability. It makes me wonder if serverless works well in complicated setups. For a complex project I would probably opt for writing in Cloudformation (with the help of CDK) or use terraform instead, giving me full control and visibility of everything that is deployed.

### Ok, what's the catch?

Of course, there can be downsides to serverless architectures as well.

You may have heard of [cold starts](https://mikhail.io/serverless/coldstarts/aws/), and this adventure has been no exception. If I go to test, any function that hasn't been used recently usually gives me a ~1s delay before anything comes back, compared to my AKS deployment which responds instantaneously. Personally I think this is a fair trade-off though in my case, since I am not paying for any idle resources (~£70/month in my Azure Subscription), and will probably pay a couple of cents per month for my resources.

I am also pretty tied into AWS with this solution, whereas with my container-based setup I could quite easily re-deploy my application to a kubernetes cluster running on a different cloud provider, or an entirely different container orchestration tool (such as ECS or Azure App Service).

## Summary
Going serverless is almost a perfect fit for my use case. It's not too complicated, it's cheap to run, and if it ever saw large amounts of real user traffic it would simply scale to meet user demand. Nowadays, it is a must to consider this architecture when designing new services.

