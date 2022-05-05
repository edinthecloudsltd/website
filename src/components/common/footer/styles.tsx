import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 15rem;
  width: 100vw;
  background: white;
`;

export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;

  @media (max-width: 568px) {
    flex-direction: column-reverse;
    justify-content: unset;
  }
`;

export const CompanyName = styled.p`
  margin-top: auto;
  text-align: left;

  @media (max-width: 568px) {
    margin-top: 0;
    text-align: center;
  }
`;

export const FooterFlexRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto 0 0 0;

  @media (max-width: 568px) {
    margin: 1rem 0 0 auto;
  }
`;

export const CompanyInfo = styled.p`
  font-style: italic;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto;
`;

export const IconWrapper = styled.div`
  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    transition: all 0.5s ease;
    transform-origin: center;
    transform: rotate(-10deg);
  }
`;
