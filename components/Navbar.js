import { useRouter } from "next/router";
import Link from "next/link";
import Burger from "./Burger";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  z-index: 1;
  font-size: 1.4rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  top: 0;
  background-color: white;
  box-shadow: 0px 12px 12px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
    box-shadow: 0px 12px 15px 1px rgba(0, 0, 0, 0.35);
  }
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

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #666464;
      border-bottom: 1px solid #666464;
    }
  }
`;

const BurgerWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  margin: auto 0;
  padding: 0.5rem 1.4rem 0.5rem 0;
  top: 0;
  background-color: white;
  box-shadow: 0px 12px 12px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media (min-width: 769px) {
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
    box-shadow: 0px 12px 15px 1px rgba(0, 0, 0, 0.2);
  }
`;

export default function Navbar({ home }) {
  const router = useRouter();

  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 400,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation} className="bg-white dark:bg-gray-800">
        <FlexContainer>
          {!home && (
            <Link href="/">
              <Logo src="/images/profile.png" />
            </Link>
          )}
          <a /> {/* Space out flexbox */}
          <NavLinks style={linkAnimation}>
            {router.pathname != "/" && (
              <Link href="/">
                <a className="text-gray-400">Home</a>
              </Link>
            )}
            {router.pathname != "/blog" && (
              <Link href="/blog">
                <a className="text-gray-400">Blog</a>
              </Link>
            )}
            {router.pathname != "/contact" && (
              <Link href="/contact">
                <a className="text-gray-400">Contact</a>
              </Link>
            )}
          </NavLinks>
        </FlexContainer>
      </NavBar>

      <BurgerWrapper>
        <Burger />
      </BurgerWrapper>
    </>
  );
}
