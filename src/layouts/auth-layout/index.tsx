import { Container } from '@mui/material';
import React, { FC } from 'react';
import { ChildrenProps } from '../../types/root';
import Customization from '../../UIs/customization';

const AuthLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Customization />
      {children}
    </Container>
  );
};

export default AuthLayout;
