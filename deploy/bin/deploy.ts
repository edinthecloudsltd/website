#!/usr/bin/env node

import * as cdk from '@aws-cdk/core';
import * as path from 'path';
import { Builder } from '@sls-next/lambda-at-edge';

import { ServerlessNextJsDeployment } from '../lib/blog';
import { BlogCognitoUserPool } from '../lib/cognito';

const app = new cdk.App();

/* consts */
const env = 'development';
const domainName = 'dev.edintheclouds.io';
const nextConfigPath = path.resolve(`${process.cwd()}/..`);
const outputDir = path.join(nextConfigPath, '.serverless_nextjs');

/* COGNITO */
new BlogCognitoUserPool(app, 'blog-cognito', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  tags: {
    environment: env,
    application: 'edintheclouds-blog',
  },
  appDomain: domainName,
});

/* NEXTJS BLOG */
const builder = new Builder(nextConfigPath, outputDir, {
  cwd: path.resolve(`${process.cwd()}/..`), // root of our project
  cmd: 'node_modules/.bin/next',
  args: ['build'],
  minifyHandlers: true,
});

builder
  .build()
  .then(() => {
    new ServerlessNextJsDeployment(app, `blog`, {
      env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
      },
      tags: {
        environment: env,
        application: 'edintheclouds-blog',
      },
      appDomain: domainName,
    });
  })
  .catch((e: any) => {
    console.log('Could not build app due the exception: ', e);
    process.exit(1);
  });
