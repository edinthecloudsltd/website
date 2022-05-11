import { Construct } from 'constructs';
import { Stack, CfnOutput } from 'aws-cdk-lib';
import { aws_cognito as cognito } from 'aws-cdk-lib';
import * as custom from 'aws-cdk-lib/custom-resources';
import { IWebsiteProps } from '../bin/website';

export class CognitoUserPool extends Stack {
  constructor(scope: Construct, id: string, props: IWebsiteProps) {
    super(scope, id, props);

    // create user pool
    const pool = new cognito.UserPool(this, 'cognito-pool');

    // generate a randomID for the cognito domain name if no domain names supplied
    const randID = Math.floor(100000 + Math.random() * 900000);

    // add domain
    const domain = pool.addDomain('cognito-domain', {
      cognitoDomain: {
        domainPrefix: (props.domainNames[0] || `mutatio${randID}`).replace(/\./g, '-'),
      },
    });

    const callbackUrlList: string[] = [];
    props.domainNames.forEach((d) =>
      callbackUrlList.push(`https://${d}/api/auth/callback/cognito`)
    );

    // create app client
    const client = pool.addClient('cognito-client', {
      oAuth: {
        callbackUrls: callbackUrlList,
        flows: {
          authorizationCodeGrant: true,
        },
        scopes: [cognito.OAuthScope.EMAIL, cognito.OAuthScope.OPENID, cognito.OAuthScope.PROFILE],
      },
      generateSecret: true,
    });

    //retrieve app client secret
    const describeCognitoUserPoolClient = new custom.AwsCustomResource(
      this,
      'DescribeCognitoUserPoolClient',
      {
        resourceType: 'Custom::DescribeCognitoUserPoolClient',
        onCreate: {
          region: 'us-east-1',
          service: 'CognitoIdentityServiceProvider',
          action: 'describeUserPoolClient',
          parameters: {
            UserPoolId: pool.userPoolId,
            ClientId: client.userPoolClientId,
          },
          physicalResourceId: custom.PhysicalResourceId.of(client.userPoolClientId),
        },
        // TODO: can we restrict this policy more?
        policy: custom.AwsCustomResourcePolicy.fromSdkCalls({
          resources: custom.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      }
    );

    const userPoolClientSecret = describeCognitoUserPoolClient.getResponseField(
      'UserPoolClient.ClientSecret'
    );

    // outputs
    new CfnOutput(this, 'UserPoolId', {
      value: pool.userPoolId,
      exportName: 'userPoolId',
    });
    new CfnOutput(this, 'UserPoolDomain', {
      value: domain.domainName,
      exportName: 'userPoolDomain',
    });
    new CfnOutput(this, 'UserPoolClientId', {
      value: client.userPoolClientId,
      exportName: 'userPoolId',
    });
    new CfnOutput(this, 'UserPoolClientSecret', {
      value: userPoolClientSecret,
      exportName: 'userPoolClientSecret',
    });
  }
}
