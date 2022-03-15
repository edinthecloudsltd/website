import { useMediaQuery } from 'react-responsive';

import * as Styled from './styles';

const CloudParrallax: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const size = isMobile ? 'sm' : 'md';
  return (
    <Styled.CloudParrallaxWrapper size={size}>
      <Styled.CloudLayer>
        <Styled.CloudLayerOne>
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
        </Styled.CloudLayerOne>
      </Styled.CloudLayer>
      <Styled.CloudLayer>
        <Styled.CloudLayerTwo>
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
        </Styled.CloudLayerTwo>
      </Styled.CloudLayer>
      <Styled.CloudLayer>
        <Styled.CloudLayerThree>
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
          <Styled.Cloud />
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
