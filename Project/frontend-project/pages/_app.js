import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useMemo } from 'react';
import { ColorModeContextProvider } from '../Contexts/ColorMode';
import { AuthenticationContextProvider } from '../Contexts/authentication';
import { DrawerAppBar } from './navBar';

function MyApp({ Component, pageProps }) {

  return (
      <ColorModeContextProvider>
        <AuthenticationContextProvider>
        <Component {...pageProps} />
        </AuthenticationContextProvider>
      </ColorModeContextProvider>
  );
}

export default MyApp
