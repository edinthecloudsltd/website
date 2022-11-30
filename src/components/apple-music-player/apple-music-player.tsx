import { useState, useEffect } from 'react';

import Marquee from 'react-fast-marquee';
import { useMediaQuery } from 'react-responsive';

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
  relationships: {
    catalog: {
      data: AppleMusicSong[];
    };
  };
}

const AppleMusicPlayer: React.FC = () => {
  const isMobileViewport = useMediaQuery({ query: '(max-width: 1024px)' });
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
      <Styled.Body>
        {songs && (
          <>
            <Styled.NowPlaying>
              <Styled.Text style={{ fontSize: '1.5rem' }}>Now Playing...</Styled.Text>
              <Styled.AlbumArt
                href={songs[0].relationships.catalog.data[0]?.attributes.url}
                target="_blank"
                rel="noreferrer"
              >
                <Styled.AlbumArtImage
                  src={songs[0]?.attributes.artwork.url.replace('{w}', '500').replace('{h}', '500')}
                />
              </Styled.AlbumArt>
            </Styled.NowPlaying>
            {isMobileViewport && Array.isArray(songs) && (
              <Marquee gradient={false}>
                <Styled.Text>{`${songs[0]?.attributes.name} —`} </Styled.Text>
                <Styled.Text>{songs[0]?.attributes.artistName}</Styled.Text>
                <Styled.Text>{` — ${songs[0]?.attributes.albumName} ...`} </Styled.Text>
              </Marquee>
            )}
            <Styled.RecentlyPlayed>
              <Styled.Text style={{ fontWeight: 600 }}>Recently Played</Styled.Text>
              <Styled.RecentlyPlayedList>
                {songs.slice(1).map((song, i) => (
                  <Styled.RecentlyPlayedSong
                    key={i}
                    href={song.relationships.catalog.data[0]?.attributes.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Styled.RecentlyPlayedAlbumArt
                      src={song?.attributes.artwork.url.replace('{w}', '200').replace('{h}', '200')}
                      alt={song?.attributes.name}
                    />
                    <Styled.Text
                      style={{
                        fontSize: '0.8rem',
                        overflow: 'hidden',
                        padding: '0.4rem',
                        textDecoration: 'none',
                      }}
                    >
                      {song?.attributes.name} — {song?.attributes.artistName}
                    </Styled.Text>
                  </Styled.RecentlyPlayedSong>
                ))}
              </Styled.RecentlyPlayedList>
            </Styled.RecentlyPlayed>
          </>
        )}
      </Styled.Body>
      {!isMobileViewport && (
        <Styled.Footer>
          {Array.isArray(songs) && (
            <Marquee gradient={false}>
              <Styled.Text>{`${songs[0]?.attributes.name} —`} </Styled.Text>
              <Styled.Text>{songs[0]?.attributes.artistName}</Styled.Text>
              <Styled.Text>{` — ${songs[0]?.attributes.albumName} ...`} </Styled.Text>
            </Marquee>
          )}
        </Styled.Footer>
      )}
    </Styled.MusicPlayerCard>
  );
};

export default AppleMusicPlayer;
