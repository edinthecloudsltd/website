import styled, { css, keyframes } from 'styled-components';

import CloudSVG from 'public/assets/svg/cloud.svg';

const cloudWidth = 350;
const layerOneOffset = 300;
const layerTwoOffset = 150;
const layerThreeOffset = 200;

const layerOneAnimation = keyframes`
100% {
  transform: translate3d(-${layerOneOffset}px, 0, 0);
}
`;

const layerTwoAnimation = keyframes`
100% {
  transform: translate3d(-${layerTwoOffset}px, 0, 0);
}

`;
const layerThreeAnimation = keyframes`
100% {
  transform: translate3d(-${layerThreeOffset}px, 0, 0);
}
`;

export const Cloud = styled(CloudSVG)`
  position: absolute;
  bottom: -20px;
  width: ${cloudWidth}px;
  height: 300px;
  fill: ${({ theme }) => theme.clouds};
`;

export const CloudParrallaxWrapper = styled.div<{ size: 'sm' | 'md' }>`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  margin-bottom: 2rem;
  overflow-bottom: hidden;
  will-change: transform;

  --sun-size: 500px;

  @media (max-width: 568px) {
    --sun-size: 300px;
  }
`;

export const CloudLayer = styled.div`
  position: absolute;
  width: 120vw;
  bottom: 0;
`;

function generateCloudsCSS(screenWidth: number, startingOffset: number, offset: number) {
  const numClouds = Math.ceil(screenWidth / offset) * 2;
  let styles = '';
  let currentOffset = startingOffset;
  for (let i = 0; i < numClouds; i += 1) {
    styles += `
    & ${Cloud}:nth-child(${i}) {
      left: ${currentOffset}px;
    }
    `;
    currentOffset += offset;
  }
  return css`
    ${styles}
  `;
}

export const CloudLayerOne = styled.div<{ width: number }>`
  position: relative;
  width: 100%;
  bottom: -5rem;
  z-index: 30;
  animation: 12s ${layerOneAnimation} linear infinite;
  background: none;

  & ${Cloud} {
    bottom: 10px;
  }

  ${({ width }) => generateCloudsCSS(width, -1000, layerOneOffset)}
`;

export const CloudLayerTwo = styled.div<{ width: number }>`
  position: relative;
  width: 100%;
  z-index: 20;
  animation: 4s ${layerTwoAnimation} linear infinite;
  bottom: -3.5rem;

  & ${Cloud} {
    bottom: 0px;
    transform: rotate(-7deg);
    opacity: ${({ theme }) => theme.cloudOpacity};
  }

  ${({ width }) => generateCloudsCSS(width, -500, layerTwoOffset)}
`;

export const CloudLayerThree = styled.div<{ width: number }>`
  position: relative;
  width: 100%;
  z-index: 10;
  animation: 12s ${layerThreeAnimation} linear infinite;
  bottom: -2rem;

  & ${Cloud} {
    bottom: 10px;
    color: #f9faf7;
    opacity: ${({ theme }) => theme.cloudOpacity};
  }

  ${({ width }) => generateCloudsCSS(width, -400, layerThreeOffset)}
`;

const rise = keyframes`
  0% {
    top: 100%;
    z-index: 0;
  }
  100% {
    top: 0;
  }
`;

export const Moon = styled.object`
  position: absolute;
  margin: auto;
  height: var(--sun-size);
  width: var(--sun-size);
  right: 0;
  border-radius: 50%;
  background: #fefcd7;
  opacity: 0.9;
  box-shadow: 0px 0px 40px 15px #fefcd7;
  z-index: 1;

  animation: ${rise} 1.5s;

  @media (max-width: 568px) {
    bottom: 10rem;
    left: 8rem;
  }
`;

export const Sun = styled.object`
  position: absolute;
  margin: auto;
  height: var(--sun-size);
  width: var(--sun-size);
  right: 0;
  border-radius: 50%;
  background: rgba(250, 222, 175);
  opacity: 0.9;
  box-shadow: 0px 0px 40px 15px rgba(250, 222, 175);
  z-index: 1;

  animation: ${rise} 1.5s;

  @media (max-width: 568px) {
    bottom: 10rem;
    left: 8rem;
  }
`;

export const Ray = styled.object`
  position: absolute;
  opacity: 0.7;
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
    height: var(--sun-size);
    width: 100px;
    transform: rotate(0deg);
  }
  & ${Ray}:nth-child(2) {
    height: var(--sun-size);
    width: 100px;
    transform: rotate(60deg);
  }
  & ${Ray}:nth-child(3) {
    height: var(--sun-size);
    width: 100px;
    transform: rotate(120deg);
  }
  & ${Ray}:nth-child(4) {
    height: var(--sun-size);
    width: 100px;
    transform: rotate(180deg);
  }
  & ${Ray}:nth-child(5) {
    height: var(--sun-size);
    width: 100px;
    transform: rotate(240deg);
  }
  & ${Ray}:nth-child(6) {
    height: var(--sun-size);
    width: 100px;
    transform: rotate(300deg);
  }
  & ${Ray}:nth-child(7) {
    height: var(--sun-size);
    width: 60px;
    transform: rotate(30deg);
  }
  & ${Ray}:nth-child(8) {
    height: var(--sun-size);
    width: 40px;
    transform: rotate(90deg);
  }
  & ${Ray}:nth-child(9) {
    height: var(--sun-size);
    width: 60px;
    transform: rotate(150deg);
  }
  & ${Ray}:nth-child(10) {
    height: var(--sun-size);
    width: 40px;
    transform: rotate(210deg);
  }
  & ${Ray}:nth-child(11) {
    height: var(--sun-size);
    width: 60px;
    transform: rotate(270deg);
  }
  & ${Ray}:nth-child(12) {
    height: var(--sun-size);
    width: 60px;
    transform: rotate(330deg);
  }
`;
