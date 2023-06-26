import React, {useEffect} from 'react';
import {Routes, Navigate, Route} from 'react-router-dom';

import Authentication from '@pages/Authentication';
import PrivateRoute from '@routes/PrivateRoute';
import PublicRoute from '@routes/PublicRoute';

import Main from '@layouts/Main';
import Home from '@pages/Home';
import Notifications from '@pages/Notifications';
import Messages from '@pages/Messages';
import Subscriptions from '@pages/Subscriptions';
import Subscribers from '@pages/Subscribers';
import Suggestions from '@pages/Suggestions';
import MyProfile from '@pages/MyProfile';
import {useDispatch} from 'react-redux';
import {authenticationActions} from '@bus/authentication/actions';

const Routing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticationActions.checkAsync());
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Authentication />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/subscribers" element={<Subscribers />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default Routing;
