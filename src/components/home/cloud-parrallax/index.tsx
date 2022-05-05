import { useContext } from 'react';

import { useMediaQuery } from 'react-responsive';

import { DisplayContext } from 'src/context/display';

import * as Styled from './styles';

const CloudParrallax: React.FC = () => {
  const { activeTheme } = useContext(DisplayContext);
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const size = isMobile ? 'sm' : 'md';
  const screenWidth = 2550;
  const cloudWidth = 350;
  const numClouds = Math.ceil(screenWidth / cloudWidth) * 2;

  return (
    <Styled.CloudParrallaxWrapper size={size}>
      <Styled.CloudLayer>
        <Styled.CloudLayerOne width={screenWidth}>
          {Array.from(Array(numClouds)).map((_, i) => (
            <Styled.Cloud key={i} />
          ))}
        </Styled.CloudLayerOne>
      </Styled.CloudLayer>
      <Styled.CloudLayer>
        <Styled.CloudLayerTwo width={screenWidth}>
          {Array.from(Array(numClouds)).map((_, i) => (
            <Styled.Cloud key={i} />
          ))}
        </Styled.CloudLayerTwo>
      </Styled.CloudLayer>
      <Styled.CloudLayer>
        <Styled.CloudLayerThree width={screenWidth}>
          {Array.from(Array(numClouds)).map((_, i) => (
            <Styled.Cloud key={i} />
          ))}
        </Styled.CloudLayerThree>
      </Styled.CloudLayer>
      {activeTheme === 'light' ? (
        <Styled.Sun aria-label="sun">
          <Styled.RayContainer>
            {Array.from(Array(12)).map((_, i) => (
              <Styled.Ray key={i} aria-label="sun ray" />
            ))}
          </Styled.RayContainer>
        </Styled.Sun>
      ) : (
        <Styled.Moon aria-label="moon" />
      )}
    </Styled.CloudParrallaxWrapper>
  );
};

export default CloudParrallax;
