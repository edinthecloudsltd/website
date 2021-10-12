import styled from 'styled-components';

export const BubbleScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const BubbleScrollInnerWrapper = styled.div`
  background: #172e69;
  height: 500px;
  overflow: hidden;
  position: relative;
  border-radius: 50px;
  box-shadow: inset 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.1);
`;

export const Bubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  background-size: 1076px 1076px;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.1);
  height: 152px;
  width: 152px;
  margin-right: 20px;
  position: absolute;
  transition: opacity ease-in-out 1s;
`;
