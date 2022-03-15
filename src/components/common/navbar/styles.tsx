import styled from 'styled-components';

export const NavbarWrapper = styled.nav<{ show: boolean }>`
  position: fixed;
  background: none;
  width: 100%;
  height: var(--navbar-height);
  z-index: 50;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  margin-bottom: ${({ show }) => (show ? `6rem` : `0`)};
  top: 0;
  opacity: ${({ show }) => (show ? `1` : `0`)};
  transition: opacity 0.4s ease-in;
`;

export const NavbarInnerWrapper = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  margin: auto;
  padding: 0.5em 2rem;
  justify-content: space-between;
  height: 5rem;
`;

export const NavbarLogo = styled.img`
  justify-self: start;
  display: flex;
  border-radius: 50%;
  max-height: 100%;
  cursor: pointer;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.5);
`;

export const NavbarButtons = styled.ul`
  display: inline;
  margin: auto 0;
  justify-content: end;

  & a {
    font-weight: 800;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #666464;
      border-bottom: 1px solid #666464;
    }
  }

  & svg {
    margin: 0 1.5rem;
  }
`;
