import React from 'react';

import { TypographyOptions } from '@mui/material/styles/createTypography';

const Typography = (fontFamily: string): TypographyOptions => ({
  fontFamily: `${fontFamily}, sans-serif`,
});

export default Typography;
