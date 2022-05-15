import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${({ theme }: { theme: any }) => theme.background};
    color: ${({ theme }: { theme: any }) => theme.color};
    transition: all 0.5s ease;
  }
`;

export const themes = {
  light: {
    background: 'white',
    title: '#34344c',
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
    title: 'F900BF',
    titleGlow: true,
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
