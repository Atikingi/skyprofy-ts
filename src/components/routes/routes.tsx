import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import LoginPage from '../pages/Login';
import RegistrationPage from '../pages/Registration';
import ProtectedRoute from '../protected-route';
import Main from '../pages/Main';
import PersonalPlaylist from '../pages/PersonalPlaylist';
import CustomPlaylist from '../pages/CustomPlaylist';
import BarLayout from '../layout/barLayout';
import { useAppSelector } from '../../store/hooks';

const AppRoutes = () => {
  const isLogin = useAppSelector((state) => state.auth.isLogin);
  const homepage = isLogin ? <Main /> : <LoginPage />;

  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoute isLogin={isLogin} />}>
          <Route element={<BarLayout />}>
            <Route path="skyprofy-ts/personal" element={<PersonalPlaylist />} />
            <Route path="skyprofy-ts/" element={<Main />} />
            <Route path="skyprofy-ts/main" element={<Main />} />
            <Route
              path="skyprofy-ts/playlist/:id"
              element={<CustomPlaylist />}
            />
          </Route>
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
