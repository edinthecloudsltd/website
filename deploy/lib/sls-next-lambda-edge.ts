import * as cdk from '@aws-cdk/core';

import { NextJSLambdaEdge } from '@sls-next/cdk-construct';
import * as acm from '@aws-cdk/aws-certificatemanager';

import * as path from 'path';
import { IWebsiteProps } from '../bin/website';

const nextConfigPath = path.resolve(`${process.cwd()}/..`);
const outputDir = path.join(nextConfigPath, '.serverless_nextjs');

export class ServerlessNextJsLambdaEdge extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: IWebsiteProps) {
    super(scope, id, props);

    const cert = acm.Certificate.fromCertificateArn(this, 'Certificate', props.acmCertArn);

    const deployment = new NextJSLambdaEdge(this, id, {
      serverlessBuildOutDir: outputDir,
      domain: {
        domainNames: props.domainNames,
        certificate: cert,
      },
    });

    new cdk.CfnOutput(this, 'CloudFrontDistributionZoneId', {
      value: deployment.distribution.distributionId,
      exportName: 'CloudFrontDistributionId',
    });
    new cdk.CfnOutput(this, 'CloudFrontDistributionDomainName', {
      value: deployment.distribution.domainName,
      exportName: 'CloudFrontDistributionDomainName',
    });
  }
}
