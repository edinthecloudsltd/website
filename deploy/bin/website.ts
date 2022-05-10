import * as cdk from '@aws-cdk/core';
import * as path from 'path';
import { Builder } from '@sls-next/lambda-at-edge';

import { ServerlessNextJsLambdaEdge } from '../lib/sls-next-lambda-edge';
import { CognitoUserPool } from '../lib/cognito';
import { PostLikesDynamoDB } from '../lib/dynamodb';

const nextConfigPath = path.resolve(`${process.cwd()}/../`);
const outputDir = path.resolve(`${nextConfigPath}/.serverless_nextjs`);

export interface IWebsiteProps extends cdk.StackProps {
  environment: string;
  domainNames: string[];
  acmCertArn: string;
}

interface IWebsiteConfigMap {
  [key: string]: IWebsiteProps;
}

const configMap: IWebsiteConfigMap = {
  development: {
    env: { account: '500405362207', region: 'us-east-1' },
    environment: 'development',
    domainNames: ['dev.edintheclouds.io', 'dev.edintheclouds.sh'],
    acmCertArn:
      'arn:aws:acm:us-east-1:500405362207:certificate/03d52b78-38ab-4bde-8774-106af9e7e516',
  },
  production: {
    env: { account: '912474597003', region: 'us-east-1' },
    environment: 'production',
    domainNames: [
      'edintheclouds.io',
      'prod.edintheclouds.io',
      'edintheclouds.sh',
      'prod.edintheclouds.sh',
    ],
    acmCertArn:
      'arn:aws:acm:us-east-1:912474597003:certificate/e21d9428-5b12-4fc9-96eb-a6b155f02ff3',
  },
};

const environment = process.env.ENVIRONMENT || 'development';

const config = configMap[environment]!;

export class Deployment extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: IWebsiteProps) {
    super(scope, id);

    if (props.environment !== 'production') {
      new CognitoUserPool(this, `WebsiteCognito`, props);
    }

    new PostLikesDynamoDB(this, 'WebsitePostLikesTable', props);
    process.env.POST_LIKES_DYNAMODB_TABLE = cdk.Fn.importValue('PostLikesTable').toString();

    new ServerlessNextJsLambdaEdge(this, 'Website', props);
  }
}

const app = new cdk.App();

const builder = new Builder(nextConfigPath, outputDir, {
  cwd: nextConfigPath, // root of our project
  cmd: 'node_modules/.bin/next',
  args: ['build'],
  minifyHandlers: true,
});

builder
  .build()
  .then(() => {
    new Deployment(app, 'EdintheClouds', config);
  })
  .catch((e: any) => {
    console.log('Could not build app due the exception: ', e);
    process.exit(1);
  });
