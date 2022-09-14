import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import LoginPage from '../pages/Login';
import RegistrationPage from '../pages/Registration';
import ProtectedRoute from '../protected-route';
import Main from '../pages/Main';
import PersonalPlaylist from '../pages/PersonalPlaylist';
import CustomPlaylist from '../pages/CustomPlaylist';

interface Props {
  isLogin: boolean;
}

const AppRoutes = ({ isLogin }: Props) => {
  const homepage = isLogin ? <Main/> : <LoginPage/>;

  return (
    <Routes>
      <Route
        element={<ProtectedRoute isAllowed={isLogin}/>}>
        <Route path="skyprofy-ts/personal" element={<PersonalPlaylist />} />
        <Route path="skyprofy-ts/main" element={<Main/>}/>
        <Route path="skyprofy-ts/playlist/:id" element={<CustomPlaylist/>}/>
      </Route>
      <Route path='skyprofy-ts/' element={homepage}/>
      <Route path="skyprofy-ts/registration" element={<RegistrationPage />} />
      <Route path="skyprofy-ts/login" element={<LoginPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
