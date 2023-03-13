import React from 'react';

import * as Styled from './hero.styles';

interface Props {
  size?: string;
}

export function Wrapper({ children, size }: React.PropsWithChildren<Props>) {
  return (
    <Styled.Wrapper size={size}>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrapper>
  );
}

interface IHeroText {
  circular?: boolean;
}

export function Text({ children, circular }: React.PropsWithChildren<IHeroText>) {
  if (circular) {
    return (
      <>
        <Styled.TextWrapper>{children}</Styled.TextWrapper>
      </>
    );
  }
  return <Styled.TextWrapper>{children}</Styled.TextWrapper>;
}

export function Heading({ children }: React.PropsWithChildren<{}>) {
  return <Styled.HeadingWrapper>{children}</Styled.HeadingWrapper>;
}

export function Tagline({ children }: React.PropsWithChildren<{}>) {
  return <Styled.TaglineWrapper>{children}</Styled.TaglineWrapper>;
}

export function Image({ children }: React.PropsWithChildren<{}>) {
  return <Styled.ImageWrapper>{children}</Styled.ImageWrapper>;
}
