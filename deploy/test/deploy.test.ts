import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';

import * as Deploy from '../lib/blog';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Deploy.ServerlessNextJsDeployment(app, 'TestServerlessNextJsDeployment', {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    tags: {
      environment: 'development',
      application: 'edintheclouds-blog',
    },
    appDomain: 'dev.edintheclouds.io',
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
