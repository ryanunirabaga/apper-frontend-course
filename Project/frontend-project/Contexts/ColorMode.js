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
