import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useMemo } from 'react';
import { ColorModeContextProvider } from '../Contexts/ColorMode';
import { AuthenticationContextProvider } from '../Contexts/authentication';
import { DrawerAppBar } from './navBar';
import { GetFilesProvider } from '../Contexts/firebaseStorage';

function MyApp({ Component, pageProps }) {

  return (
      <ColorModeContextProvider>
        <AuthenticationContextProvider>
          <GetFilesProvider>
          <Component {...pageProps} />
          </GetFilesProvider>
        </AuthenticationContextProvider>
      </ColorModeContextProvider>
  );
}

export default MyApp
