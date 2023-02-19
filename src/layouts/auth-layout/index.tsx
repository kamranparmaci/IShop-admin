import React, { FC } from 'react';
import { Container } from '@mui/material';
import { ChildrenProps } from '../../types/root';
import CustomizationSection from '../../UIs/customization';

const AuthLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <CustomizationSection>{children}</CustomizationSection>
    </Container>
  );
};

export default AuthLayout;
