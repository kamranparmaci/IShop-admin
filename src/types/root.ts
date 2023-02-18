import { ReactNode } from 'react';
export interface CheckAuth {
  token: boolean;
  checkSuperadmin?: boolean;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface ColorProps {
  readonly [key: string]: string;
}
