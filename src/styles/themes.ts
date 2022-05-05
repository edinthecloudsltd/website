import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    background: ${({ theme }: { theme: any }) => theme.background};
    color: ${({ theme }: { theme: any }) => theme.color};
    transition: 0.5s ease-in;
  }

  #header-shape-gradient {
    --color-stop: #f12c06;
    --color-bot: #faed34;
  }
`;

export const themes = {
  light: {
    background: 'white',
    title: '#34344c',
    sky: '#c7f1ff',
    clouds: 'white',
    cloudOpacity: 0.7,
    body: '#FFF',
    color: '#34344c',
    cardBg: '#c7f1ff',
    navButtonPrimary: '#34344c',
    navButtonSecondary: '#adadad',
  },
  dark: {
    background: '#363537',
    title: '#f4f6f0',
    titleGlow: true,
    sky: '#3b4c69',
    cloudOpacity: 1,
    body: '#363537',
    color: 'white',
    cardBg: '#3b4c69',
    navButtonPrimary: '#adadad',
    navButtonSecondary: 'white',
  },
};
