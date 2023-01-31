import React, { Component, FC } from 'react';
import { Route, Navigate } from 'react-router-dom';
import Layout from '../components/common/layout';
import { useAppSelector } from '../store';

interface RouteWithLayoutPorps {
  component: Component;
}

const RouteWithLayout: FC<RouteWithLayoutPorps> = ({ component, ...rest }) => {
  const user = useAppSelector((state) => state.auth.user) as any;

  return (
    <Route
      {...rest}
      element={
        !user ? (
          <Navigate to="/login" replace />
        ) : (
          <Layout>
            <Component />
          </Layout>
        )
      }
    />
  );
};

export default RouteWithLayout;
