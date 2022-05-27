import React from 'react';

import * as Styled from './hero.styles';

interface Props {
  size?: string;
}

export const Wrapper: React.FC<Props> = ({ children, size }) => {
  return (
    <Styled.Wrapper size={size}>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrapper>
  );
};

interface IHeroText {
  circular?: boolean;
}

export const Text: React.FC<IHeroText> = ({ children, circular }) => {
  if (circular) {
    return (
      <>
        <Styled.TextWrapper>{children}</Styled.TextWrapper>
      </>
    );
  }
  return <Styled.TextWrapper>{children}</Styled.TextWrapper>;
};

export const Heading: React.FC = ({ children }) => {
  return <Styled.HeadingWrapper>{children}</Styled.HeadingWrapper>;
};

export const Tagline: React.FC = ({ children }) => {
  return <Styled.TaglineWrapper>{children}</Styled.TaglineWrapper>;
};

export const Image: React.FC = ({ children }) => {
  return <Styled.ImageWrapper>{children}</Styled.ImageWrapper>;
};
