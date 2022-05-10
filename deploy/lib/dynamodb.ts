import * as cdk from '@aws-cdk/core';

import * as dynamodb from '@aws-cdk/aws-dynamodb';

export class PostLikesDynamoDB extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: any) {
    super(scope, id);

    const table = new dynamodb.Table(this, 'PostLikes', {
      partitionKey: { name: 'post_id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // outputs
    new cdk.CfnOutput(this, 'PostLikesTableName', {
      value: table.tableName,
      exportName: 'PostLikesTableName',
    });
  }
}
