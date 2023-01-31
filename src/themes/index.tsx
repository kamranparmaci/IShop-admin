import React, { useMemo, ReactNode, FC } from 'react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useAppSelector } from '../store';
import { designTokens } from './designTokens';

interface ThemeProps {
  children: ReactNode;
}

const Themes: FC<ThemeProps> = ({ children }) => {
  const mode = useAppSelector((state) => state.auth.mode);
  const theme = useMemo(() => designTokens(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Themes;
