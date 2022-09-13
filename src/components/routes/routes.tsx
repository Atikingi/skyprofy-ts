import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/not-found';
import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import ProtectedRoute from '../protected-route';
import Main from '../pages/main';
import PersonalPlaylist from '../pages/personal-playlist';
import CustomPlaylist from '../pages/custom-playlist';

interface Props {
  isLogin: boolean;
}

const AppRoutes = ({ isLogin }: Props) => {
  const homepage = isLogin ? <Main/> : <LoginPage/>;

  return (
    <Routes>
      <Route
        element={<ProtectedRoute isAllowed={isLogin}/>}>
        <Route path="/personal" element={<PersonalPlaylist />} />
        <Route path="/main" element={<Main/>}/>
        <Route path="/playlist/:id" element={<CustomPlaylist/>}/>
      </Route>
      <Route path='/' element={homepage}/>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
