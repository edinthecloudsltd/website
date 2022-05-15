import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { NextApiRequest, NextApiResponse } from 'next';

import session from 'src/pages/api/session';

const region = 'us-east-1';
const ddb = new DynamoDBClient({ region });
const ddbClient = DynamoDBDocumentClient.from(ddb);
const table = process.env.POST_LIKES_DYNAMODB_TABLE || 'EdintheCloudsPostLikes';
const sessionStore = process.env.SESSION_STORE_DYNAMODB_TABLE || 'EdintheCloudsSessionStore';

const checkForLiked = (sess: any, postId: string) => {
  if (sess?.postLikes) {
    if (postId in sess.postLikes) {
      return true;
    }
  }
  return false;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // console.log(req);

  switch (req.method) {
    case 'GET': {
      try {
        const { sess } = await session(req, res);
        const data = await ddbClient.send(
          new GetCommand({
            Key: {
              PostId: id as string,
            },
            ProjectionExpression: 'likes',
            TableName: table,
          })
        );
        res.status(200).json({
          likes: Number(data.Item?.likes),
          hasLiked: checkForLiked(sess, id as string),
        });
        return;
      } catch (err: any) {
        console.log(err);
        res.status(500).send('there was an retrieving the post likes, sorry!');
      }
      return;
    }
    case 'PUT': {
      try {
        const { sess } = await session(req, res);
        if (checkForLiked(sess, id as string)) {
          res.status(400).send('you have already liked this post!');
          return;
        }
        // Update post likes table
        const updated = await ddb.send(
          new UpdateCommand({
            Key: {
              PostId: id as string,
            },
            UpdateExpression: 'SET likes = if_not_exists(likes, :init) + :increment',
            ExpressionAttributeValues: {
              ':init': 0,
              ':increment': 1,
            },
            ReturnValues: 'ALL_NEW',
            TableName: table,
          })
        );
        // Update session postLikes attribute
        await ddbClient.send(
          new UpdateCommand({
            Key: {
              SessionId: sess?.SessionId as string,
            },
            UpdateExpression: 'SET postLikes.#postId = :val',
            ExpressionAttributeNames: { '#postId': id as string },
            ExpressionAttributeValues: { ':val': true },
            ReturnValues: 'ALL_NEW',
            TableName: sessionStore,
          })
        );
        res.status(200).json({
          likes: Number(updated.Attributes!.likes),
          hasLiked: true,
        });
      } catch (err: any) {
        console.log(err);
        res
          .status(500)
          .send('there was an error posting your like, please try again later. sorry!');
      }
      return;
    }
    case 'DELETE': {
      try {
        const { sess } = await session(req, res);
        if (!checkForLiked(sess, id as string)) {
          res.status(400).send("you already don't like this post");
          return;
        }
        // Update post likes table
        const updated = await ddb.send(
          new UpdateCommand({
            Key: {
              PostId: id as string,
            },
            UpdateExpression: 'SET likes = likes - :decrement',
            ExpressionAttributeValues: {
              ':decrement': 1,
            },
            ReturnValues: 'ALL_NEW',
            TableName: table,
          })
        );
        // Update session postLikes attribute
        await ddbClient.send(
          new UpdateCommand({
            Key: {
              SessionId: sess?.SessionId as string,
            },
            UpdateExpression: 'REMOVE postLikes.#postId',
            ExpressionAttributeNames: { '#postId': id as string },
            ReturnValues: 'ALL_NEW',
            TableName: sessionStore,
          })
        );
        res.status(200).json({
          likes: Number(updated.Attributes!.likes),
          hasLiked: false,
        });
      } catch (err: any) {
        console.log(err);
        res
          .status(500)
          .send('there was an error removing your like, please try again later. sorry!');
      }
      return;
    }
    default:
      res.status(405).end();
  }
}
