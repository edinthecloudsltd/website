import { useState, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  useSpring,
  useTransition,
  useChain,
  animated,
  config,
} from "react-spring";

export default function Burger() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Wrapper onClick={() => setShow(!show)}>
        <div className={show ? "open" : ""}>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </Wrapper>

      <Menu show={show} />
    </>
  );
}

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog/" },
  { name: "Contact", link: "/contact/" },
];

// https://codesandbox.io/s/react-spring-menu-animation-f17cz?file=/src/index.js
const Menu = ({ show }) => {

  const navRef = useRef();
  const liRef = useRef();

  const springProps = useSpring({
    ref: navRef,
    config: config.default,
    from: { width: "0%" },
    to: { 
      width: show ? "100%" : "0%",
      height: "100%"
    },
  });

  const liTransitions = useTransition(
    show ? menuItems : [],
    (item) => item.name,
    {
      ref: liRef,
      trail: 400 / menuItems.length,
      from: { opacity: 0, transform: "translateY(20px)" },
      enter: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(20px)" },
    }
  );

  // On showMenu, start with nav animationm then nav items
  useChain(show ? [navRef, liRef] : [liRef, navRef], [
    0,
    show ? 0.2 : 0.4,
  ]);

  return (
    <Nav style={springProps}>
      <ul>
        {liTransitions.map(({ item, key, props }) => (
          <Li key={key} style={props}>
            <a href={item.link}>{item.name}</a>
          </Li>
        ))}
      </ul>
    </Nav>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;

  & span {
    background: #a0a0a0;
    display: block;
    position: relative;
    width: 3rem;
    height: 0.2rem;
    margin-bottom: 0.7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }
`;

const Nav = styled(animated.div)`
  background: #fff;
  position: fixed;
  top: 4rem;
  left: -1em;
  right: 0;
`;

const Li = styled(animated.li)`
  list-style: none;

  a {
    color: #a0a0a0;
    font-size: 50px;
    font-weight: bold;
    text-transform: lowercase;
    text-decoration: none;
    line-height: 1.3;
  }
`;
