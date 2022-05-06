import styled, { keyframes } from 'styled-components';

export const HomeHeadingWrapper = styled.section`
  display: flex;
  font-size: 4.5rem;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Heading = styled.h1`
  font-family: coffee-service; sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
  text-align: center;
  animation: ${fadeIn} 1s;
  transition: 0.5s ease;
  text-shadow: ${({ theme }) => (theme.titleGlow ? `0px 0px 5px white` : '')};
  overflow: visible;

  @media (max-width: 568px) {
    text-shadow: ${({ theme }) => (theme.titleGlow ? `2px 2px 10px gray` : '')};
  }
`;

export const SectionWrapper = styled.main`
  padding: 3rem 0;
  background: ${({ theme }) => theme.background};

  @media (max-width: 568px) {
    padding: 3rem 0 1rem 0;
  }
`;

export const SectionHeading = styled.h1`
  font-family: coffee-service, sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.color};
  padding-left: 1.5rem;
`;

export const ContentCard = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  padding: 5rem;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 10%) 0px 12px 12px 2px;
  background: ${({ theme }) => theme.cardBg};

  @media (max-width: 568px) {
    padding: 5rem 2rem;
  }
`;
