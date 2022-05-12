import { Construct } from 'constructs';
import { Stack, CfnOutput } from 'aws-cdk-lib';
import { aws_dynamodb as dynamodb } from 'aws-cdk-lib';

export class WebsiteDynamoDBTables extends Stack {
  constructor(scope: Construct, id: string, props: any) {
    super(scope, id, props);

    const postLikes = new dynamodb.Table(this, 'PostLikes', {
      tableName: 'EdintheCloudsPostLikes',
      partitionKey: { name: 'postId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PROVISIONED,
      writeCapacity: 1,
      readCapacity: 1,
    });

    const sessionStore = new dynamodb.Table(this, 'SessionStore', {
      tableName: 'EdintheCloudsSessionStore',
      partitionKey: { name: 'sessionId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PROVISIONED,
      writeCapacity: 1,
      readCapacity: 1,
    });

    // outputs
    new CfnOutput(this, 'PostLikesTableName', {
      value: postLikes.tableName,
      exportName: 'PostLikesTableName',
    });
    new CfnOutput(this, 'SessionStoreTableName', {
      value: sessionStore.tableName,
      exportName: 'SessionStoreTableName',
    });
  }
}
