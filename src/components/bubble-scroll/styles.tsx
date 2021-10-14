import styled from 'styled-components';

import colors from '../../styles/colors';

export const BubbleScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 450px;
`;

export const BubbleScrollInnerWrapper = styled.div`
  background: #172e69;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 50px;
  box-shadow: inset 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.1);
`;

export const BubbleOverlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(243, 244, 246, 0.75);
  border-radius: 50%;
  color: white;
  opacity: 0;
  transition: opacity 0.6s;

  &:hover {
    opacity: 1;

    p {
      opacity: 1 !important;
      font-size: 1.5rem;
      font-weight: 800;
      color: ${colors.deepgray};
    }
  }
`;

export const Bubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  //background-size: 1076px 1076px;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.1);
  height: 152px;
  width: 152px;
  margin-right: 20px;
  position: absolute;
  transition: opacity ease-in-out 1s;
`;
