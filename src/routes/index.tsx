import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useCheckSuperadminExistsQuery } from '../features/apis/auth';
import { useAppSelector } from '../features/store';
import AuthLayout from '../layouts/auth-layout';
import MainLayout from '../layouts/main-layout';
import AuthRoutes from './auth-routes';
import MainRoutes from './main-routes';

const AllRoutes = () => {
  const { data: checkSuperadmin } = useCheckSuperadminExistsQuery();
  const { token } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (checkSuperadmin && token) {
      navigate('/dashboard', { replace: true });
    }
  }, [checkSuperadmin, navigate, token]);

  useEffect(() => {
    if (!checkSuperadmin?.superadminExists) {
      navigate('auth/superadmin/register', { replace: true });
    } else if (checkSuperadmin?.superadminExists && !token) {
      navigate('auth/login', { replace: true });
    }
  }, [checkSuperadmin, navigate, token]);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <MainLayout>
            <MainRoutes />
          </MainLayout>
        }
      />
      <Route
        path="auth/*"
        element={
          <AuthLayout>
            <AuthRoutes />
          </AuthLayout>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
