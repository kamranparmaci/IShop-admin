import { PaletteMode } from '@mui/material';

export const designTokens = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      primary: {
        light: '#cacde2',
        main: '#888dba',
        dark: '#403e81',
      },
      secondary: {
        light: '#bfe0d7',
        main: '#558d79',
        dark: '#466c5d',
      },
    },
  };
};
