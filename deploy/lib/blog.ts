import * as cdk from '@aws-cdk/core';

import * as route53 from '@aws-cdk/aws-route53';
import { NextJSLambdaEdge } from '@sls-next/cdk-construct';
import * as acm from '@aws-cdk/aws-certificatemanager';

import * as path from 'path';

const nextConfigPath = path.resolve(`${process.cwd()}/..`);
const outputDir = path.join(nextConfigPath, '.serverless_nextjs');

interface INextJsDeploymentProps extends cdk.StackProps {
  appDomain: string;
}

export class ServerlessNextJsDeployment extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: INextJsDeploymentProps) {
    super(scope, id, props);

    const zone = route53.HostedZone.fromLookup(this, 'zone', {
      domainName: props.appDomain,
    });

    const cert = new acm.Certificate(this, 'cert', {
      domainName: props.appDomain,
      validation: acm.CertificateValidation.fromDns(zone),
    });

    new NextJSLambdaEdge(this, id, {
      serverlessBuildOutDir: outputDir,
      domain: {
        domainNames: [props.appDomain],
        hostedZone: zone,
        certificate: cert,
      },
    });
  }
}
