import { NextJSLambdaEdge } from '@sls-next/cdk-construct';
import { Construct } from 'constructs';
import { Stack, CfnOutput } from 'aws-cdk-lib';
import { aws_certificatemanager as acm } from 'aws-cdk-lib';
import { aws_lambda as lambda } from 'aws-cdk-lib';

import * as path from 'path';
import { IWebsiteProps } from '../bin/website';

const nextConfigPath = path.resolve(`${process.cwd()}/..`);
const outputDir = path.join(nextConfigPath, '.serverless_nextjs');

export class ServerlessNextJsLambdaEdge extends Stack {
  constructor(scope: Construct, id: string, props: IWebsiteProps) {
    super(scope, id, props);

    const cert = acm.Certificate.fromCertificateArn(this, 'Certificate', props.acmCertArn);

    const deployment = new NextJSLambdaEdge(this, id, {
      serverlessBuildOutDir: outputDir,
      domain: {
        domainNames: props.domainNames,
        certificate: cert,
      },
      runtime: lambda.Runtime.NODEJS_14_X,
    });

    new CfnOutput(this, 'CloudFrontDistributionZoneId', {
      value: deployment.distribution.distributionId,
      exportName: 'CloudFrontDistributionId',
    });
    new CfnOutput(this, 'CloudFrontDistributionDomainName', {
      value: deployment.distribution.domainName,
      exportName: 'CloudFrontDistributionDomainName',
    });
  }
}
