import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from  './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <div>
        <h1>menu</h1>
        <img src="https://schc.nl/files/nieuws/LOGO%20III_BLACK.PNG" alt="burger icon" />
        <small>author: Farid Guzman</small>
      </div>
      </>
      
    </ThemeProvider>
  );
}

export default App;