import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 15rem;
  width: 100vw;
  background: white;
`;

export const IconWrapper = styled.div`
  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    transition: all 0.5s ease;
    transform-origin: center;
    transform: rotate(-10deg);
  }
`;
