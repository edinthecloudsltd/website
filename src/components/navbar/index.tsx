import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavbarWrapper, NavbarInnerWrapper, NavbarLogo, NavbarButtons } from './styles';

export default function Navbar() {
  const router = useRouter();

  return (
    <NavbarWrapper>
      <NavbarInnerWrapper>
        <Link href="/" passHref>
          <NavbarLogo src="assets/images/profile.png" />
        </Link>
        <a />
        <NavbarButtons>
          {router.pathname !== '/' && (
            <Link href="/">
              <a className="text-gray-700 dark:text-gray-200">Home</a>
            </Link>
          )}
          {router.pathname !== '/blog' && (
            <Link href="/blog">
              <a className="text-gray-700 dark:text-gray-200">Blog</a>
            </Link>
          )}
          {router.pathname !== '/contact' && (
            <Link href="/contact">
              <a className="text-gray-700 dark:text-gray-200">Contact</a>
            </Link>
          )}
        </NavbarButtons>
      </NavbarInnerWrapper>
    </NavbarWrapper>
  );
}
