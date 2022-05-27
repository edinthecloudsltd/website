import styled from 'styled-components';

export const NavbarWrapper = styled.nav<{ show: boolean }>`
  position: fixed;
  background: none;
  width: 100%;
  height: var(--navbar-height);
  z-index: 50;
  font-size: 1.6rem;
  font-family: coffee-service, sans-serif;
  padding: 0.5rem 1rem;
  top: 0;
  transition: all 0.3s ease-in;

  @media (max-width: 568px) {
    background: ${({ theme, show }) => show && theme.background};
  }
`;

export const NavbarInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  margin: auto;
  padding: 0.2em 2rem;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 568px) {
    padding: 0.2em 0.5rem;
  }
`;

export const NavbarLogo = styled.img`
  justify-self: start;
  display: flex;
  border-radius: 50%;
  max-height: 100%;
  cursor: pointer;
`;

export const NavbarButtons = styled.ul`
  display: flex;
  gap: 2rem;
  margin: auto 2rem;
  justify-content: end;
  color: ${({ theme }) => theme.navButtonPrimary};

  @media (max-width: 568px) {
    margin: auto 0.5rem;
  }

  & a {
    font-weight: 800;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.navButtonSecondary};
      border-bottom: 1px solid #666464;
    }
  }
`;
