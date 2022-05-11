import { Construct } from 'constructs';
import { Stack, CfnOutput } from 'aws-cdk-lib';
import { aws_dynamodb as dynamodb } from 'aws-cdk-lib';

export class PostLikesDynamoDB extends Stack {
  constructor(scope: Construct, id: string, props: any) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, 'PostLikes', {
      partitionKey: { name: 'post_id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // outputs
    new CfnOutput(this, 'PostLikesTableName', {
      value: table.tableName,
      exportName: 'PostLikesTableName',
    });
  }
}
