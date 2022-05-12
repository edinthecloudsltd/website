import crypto from 'crypto';

import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const region = 'us-east-1';
const ddb = new DynamoDBClient({ region });
const sessionStore = process.env.SESSION_STORE_DYNAMODB_TABLE || 'sessionStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /* eslint-disable @typescript-eslint/dot-notation */
  const session = req.cookies['_edintheclouds_session'];

  if (!session) {
    const sid = crypto.randomBytes(16).toString('hex');

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('_edintheclouds_session', `_sid=${sid}`, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60 * 24,
        sameSite: 'strict',
        path: '/',
      })
    );

    try {
      await ddb.send(
        new UpdateItemCommand({
          Key: {
            sessionId: { S: sid as string },
          },
          TableName: sessionStore,
        })
      );
    } catch (err: any) {
      res.removeHeader('Set-Cookie');
      console.log(err);
      throw err;
    }
  }

  return { req, res };
}
