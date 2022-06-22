import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Card = styled.div`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  border-radius: 50px;
  padding: 3rem 3.5rem;
  //transition: 0.3s ease;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background: ${({ theme }) => theme.cardBg};

  animation: ${fadeIn} 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  & * {
    margin-top: 0rem;
    margin-bottom: 0rem;
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

  @media (max-width: 568px) {
    margin: 0.2rem 0;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  flex-wrap: wrap;
`;
