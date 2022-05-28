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
  font-family: coffee-service, sans-serif;
  font-size: 6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
  text-align: center;
  animation: ${fadeIn} 1s;
  transition: color 2s ease;
  text-shadow: ${({ theme }) => (theme.titleGlow ? `0px 0px 5px white` : '')};
  overflow: visible;

  @media (max-width: 568px) {
    text-shadow: ${({ theme }) => (theme.titleGlow ? `2px 2px 10px gray` : '')};
    font-size: 5.2rem;
  }
`;

export const SectionWrapper = styled.main`
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.background};
  //transition: background-color 1s ease;

  @media (max-width: 568px) {
    padding: 2rem 0 1rem 0;
  }
`;

export const SectionHeading = styled.h1`
  font-family: coffee-service, sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.color};
  padding-left: 1.5rem;

  @media (max-width: 568px) {
    margin: 0.5rem 0;
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
  background: ${({ theme }) => theme.cardBg};

  & * {
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 568px) {
    padding: 3rem 2rem;

    & * {
      margin-top: 0.45rem;
      margin-bottom: 0.45rem;
    }
  }
`;

export const BlogPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  gap: 2rem;
  justify-content: center;

  @media (max-width: 568px) {
    grid-template-columns: repeat(auto-fill, 95vw);
    gap: 1.5rem 4rem;
  }
`;

export const StrongL = styled.strong`
  font-family: coffee-service, sans-serif;
  letter-spacing: -1px;
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 568px) {
    font-size: 2rem;
  }
`;

export const StrongM = styled.strong`
  font-family: coffee-service, sans-serif;
  letter-spacing: -1px;
  font-size: 2.25rem;
  font-weight: 700;

  @media (max-width: 568px) {
    font-size: 1.875rem;
  }
`;

export const ListHappyPlace = styled.ul`
  padding-left: 1rem;
  font-size: 1.25rem;
  list-style-type: disc;
  list-style-position: outside;

  & li {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 568px) {
    & li {
      font-size: 1.1rem;
    }
  }
`;

export const TextM = styled.p`
  font-size: 1.5rem;

  @media (max-width: 568px) {
    font-size: 1.25rem;
  }
`;
