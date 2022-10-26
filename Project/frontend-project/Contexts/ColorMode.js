import { ThemeProvider, createTheme } from "@mui/material";
import { useState, useMemo } from "react";
import { createContext, useContext } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ColorModeContextProvider(props) {

    const [mode, setMode] = useState('dark');
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
            // ...(mode === 'dark'
            // ? {
            //     // palette values for dark mode
            //     primary: {
            //       main: '#232323',
            //     },
            //     background: {
            //       default: '#272727',
            //     },
            //   }
            // : {
            //     // palette values for light mode
            //     primary: {
            //       main: '#dadada',
            //     },
            //     background: {
            //       default: '#E6E6E6',
            //     },
            //   }),
          },
        }),
      [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
