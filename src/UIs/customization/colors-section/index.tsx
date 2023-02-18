import React from 'react';

import { Stack, Typography } from '@mui/material';

import { useAppDispatch } from '../../../features/store';
import { setColors } from '../../../features/slices/customization';

const PresetColorsSection = () => {
  const dispatch = useAppDispatch();

  return (
    <Stack direction="row" spacing={4} sx={{ py: 2, justifyContent: 'center' }}>
      <Typography onClick={() => dispatch(setColors('theme1'))}>
        color one
      </Typography>
      <Typography onClick={() => dispatch(setColors('theme2'))}>
        color two
      </Typography>
    </Stack>
  );
};

export default PresetColorsSection;
