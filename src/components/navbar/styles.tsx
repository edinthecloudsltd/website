import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  position: fixed;
  background: #c7f1ff;
  width: 100%;
  height: 6rem;
  z-index: 50;
  font-size: 1.4rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  top: 0;
`;

export const NavbarInnerWrapper = styled.div`
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
  box-shadow: 0px 0px 12px 2px rgba(126, 179, 227, 1);
`;

export const NavbarButtons = styled.ul`
  display: inline;
  margin: auto 0;
  justify-content: end;

  & a {
    font-weight: 600;
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
