import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import '@types/jest';

import * as Deploy from '../lib/sls-next-lambda-edge';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Deploy.ServerlessNextJsLambdaEdge(app, 'TestServerlessNextJsDeployment', {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    tags: {
      environment: 'development',
      application: 'edintheclouds-website',
    },
    domainNames: ['edintheclouds.io'],
    acmCertArn: '',
    environment: 'test',
  });
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT
    )
  );
});
