import React, { FC } from 'react';
import { ChildrenProps } from '../../types/root';

const MainLayout: FC<ChildrenProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default MainLayout;
