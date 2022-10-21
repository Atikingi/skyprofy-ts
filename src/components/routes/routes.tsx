import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import LoginPage from '../pages/Login';
import RegistrationPage from '../pages/Registration';
import ProtectedRoute from '../protected-route';
import Main from '../pages/Main';
import PersonalPlaylist from '../pages/PersonalPlaylist';
import CustomPlaylist from '../pages/CustomPlaylist';
import Bar from '../bar';
import { useSelector } from 'react-redux';
import { refreshToken } from '../../utils/refresh-token';

const AppRoutes = () => {
  const isLogin = useSelector((state: any) => state.auth.isLogin);
  const homepage = isLogin ? <Main /> : <LoginPage />;

  refreshToken();

  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoute isLogin={isLogin}/>}>
          <Route path="skyprofy-ts/personal" element={<PersonalPlaylist />} />
          <Route path="skyprofy-ts/main" element={<Main />} />
          <Route path="skyprofy-ts/playlist/:id" element={<CustomPlaylist />} />
        </Route>
        <Route path="skyprofy-ts/" element={homepage} />
        <Route path="skyprofy-ts/registration" element={<RegistrationPage />} />
        <Route path="skyprofy-ts/login" element={<LoginPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
