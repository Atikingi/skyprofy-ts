import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  redirectPath?: string,
  isAllowed: boolean
}

export const ProtectedRoute = ({ redirectPath = 'skyprofy-ts/Login', isAllowed }: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true}/>;
  }

  return <Outlet/>;
};

export default ProtectedRoute;
