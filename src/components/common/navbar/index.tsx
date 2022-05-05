import React, { useState, useEffect, useContext } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useWindowScroll } from 'react-use';

import { DisplayContext } from 'src/context/display';

import { NavbarWrapper, NavbarInnerWrapper, NavbarLogo, NavbarButtons } from './styles';

export default function Navbar() {
  const router = useRouter();
  const { y } = useWindowScroll();
  const [show, setShow] = useState<boolean>(false);
  const { activeTheme, setTheme } = useContext(DisplayContext);

  useEffect(() => {
    if (y > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [y]);

  const toggleTheme = () => (activeTheme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <NavbarWrapper show={show}>
      {show && (
        <NavbarInnerWrapper>
          <Link href="/" passHref>
            <NavbarLogo src="/assets/images/profile.png" alt="ed-picture" />
          </Link>
          <a />
          <NavbarButtons>
            {router.pathname !== '/blog' && (
              <li>
                <Link href="/posts">
                  <a className="text-gray-700 dark:text-gray-200">Blog</a>
                </Link>
              </li>
            )}
            <button onClick={toggleTheme}>
              {activeTheme === 'light' ? <FaSun /> : <FaMoon />}
            </button>
          </NavbarButtons>
        </NavbarInnerWrapper>
      )}
    </NavbarWrapper>
  );
}
