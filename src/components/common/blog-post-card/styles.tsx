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
  gap: 0.5rem;
  border-radius: 50px;
  padding: 3.5rem;
  //transition: 0.3s ease;
  box-shadow: 0px 12px 12px 2px rgba(0, 0, 0, 0.1);

  animation: ${fadeIn} 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  flex-wrap: wrap;
`;
