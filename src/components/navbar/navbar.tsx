import React, { useContext } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaMoon, FaSun } from 'react-icons/fa';

import { DisplayContext } from 'src/context/display';

import {
  NavbarWrapper,
  NavbarInnerWrapper,
  NavbarButtons,
  ThemeToggle,
  ProfilePicture,
} from './navbar.styles';

export default function Navbar() {
  const router = useRouter();
  const { activeTheme, setTheme, showNav } = useContext(DisplayContext);

  const toggleTheme = () => (activeTheme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <NavbarWrapper show={showNav}>
      <NavbarInnerWrapper>
        <Link href="/" passHref>
          <ProfilePicture show={showNav}>
            <video autoPlay loop muted playsInline>
              <source src="assets/animations/edintheclouds-badge-float.webm" type="video/webm" />
            </video>
          </ProfilePicture>
        </Link>
        <a />
        <NavbarButtons>
          {router.pathname !== '/blog' && (
            <li style={{ listStyleType: 'none' }}>
              <Link href="/posts" legacyBehavior>
                <a style={{ color: 'var(--text-primary)' }}>Blog</a>
              </Link>
            </li>
          )}
          <ThemeToggle onClick={toggleTheme}>
            {activeTheme === 'light' ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </NavbarButtons>
      </NavbarInnerWrapper>
    </NavbarWrapper>
  );
}
