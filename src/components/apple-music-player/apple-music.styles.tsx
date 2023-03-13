import styled from 'styled-components';

import AppleMusicLogoSVG from 'public/assets/svg/apple-music.svg';

export const MusicPlayerCard = styled.main`
  display: flex;
  flex-direction: column;
  flex-basis: 75%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  max-width: 600px;
  padding: 1rem 3rem;
  border-radius: 50px;
  background-image: linear-gradient(
    -45deg,
    #35c3f3 0%,
    #8b9fe8 20%,
    #e681d8 39%,
    #ffa9a4 76%,
    #fed2ce 100%
  );
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media (max-width: 1024px) {
    max-width: min(100%, 375px);
    margin: 0 auto;
    padding: 1rem 2rem;
    gap: 0rem;

    & * {
      margin-top: 0.45rem;
      margin-bottom: 0.45rem;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 100%;
  padding-top: 0.5rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 0rem;
  }
`;

export const NowPlaying = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  width: 40%;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const AlbumArt = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
  transition: transform ease-in-out 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const AlbumArtImage = styled.div`
  position: relative;
  width: 190px;
  height: 190px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;

  @media (max-width: 1024px) {
    width: 210px;
    height: 210px;
  }
`;

export const RecentlyPlayed = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  height: 80%;
  width: 50%;
  padding-top: 1rem;

  & a {
    margin: 0 auto;
    color: white;
    width: 100%;
    text-align: left;
  }
`;

export const RecentlyPlayedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.2rem;
  border-radius: 5px;

  @media (max-width: 1024px) {
    gap: 0.2rem;
    padding: 0.5rem;
  }
`;

export const RecentlyPlayedSong = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 40px;
  max-width: 100%;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: transform ease-in-out 0.2s;

  &:hover {
    text-decoration: none;
    transform: scale(1.02);
  }

  @media (max-width: 1024px) {
    flex-wrap: nowrap;
    gap: 0rem;
    max-height: 100%;
  }
`;

export const RecentlyPlayedAlbumArt = styled.img`
  height: 95%;
  width: auto;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px;
`;

export const Text = styled.p`
  margin: 0 0.2rem;
  color: white;
  font-weight: 600;

  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const AppleMusicLogo = styled(AppleMusicLogoSVG)`
  margin: 0.5rem auto;
  fill: white;
  height: auto;
  width: 70px;
`;

export const Footer = styled.div`
  width: 100%;
  padding: 0.75rem;
  font-size: 1.2rem;
`;
