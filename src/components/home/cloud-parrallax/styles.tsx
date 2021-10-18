import styled, { keyframes } from 'styled-components';

import CloudSVG from 'public/assets/svg/cloud.svg';

const layerOneAnimation = keyframes`
100% {
  transform: translate3d(-300px, 0, 0);
}
`;

const layerTwoAnimation = keyframes`
100% {
  transform: translate3d(-500px, 0, 0);
}

`;
const layerThreeAnimation = keyframes`
100% {
  transform: translate3d(-200px, 0, 0);
}
`;

export const Cloud = styled(CloudSVG)`
  position: absolute;
  bottom: -20px;
  width: 350px;
  height: 300px;
  fill: white;
`;

export const CloudParrallaxWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  overflow: visible;
`;

export const CloudLayerOne = styled.div`
  position: relative;
  width: 100%;
  bottom: -1rem;
  z-index: 10;
  animation: 12s ${layerOneAnimation} linear infinite;

  & ${Cloud} {
    bottom: 20px;
  }

  & ${Cloud}:nth-child(1) {
    left: -100px;
  }
  & ${Cloud}:nth-child(2) {
    left: 200px;
  }
  & ${Cloud}:nth-child(3) {
    left: 500px;
  }
  & ${Cloud}:nth-child(4) {
    left: 800px;
  }
  & ${Cloud}:nth-child(5) {
    left: 1100px;
  }
  & ${Cloud}:nth-child(6) {
    left: 1400px;
  }
  & ${Cloud}:nth-child(7) {
    left: 1700px;
  }
  & ${Cloud}:nth-child(8) {
    left: 2000px;
  }
  & ${Cloud}:nth-child(9) {
    left: 2300px;
  }
  & ${Cloud}:nth-child(10) {
    left: 2600px;
  }
`;

export const CloudLayerTwo = styled.div`
  position: relative;
  width: 100%;
  z-index: 20;
  animation: 12s ${layerTwoAnimation} linear infinite;

  & div {
    position: absolute;
    border-radius: 8%;
    transform: rotate(45deg);
    bottom: -300px;
    width: 400px;
    height: 400px;
    background: #203560;
  }

  & ${Cloud} {
    bottom: 0px;
    transform: rotate(-7deg);
  }

  & ${Cloud}:nth-child(1) {
    left: -500px;
  }
  & ${Cloud}:nth-child(2) {
    left: 0px;
  }
  & ${Cloud}:nth-child(3) {
    left: 500px;
  }
  & ${Cloud}:nth-child(4) {
    left: 1000px;
  }
  & ${Cloud}:nth-child(5) {
    left: 1500px;
  }
  & ${Cloud}:nth-child(6) {
    left: 2000px;
  }
  & ${Cloud}:nth-child(7) {
    left: 2500px;
  }
  & ${Cloud}:nth-child(8) {
    left: 3000px;
  }
  & ${Cloud}:nth-child(9) {
    left: 3500px;
  }
  & ${Cloud}:nth-child(10) {
    left: 4000px;
  }
`;

export const CloudLayerThree = styled.div`
  position: relative;
  width: 100%;
  z-index: 20;
  animation: 12s ${layerThreeAnimation} linear infinite;

  & div {
    position: absolute;
    border-radius: 8%;
    transform: rotate(45deg);
    bottom: -300px;
    width: 400px;
    height: 400px;
    background: #203560;
  }

  & ${Cloud} {
    bottom: 10px;
    opacity: 0.6;
  }

  & ${Cloud}:nth-child(1) {
    left: -200px;
  }
  & ${Cloud}:nth-child(2) {
    left: 0px;
  }
  & ${Cloud}:nth-child(3) {
    left: 200px;
  }
  & ${Cloud}:nth-child(4) {
    left: 400px;
  }
  & ${Cloud}:nth-child(5) {
    left: 600px;
  }
  & ${Cloud}:nth-child(6) {
    left: 800px;
  }
  & ${Cloud}:nth-child(7) {
    left: 1000px;
  }
  & ${Cloud}:nth-child(8) {
    left: 1200px;
  }
  & ${Cloud}:nth-child(9) {
    left: 1400px;
  }
  & ${Cloud}:nth-child(10) {
    left: 1600px;
  }
  & ${Cloud}:nth-child(11) {
    left: 1800px;
  }
`;

export const CloudLayer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const Sun = styled.object`
  position: absolute;
  margin: auto;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: rgba(250, 222, 175);
  opacity: 0.9;
  box-shadow: 0px 0px 40px 15px rgba(250, 222, 175);

  right: 0;
  z-index: 1;
`;

export const Ray = styled.object`
  position: absolute;
  opacity: 0.4;
  transform-origin: bottom;
  border-radius: 20% 20% 0 0;
  background: linear-gradient(
    0deg,
    rgba(250, 222, 175, 1) 0%,
    rgba(250, 222, 175, 1) 50%,
    rgba(250, 222, 175, 0) 100%
  );
  top: -50%;
  left: 40%;

  z-index: -1;
`;

const rayContainerAnimation = keyframes`
  0% {  
    transform: rotate(0deg);
  }    
  100% { 
    transform: rotate(360deg);
  }
`;

export const RayContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${rayContainerAnimation} 120s linear infinite;
  overflow: visible;

  z-index: -1;

  & ${Ray}:nth-child(1) {
    height: 500px;
    width: 100px;
    transform: rotate(0deg);
  }
  & ${Ray}:nth-child(2) {
    height: 500px;
    width: 100px;
    transform: rotate(60deg);
  }
  & ${Ray}:nth-child(3) {
    height: 500px;
    width: 100px;
    transform: rotate(120deg);
  }
  & ${Ray}:nth-child(4) {
    height: 500px;
    width: 100px;
    transform: rotate(180deg);
  }
  & ${Ray}:nth-child(5) {
    height: 500px;
    width: 100px;
    transform: rotate(240deg);
  }
  & ${Ray}:nth-child(6) {
    height: 500px;
    width: 100px;
    transform: rotate(300deg);
  }
  & ${Ray}:nth-child(7) {
    height: 500px;
    width: 60px;
    transform: rotate(30deg);
  }
  & ${Ray}:nth-child(8) {
    height: 500px;
    width: 15px;
    transform: rotate(90deg);
  }
  & ${Ray}:nth-child(9) {
    height: 550px;
    width: 60px;
    transform: rotate(150deg);
  }
  & ${Ray}:nth-child(10) {
    height: 500px;
    width: 40px;
    transform: rotate(210deg);
  }
  & ${Ray}:nth-child(11) {
    height: 500px;
    width: 60px;
    transform: rotate(270deg);
  }
  & ${Ray}:nth-child(12) {
    height: 500px;
    width: 60px;
    transform: rotate(330deg);
  }
`;
