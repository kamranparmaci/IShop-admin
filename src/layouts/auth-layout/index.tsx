import React, { FC } from 'react';
import { ChildrenProps } from '../../types/root';

const AuthLayout: FC<ChildrenProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AuthLayout;
