import { DynamoDBClient, GetItemCommand, UpdateItemCommand } from '@aws-sdk/client-dynamodb';
import { NextApiRequest, NextApiResponse } from 'next';

import session from 'src/pages/api/session';

const region = 'us-east-1';
const ddb = new DynamoDBClient({ region });
const table = process.env.POST_LIKES_DYNAMODB_TABLE || 'EdintheCloudsPostLikes';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
            TableName: table,
          })
        );
        res.status(200).json({
          likes: Number(data.Item?.likes?.N || 0),
        });
        return;
      } catch (err: any) {
        console.log(err);
        res
          .status(500)
          .send('there was an error posting your like, please try again later. sorry!');
      }
      return;
    }
    case 'PUT': {
      try {
        await session(req, res);
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
            TableName: table,
          })
        );
        res.status(200).json({
          likes: Number(data.Attributes!.likes!.N),
        });
      } catch (err: any) {
        console.log(err);
        res
          .status(500)
          .send('there was an error posting your like, please try again later. sorry!');
      }
      return;
    }
    default:
      res.status(405).end();
  }
}
