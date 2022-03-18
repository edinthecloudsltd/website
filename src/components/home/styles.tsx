import styled from 'styled-components';

export const HomeHeadingWrapper = styled.section`
  display: flex;
  font-size: 4.5rem;
  font-weight: 700;
  justify-content: center;
  align-items: center;
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
  box-shadow: 0px 12px 12px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 568px) {
    padding: 5rem 2rem;
  }
`;
