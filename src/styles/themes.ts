import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${({ theme }: { theme: any }) => theme.background};
    color: ${({ theme }: { theme: any }) => theme.color};
  }

  *, ::before, ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: currentColor;
  }

  button {
    display: flex;
    background-color: transparent;
    background-image: none;
    justify-content: center;
    align-items: center;
  }

  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    padding: 0;
    line-height: inherit;
  }

  img, video {
    max-width: 100%;
    height: auto;
  }

  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
`;

export const themes = {
  light: {
    background: 'white',
    title: '#34344c',
    titleGlow: '0px 0px 1.5px #34344c',
    sky: '#c7f1ff',
    clouds: '#cloud_svg__GradientLight',
    cloudOpacity: 0.7,
    body: '#FFF',
    color: '#34344c',
    cardBg: '#c7f1ff',
    navButtonPrimary: '#34344c',
    navButtonSecondary: '#adadad',
  },
  dark: {
    background: '#363537',
    title: '#FFFFFF',
    titleGlow: '0px 0px 5px white',
    sky: '#3b4c69',
    clouds: '#cloud_svg__GradientDark',
    cloudOpacity: 1,
    body: '#363537',
    color: 'white',
    cardBg: '#3b4c69',
    navButtonPrimary: '#adadad',
    navButtonSecondary: 'white',
  },
};
