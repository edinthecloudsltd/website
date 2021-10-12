import * as Styled from './styles';

const CloudParrallax: React.FC = () => {
  return (
    <Styled.CloudParrallaxWrapper>
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
        </Styled.CloudLayerTwo>
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
