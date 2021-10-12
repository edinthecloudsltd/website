import React from 'react';

import * as Styled from './styles';

interface Props {
  size?: string;
}

const Hero: React.FC<Props> = ({ children, size }) => {
  return (
    <Styled.Wrapper size={size}>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrapper>
  );
};

interface IHeroText {
  circular?: boolean;
}

export const HeroText: React.FC<IHeroText> = ({ children, circular }) => {
  if (circular) {
    return (
      <>
        <Styled.TextWrapper>{children}</Styled.TextWrapper>
      </>
    );
  }
  return <Styled.TextWrapper>{children}</Styled.TextWrapper>;
};

export const HeroHeading: React.FC = ({ children }) => {
  return <Styled.HeadingWrapper>{children}</Styled.HeadingWrapper>;
};

export const HeroTagline: React.FC = ({ children }) => {
  return <Styled.TaglineWrapper>{children}</Styled.TaglineWrapper>;
};

export const HeroImage: React.FC = ({ children }) => {
  return <Styled.ImageWrapper>{children}</Styled.ImageWrapper>;
};

export default Hero;
