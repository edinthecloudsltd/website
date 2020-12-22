import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Link from "next/link";
import Burger from "./Burger";

const NavBar = styled(animated.nav)`
  position: relative;
  width: 100%;
  z-index: 1;
  font-size: 1.4rem;
  padding: 1.4rem;

  @media (max-width: 768px) {
    display: none;
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: auto 0;
  padding: 5%;

  @media (min-width: 769px) {
    display: none;
  }
`;

export default function Navbar(props) {
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
      <NavBar style={barAnimation} class="bg-white dark:bg-gray-800">
        <FlexContainer>
          {!props.home && (
            <Link href="/">
              <Logo src="/images/profile.png" />
            </Link>
          )}
          <a /> {/* Space out flexbox */}
          <NavLinks style={linkAnimation}>
            <Link href="/blog">
              <a class="text-gray-400">Blog</a>
            </Link>
            <Link href="/contact">
              <a class="text-gray-400">Contact</a>
            </Link>
          </NavLinks>
        </FlexContainer>
      </NavBar>

      <BurgerWrapper>
        <Burger />
      </BurgerWrapper>
    </>
  );
}