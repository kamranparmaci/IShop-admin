import { CustomizationProps } from './../../types/customization';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CustomizationProps = {
  colorTheme: 'theme1',
  fonts: 'Poppins',
  layouts: 'layoutOne',
};

const customizationSlice = createSlice({
  name: 'customize',
  initialState,
  reducers: {
    setColors(state, action: PayloadAction<CustomizationProps['colorTheme']>) {
      state.colorTheme = action.payload;
    },
    setFonts(state, action: PayloadAction<CustomizationProps['fonts']>) {
      state.fonts = action.payload;
    },
    setLayout(state, action: PayloadAction<CustomizationProps['layouts']>) {
      state.layouts = action.payload;
    },
  },
});

export const { setColors, setFonts, setLayout } = customizationSlice.actions;

export default customizationSlice.reducer;
