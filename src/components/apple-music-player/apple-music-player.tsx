import { useState, useEffect } from 'react';

import Marquee from 'react-fast-marquee';

import * as Styled from './apple-music.styles';

interface AppleMusicSong {
  attributes: {
    previews: [
      {
        url: string;
      }
    ];
    artwork: {
      width: number;
      height: number;
      url: string;
      bgColor: string;
      textColor1: string;
      textColor2: string;
      textColor3: string;
      textColor4: string;
    };
    artistName: string;
    url: string;
    name: string;
    albumName: string;
  };
}

const AppleMusicPlayer: React.FC = () => {
  const [songs, setSongs] = useState<AppleMusicSong[]>();

  useEffect(() => {
    // Initial fetch of song
    (async () => {
      const res = await (await fetch('/api/music/last-played')).json();
      setSongs(res.data as AppleMusicSong[]);
    })();

    // Refetch song if user navigates away and back
    window.addEventListener(
      'focus',
      async () => {
        const res = await (await fetch('/api/music/last-played')).json();
        setSongs(res.data as AppleMusicSong[]);
      },
      false
    );
  }, []);

  return (
    <Styled.MusicPlayerCard>
      <Styled.AppleMusicLogo />
      <Styled.InnerWrapper>
        {songs && (
          <>
            <Styled.NowPlaying>
              <Styled.Text style={{ fontWeight: 500 }}>Now Playing</Styled.Text>
              <a href={songs[0].attributes.url} target="_blank" rel="noreferrer">
                <Styled.AlbumArt
                  src={songs[0].attributes.artwork.url.replace('{w}', '500').replace('{h}', '500')}
                />
              </a>
              <Marquee gradient={false}>
                <Styled.Text>{`${songs[0].attributes.name} -`} </Styled.Text>
                <Styled.Text style={{ fontWeight: 500 }}>
                  {songs[0].attributes.artistName}
                </Styled.Text>
                <Styled.Text style={{ fontStyle: 'italic' }}>
                  {` - ${songs[0].attributes.albumName} •`}{' '}
                </Styled.Text>
              </Marquee>
            </Styled.NowPlaying>
            <Styled.RecentlyPlayed>
              <Styled.Text>Recently Played</Styled.Text>
              <Styled.RecentlyPlayedList>
                {songs.slice(1).map((song, i) => (
                  <Styled.RecentlyPlayedSong key={i}>
                    <a href={song.attributes.url} target="_blank" rel="noreferrer">
                      {song.attributes.name}
                    </a>
                    <img
                      src={song.attributes.artwork.url.replace('{w}', '200').replace('{h}', '200')}
                      alt={song.attributes.name}
                    />
                  </Styled.RecentlyPlayedSong>
                ))}
              </Styled.RecentlyPlayedList>
            </Styled.RecentlyPlayed>
          </>
        )}
      </Styled.InnerWrapper>
    </Styled.MusicPlayerCard>
  );
};

export default AppleMusicPlayer;
