import { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/macro';

import Router from './Router';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';

const MobileWrapper = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  background-color: black;

  max-width: var(--app-max-width, 37.5rem);

  min-height: calc(var(--vh, 1vh) * 100);
`;

function App() {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const maxWidth = Math.min(37.5, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}rem`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MobileWrapper>
          <Router />
        </MobileWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
