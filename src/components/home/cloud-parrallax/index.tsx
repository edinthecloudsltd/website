import { useMediaQuery } from 'react-responsive';

import * as Styled from './styles';

const CloudParrallax: React.FC = () => {
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
      <Styled.Sun>
        <Styled.RayContainer>
          <Styled.Ray />
          <Styled.Ray />
          <Styled.Ray />
          <Styled.Ray />
          <Styled.Ray />
          <Styled.Ray />
          <Styled.Ray />
          <Styled.Ray />
          <Styled.Ray />
          <Styled.Ray />
          <Styled.Ray />
          <Styled.Ray />
        </Styled.RayContainer>
      </Styled.Sun>
    </Styled.CloudParrallaxWrapper>
  );
};

export default CloudParrallax;
