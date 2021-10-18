import * as cdk from '@aws-cdk/core';

import * as cognito from '@aws-cdk/aws-cognito';
import * as custom from '@aws-cdk/custom-resources';

interface IBlogCongnitoPoolProps extends cdk.StackProps {
  appDomain: string;
}

export class BlogCognitoUserPool extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: IBlogCongnitoPoolProps) {
    super(scope, id, props);

    // create user pool
    const pool = new cognito.UserPool(this, 'cognito-pool');

    // add domain
    const domain = pool.addDomain('cognito-domain', {
      cognitoDomain: {
        domainPrefix: props.appDomain.replace(/\./g, '-'),
      },
    });

    // create app client
    const client = pool.addClient('cognito-client', {
      oAuth: {
        callbackUrls: [
          'http://localhost:3000/api/auth/callback/cognito',
          `https://${props.appDomain}/api/auth/callback/cognito`,
        ],
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
    new cdk.CfnOutput(this, 'UserPoolClientId', {
      value: pool.userPoolId,
      exportName: 'userPoolClientId',
    });
    new cdk.CfnOutput(this, 'UserPoolDomain', {
      value: domain.domainName,
      exportName: 'userPoolDomain',
    });
    new cdk.CfnOutput(this, 'UserPoolClientSecret', {
      value: userPoolClientSecret,
      exportName: 'userPoolClientSecret',
    });
  }
}
