import styled from 'styled-components';

export const Card = styled.div`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 50px;
  padding: 3.5rem;
  transition: 0.3s ease;
  box-shadow: 0px 12px 12px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  flex-wrap: wrap;
`;

export const Tag = styled.a`
  background: rgba(126, 179, 227);
  padding: 0.3rem;
  color: white;
  border-radius: 5px;
`;
