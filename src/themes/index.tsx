import React, { useMemo, ReactNode, FC } from 'react';

import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { designTokens } from './designTokens';
import { useAppSelector } from '../features/store';

interface ThemeProps {
  children: ReactNode;
}

const Themes: FC<ThemeProps> = ({ children }) => {
  const mode = useAppSelector((state) => state.auth.mode);
  const theme = createTheme(useMemo(() => designTokens(mode), [mode]));

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Themes;
