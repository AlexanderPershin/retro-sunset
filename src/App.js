import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import NeonGrid from './components/NeonGrid';
import RetroSun from './components/RetroSun';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 1em;
    box-sizing: border-box;
  }
  *,*::before,*::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  html, body, #root, .app {
    min-height: 100%;
  }
  body {
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.textContrast};
  }
  .app {
    overflow: hidden;
    height: 100vh;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className='app'>
        <RetroSun />
        <NeonGrid />
      </div>
    </>
  );
}

export default App;
