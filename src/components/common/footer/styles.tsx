import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 15rem;
  width: 100%;
`;

export const IconWrapper = styled.div`
  cursor: pointer;

  & > svg {
    transition: all 0.5s ease;
  }

  & > svg:hover {
    transition: all 0.5s ease;
    transform-origin: center;
    transform: rotate(-20deg);
  }
`;
