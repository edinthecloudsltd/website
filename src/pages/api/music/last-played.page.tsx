import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

// Returns last 6 played songs (current and most recent 5)
export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await (
      await fetch(
        `https://api.music.apple.com/v1/me/recent/played/tracks?types=songs,library-songs&limit=6`,
        {
          headers: {
            Authorization: `Bearer ${process.env.APPLE_DEVELOPER_TOKEN}`,
            'Music-User-Token': `${process.env.APPLE_MUSIC_USER_TOKEN}`,
          },
        }
      )
    ).json();
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}
