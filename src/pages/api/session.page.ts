import crypto from 'crypto';

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const region = 'us-east-1';
const ddb = new DynamoDBClient({
  region,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});
const ddbClient = DynamoDBDocumentClient.from(ddb);
const sessionStore = process.env.SESSION_STORE_DYNAMODB_TABLE || 'EdintheCloudsSessionStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /* eslint-disable @typescript-eslint/dot-notation */
  const session = req.cookies['_edintheclouds_session'];

  if (session) {
    const key = session.split('=')[1];
    try {
      const { Item } = await ddbClient.send(
        new GetCommand({
          Key: {
            SessionId: key,
          },
          TableName: sessionStore,
        })
      );
      return { req, res, sess: Item };
    } catch (err: any) {
      res.removeHeader('Set-Cookie');
      console.log(err);
      throw err;
    }
  }

  const sid = crypto.randomBytes(16).toString('hex');

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('_edintheclouds_session', `_sid=${sid}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 34560000, // 400 days
      sameSite: 'strict',
      path: '/',
    })
  );

  try {
    const { Attributes } = await ddbClient.send(
      new UpdateCommand({
        Key: {
          SessionId: sid,
        },
        UpdateExpression: 'SET postLikes = :init',
        ExpressionAttributeValues: { ':init': {} },
        TableName: sessionStore,
        ReturnValues: 'ALL_NEW',
      })
    );
    return { req, res, sess: Attributes };
  } catch (err: any) {
    res.removeHeader('Set-Cookie');
    console.log(err);
    throw err;
  }
}
