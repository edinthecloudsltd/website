import styled from 'styled-components';

export const NavbarWrapper = styled.nav<{ show: boolean }>`
  position: fixed;
  background: none;
  width: 100%;
  height: var(--navbar-height);
  z-index: 50;
  font-size: 1.6rem;
  padding: 8px;
  top: 0;
  transition: all 0.3s ease-in;
  color: var(--text-primary);

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
    transition: all 0.3s ease-in;

    &:hover {
      color: ${({ theme }) => theme.navButtonSecondary};
      border-bottom: 1px solid #666464;
    }
  }
`;

export const ThemeToggle = styled.button`
  color: var(--text-primary);
  transition: all 0.3s ease-in;
`;

export const ProfilePicture = styled.div<{ show: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	overflow: hidden;
	cursor: pointer;
	transition: all 0.3s ease-in;
	opacity: ${({ show }) => (show ? '1' : '0')};
}`;
