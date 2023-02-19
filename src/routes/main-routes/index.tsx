import React, { FC, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import Dashboard from '../../pages/dashboard';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />;
    </Routes>
  );
};

export default MainRoutes;
