import styled from 'styled-components';

import AppleMusicLogoSVG from 'public/assets/svg/apple-music.svg';

export const MusicPlayerCard = styled.main`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 100%;
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

  @media (max-width: 568px) {
    margin: 0 auto;

    & * {
      margin-top: 0.45rem;
      margin-bottom: 0.45rem;
    }
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 100%;

  @media (max-width: 568px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const NowPlaying = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  width: 40%;

  @media (max-width: 568px) {
    align-items: center;
  }
`;

export const AlbumArt = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 5px;
  padding: 0;
  margin: 0.5rem 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;

export const RecentlyPlayed = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  width: 50%;

  & a {
    margin: 0 auto;
    color: white;
    width: 100%;
    text-align: left;
  }

  & img {
    height: 20px;
    width: auto;
  }
`;

export const RecentlyPlayedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 2rem 1rem;
  //border: 2px solid white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px inset;
`;

export const RecentlyPlayedSong = styled.div`
  display: flex;
  border-bottom: 1px solid white;
`;

export const Text = styled.p`
  margin: 0 0.2rem;
  color: white;
`;

export const AppleMusicLogo = styled(AppleMusicLogoSVG)`
  margin: 0.5rem auto;
  fill: white;
  height: auto;
  width: 70px;
`;
