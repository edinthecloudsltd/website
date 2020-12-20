import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Burger(props) {
  const [show, setShow] = useState('');
  return (
    <Wrapper onClick={() => setShow(!show)}>
      <div className={show ? "open" : ""}>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;

  & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 3rem;
    height: 0.2rem;
    margin-bottom: 0.7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }
`;
