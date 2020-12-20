import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

export default function CollapseMenu(props) {
  const dropDownAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  return (
    <CollapseWrapper style={dropDownAnimation}>
      <NavLinks>
        <li>
          <a href="/" onClick={props.handleNavbar}>
            Home
          </a>
        </li>
        <li>
          <a href="/" onClick={props.handleNavbar}>
            Blog
          </a>
        </li>
        <li>
          <a href="/" onClick={props.handleNavbar}>
            Contact
          </a>
        </li>
      </NavLinks>
    </CollapseWrapper>
  );
}

const CollapseWrapper = styled(animated.div)`
  background: none;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 0rem;

  & li {
    background: #fff;
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
