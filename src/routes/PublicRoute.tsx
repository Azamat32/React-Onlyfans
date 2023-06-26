import React, {FC, ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

import {getAuthentication} from '@bus/authentication/selector';

interface PublicRouteProps {
  children: ReactElement;
}

const PublicRoute: FC<PublicRouteProps> = ({children}) => {
  const {isAuth, register} = useSelector(getAuthentication);

  if (isAuth && register) {
    return <Navigate to={'/profile'} />;
  } else if (isAuth) {
    return <Navigate to={'/'} />;
  }

  return children;
};

export default PublicRoute;
