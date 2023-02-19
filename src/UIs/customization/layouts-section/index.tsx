import React from 'react';

import { Card, Stack, CardContent } from '@mui/material';

import { useAppDispatch } from '../../../features/store';
import { setLayout } from '../../../features/slices/customization';

const LayoutsSection = () => {
  const dispatch = useAppDispatch();
  return (
    <Stack direction="row" spacing={4} sx={{ py: 2, justifyContent: 'center' }}>
      <Card
        onClick={() => dispatch(setLayout('layoutOne'))}
        sx={{ cursor: 'pointer' }}
      >
        <CardContent>layout one</CardContent>
      </Card>
      <Card
        onClick={() => dispatch(setLayout('layoutTwo'))}
        sx={{ cursor: 'pointer' }}
      >
        <CardContent>layout two</CardContent>
      </Card>
    </Stack>
  );
};

export default LayoutsSection;
