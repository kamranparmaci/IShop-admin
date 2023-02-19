import React from 'react';
import { Stack, Switch } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../features/store';
import { setMode } from '../../../features/slices/auth';

const ModeSection = () => {
  const { mode } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <Stack direction="row" sx={{ justifyContent: 'center', py: 4 }}>
      <Switch
        checked={mode === 'dark' ? true : false}
        onChange={() => dispatch(setMode())}
      />
    </Stack>
  );
};

export default ModeSection;
