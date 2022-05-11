import { DynamoDBClient, GetItemCommand, UpdateItemCommand } from '@aws-sdk/client-dynamodb';
import { Request, Response } from 'express';

const region = 'us-east-1';
const ddb = new DynamoDBClient({ region });

export default async function handler(req: Request, res: Response) {
  const { id } = req.query;

  // console.log(req);

  switch (req.method) {
    case 'GET': {
      try {
        const data = await ddb.send(
          new GetItemCommand({
            Key: {
              post_id: { S: id as string },
            },
            ProjectionExpression: 'likes',
            TableName: process.env.POST_LIKES_DYNAMODB_TABLE,
          })
        );
        res.status(200).json({
          likes: Number(data.Item?.likes?.N || 0),
        });
        return;
      } catch (err: any) {
        // console.log(err);
        res.status(500).json({ error: err.message });
      }
      return;
    }
    case 'PUT': {
      try {
        const data = await ddb.send(
          new UpdateItemCommand({
            Key: {
              post_id: { S: id as string },
            },
            ExpressionAttributeValues: {
              ':init': { N: '0' },
              ':increment': { N: '1' },
            },
            UpdateExpression: 'SET likes = if_not_exists(likes, :init) + :increment',
            ReturnValues: 'ALL_NEW',
            TableName: process.env.POST_LIKES_DYNAMODB_TABLE,
          })
        );
        res.status(200).json({
          likes: Number(data.Attributes!.likes!.N),
        });
      } catch (err: any) {
        console.log(err);
        res.status(500).json({ error: err.message });
      }
      return;
    }
    default:
      res.status(405).end();
  }
}
