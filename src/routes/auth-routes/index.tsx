import React, { FC, useEffect } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import LoginPage from '../../pages/login';
import SignUpSuperadmin from '../../pages/signup-superadmin';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="superadmin/register" element={<SignUpSuperadmin />} />
    </Routes>
  );
};

export default AuthRoutes;
