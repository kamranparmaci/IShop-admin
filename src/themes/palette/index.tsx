import React from 'react';

import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { theme1 } from '../../assets/colors/theme1';
import { ColorProps } from '../../types/root';
import { theme2 } from '../../assets/colors/theme2';

const Palette = (mode: PaletteMode, presetColors: string) => {
  let colors: ColorProps;

  switch (presetColors) {
    case 'theme2':
      colors = theme2;
      break;
    default:
      colors = theme1;
  }

  return createTheme({
    palette: {
      mode,
      primary: {
        light: mode === 'dark' ? colors.darkPrimaryLight : colors.primaryLight,
        main: mode === 'dark' ? colors.darkPrimaryMain : colors.primaryMain,
        dark: mode === 'dark' ? colors.darkPrimaryDark : colors.primaryDark,
      },
      secondary: {
        light:
          mode === 'dark' ? colors.darkSecondaryLight : colors.secondaryLight,
        main: mode === 'dark' ? colors.darkSecondaryMain : colors.secondaryMain,
        dark: mode === 'dark' ? colors.darkSecondaryDark : colors.secondaryDark,
      },
      background: {
        default:
          mode === 'dark'
            ? colors.darkBackgroundDefault
            : colors.backgroundDefault,
        paper:
          mode === 'dark' ? colors.darkBackgroundPaper : colors.backgroundPaper,
      },
    },
  });
};

export default Palette;
