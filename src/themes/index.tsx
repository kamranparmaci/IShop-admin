import React, { useMemo, FC } from 'react';

import { CssBaseline, StyledEngineProvider } from '@mui/material';
import {
  ThemeProvider,
  createTheme,
  Theme,
  ThemeOptions,
} from '@mui/material/styles';

import { useAppSelector } from '../features/store';
import Palette from './palette';
import { ChildrenProps } from '../types/root';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import Typography from './typography';
import '../../public/fonts/fonts.css';

const Themes: FC<ChildrenProps> = ({ children }) => {
  const { mode } = useAppSelector((state) => state.auth);
  const { colorTheme, fonts } = useAppSelector((state) => state.customization);

  const theme = useMemo<Theme>(
    () => Palette(mode, colorTheme),
    [mode, colorTheme]
  );

  const typography: TypographyOptions = useMemo<TypographyOptions>(
    () => Typography(fonts),
    [fonts]
  );

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: theme.palette,
      typography,
    }),
    [theme, typography]
  );

  const themes = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Themes;
