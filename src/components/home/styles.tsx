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
  color: #34344c;
  text-align: center;
  animation: ${fadeIn} 1s;
`;

export const SectionWrapper = styled.main`
  padding: 3rem 0;

  @media (max-width: 568px) {
    padding: 3rem 0 1rem 0;
  }
`;

export const ContentCard = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  padding: 5rem;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 10%) 0px 12px 12px 2px;

  @media (max-width: 568px) {
    padding: 5rem 2rem;
  }
`;
