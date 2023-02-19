import React from 'react';

import { Card, CardContent } from '@mui/material';

import SuperadminRegisterForm from '../../components/forms/superadmin-register';

const SignUpSuperadmin = () => {
  return (
    <Card sx={{ maxWidth: '35%', mx: 'auto' }}>
      <CardContent>
        <SuperadminRegisterForm />
      </CardContent>
    </Card>
  );
};

export default SignUpSuperadmin;
