import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Preloader from '../Preloader/Preloader';

export default function ProtectedRouteElement({
  element: Component,
  ...props
}) {
  const user = React.useContext(UserContext);

  return props.isChecking ? (
    <Preloader />
  ) : user ? (
    <Component {...props} />
  ) : (
    <Navigate
      to='/'
      replace
    />
  );
}
