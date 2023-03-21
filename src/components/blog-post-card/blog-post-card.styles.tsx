import { DynaPuff } from 'next/font/google';
import styled, { keyframes } from 'styled-components';

const dynapuff = DynaPuff({ subsets: ['latin'] });

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.9rem;
  border-radius: 50px;
  border: 6px solid ${({ theme }) => theme.cardBorder};
  padding: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background: ${({ theme }) => theme.cardBg};
  min-height: 325px;

  animation: ${fadeIn} 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  &:before {
    background: none;
    border: 6px solid #fff;
    border-radius: 42px;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  & * {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  @media (max-width: 1100px) {
    padding: 3rem;
  }

  @media (max-width: 568px) {
    padding: 3rem 2rem;
  }
`;

export const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.color};

  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }

  @media (max-width: 568px) {
    margin: 0.2rem 0;
  }
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color};

  @media (max-width: 1100px) {
    height: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 568px) {
    font-size: 1rem;
  }
`;

export const TagContainer = styled.div`
  font-family: ${dynapuff.style.fontFamily};
  display: flex;
  gap: 0.2rem;
  flex-wrap: wrap;
`;
