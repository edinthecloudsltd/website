import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { useTheme } from "next-themes";
import Burger from "./Burger";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useMediaQuery } from "react-responsive";

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  z-index: 1;
  font-size: 1.4rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  top: 0;
  box-shadow: 0px 12px 12px 2px rgba(0, 0, 0, 0.1);
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  margin: auto;
  padding: 0.5em 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const Logo = styled.img`
  justify-self: start;
  display: flex;
  border-radius: 50%;
  max-height: 100%;
  cursor: pointer;
`;

const NavButtons = styled(animated.ul)`
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

const NavBarMobile = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: auto 0;
  padding: 0.5rem 1.4rem 0.5rem 1.4rem;
  top: 0;
  box-shadow: 0px 12px 12px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export default function Navbar({ home }) {
  const [showBurger, setShowBurger] = useState(false);
  const { theme, setTheme } = useTheme("light");
  const router = useRouter();

  const isDesktop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    config: config.wobbly,
  });

  return (
    <>
      {isDesktop ? (
        <NavBar className="bg-white dark:bg-gray-800 duration-200">
          <FlexContainer>
            {!home && (
              <Link href="/">
                <Logo src="/images/profile.png" />
              </Link>
            )}
            <a />
            <NavButtons style={linkAnimation}>
              {router.pathname != "/" && (
                <Link href="/">
                  <a className="text-gray-800 dark:text-gray-200">Home</a>
                </Link>
              )}
              {router.pathname != "/blog" && (
                <Link href="/blog">
                  <a className="text-gray-800 dark:text-gray-200">Blog</a>
                </Link>
              )}
              {router.pathname != "/contact" && (
                <Link href="/contact">
                  <a className="text-gray-800 dark:text-gray-200">Contact</a>
                </Link>
              )}
              <DarkModeSwitch
                className="inline-block"
                sunColor="#151515"
                checked={theme === "dark" ? true : false}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                size={30}
              />
            </NavButtons>
          </FlexContainer>
        </NavBar>
      ) : (
        <NavBarMobile className="bg-white dark:bg-gray-800 duration-200">
          {showBurger ? (
            <DarkModeSwitch
              className="my-auto"
              sunColor="#151515"
              checked={theme === "dark" ? true : false}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              size={30}
            />
          ) : (
            <a />
          )}
          <Burger
            show={showBurger}
            setShow={setShowBurger}
            theme={theme}
            setTheme={setTheme}
          />
        </NavBarMobile>
      )}
    </>
  );
}
