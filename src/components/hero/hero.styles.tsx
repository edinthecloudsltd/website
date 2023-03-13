import styled from 'styled-components';

interface StyledWrapperProps {
  size: string | undefined; // this prop is only used on the home page to allow for the larger blue background
}

export const Wrapper = styled.div<StyledWrapperProps>`
  position: relative;
  display: flex;
  width: 100vw;
  height: 87.5vh;
  max-height: 87.5vh;
  background: ${({ theme }) => theme.sky};
  overflow: hidden;
  transition: background-color 0.5s ease;
  transition-delay: var(--theme-transition-delay);

  // If on tablet or smaller device
  @media (max-width: 568px) {
    height: 70vh;
    padding-top: 20%;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.5rem;
  color: white;
  z-index: 10;

  @media (max-width: 568px) {
    margin: 0 auto;
    padding: 0;
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
  font-size: 6rem;

  @media (max-width: 568px) {
    font-size: 6rem;
    letter-spacing: -3px;
    padding-right: 7.5px;
  }
`;

export const HeadingWrapper = styled.div`
  width: 12ch;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1;

  @media (min-width: 1440px) {
    font-size: 4.5rem;
  }
`;

export const TaglineWrapper = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 2.25rem;
  margin-top: 2.5rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 2rem;
  }
`;
