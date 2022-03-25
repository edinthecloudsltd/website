import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useWindowScroll } from 'react-use';

import { NavbarWrapper, NavbarInnerWrapper, NavbarLogo, NavbarButtons } from './styles';

export default function Navbar() {
  const router = useRouter();
  const { y } = useWindowScroll();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (y > 50) {
      setShow(true);
    }
  }, [y]);

  return (
    <NavbarWrapper show={show}>
      {show && (
        <NavbarInnerWrapper>
          <Link href="/" passHref>
            <NavbarLogo src="assets/images/profile.png" alt="ed-picture" />
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
          </NavbarButtons>
        </NavbarInnerWrapper>
      )}
    </NavbarWrapper>
  );
}
