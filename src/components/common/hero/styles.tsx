import styled from 'styled-components';

import devices from 'src/styles/breakpoints';

interface StyledWrapperProps {
  size: string | undefined; // this prop is only used on the home page to allow for the larger blue background
}

const handleWrapperMaxHeight = (size: string | undefined): string => {
  switch (size) {
    case 'sm':
      return '425px';
    case 'lg':
      return '1100px';
    default:
      return '900px';
  }
};

const handleWrapperHeight = (size: string | undefined): string => {
  switch (size) {
    case 'lg':
      return '87.5vh';
    default:
      return '70vh';
  }
};

export const Wrapper = styled.div<StyledWrapperProps>`
  position: relative;
  display: flex;
  width: 100vw;
  //max-width: 1440px;
  height: 87.5vh;
  max-height: ${({ size }) => handleWrapperMaxHeight(size)};
  background: #c7f1ff;

  // If on tablet or smaller device
  @media (max-width: 500px) {
    height: ${({ size }) => handleWrapperHeight(size)};
    //margin-top: 20%;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  //max-height: 45rem;
  padding: 2.5rem;
  color: white;
  z-index: 10;

  @media ${devices.tablet} {
    margin: 0 auto;
    //max-width: min(80vw, 1440px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const CircularTextBackground = styled.div`
  position: absolute;
  height: 40vw;
  width: 40vw;
  max-height: 750px;
  max-width: 750px;
  border-radius: 50%;
  background: #edfafc;
  left: -15%;
`;

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 40%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 12ch;
  height: 100%;
  z-index: 20;
`;

export const HeadingWrapper = styled.div`
  width: 12ch;
  font-weight: 300;
  font-size: 3rem;
  line-height: 1;

  @media ${devices.laptopL} {
    font-size: 4.5rem;
  }
`;

export const TaglineWrapper = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 2.25rem;
  margin-top: 2.5rem;

  @media ${devices.laptop} {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 2rem;
  }
`;
