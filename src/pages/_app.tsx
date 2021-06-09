import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { BurgerContextProvider } from '../contexts/BurgerContext';

import GlobalStyles from '../styles/globals';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <BurgerContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </BurgerContextProvider>
  );
};

export default MyApp;
