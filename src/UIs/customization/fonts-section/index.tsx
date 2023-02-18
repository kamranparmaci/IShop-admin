import React from 'react';

import { Stack, Typography } from '@mui/material';

import { useAppDispatch } from '../../../features/store';
import { setFonts } from '../../../features/slices/customization';

const FontsSection = () => {
  const dispatch = useAppDispatch();
  return (
    <Stack direction="row" spacing={4} sx={{ py: 2, justifyContent: 'center' }}>
      <Typography
        onClick={() => dispatch(setFonts('Poppins'))}
        sx={{ fontFamily: 'Poppins' }}
      >
        Poppins
      </Typography>
      <Typography
        onClick={() => dispatch(setFonts('Lato'))}
        sx={{ fontFamily: 'lato' }}
      >
        Lato
      </Typography>
    </Stack>
  );
};

export default FontsSection;
