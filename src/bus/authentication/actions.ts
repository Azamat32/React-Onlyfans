import {createAction} from '@reduxjs/toolkit';

import {authenticationTypes} from '@bus/authentication/types';

export const authenticationActions = {
  registerRequest: createAction(authenticationTypes.REGISTER_REQUEST),
  registerSuccess: createAction(
    authenticationTypes.REGISTER_SUCCESS,
    (data) => ({payload: data}),
  ),

  registerFailed: createAction(authenticationTypes.REGISTER_FAILED, (data) => ({
    payload: data,
  })),

  registerAsync: createAction(authenticationTypes.REGISTER_ASYNC, (data) => ({
    payload: data,
  })),

  authenticationRequest: createAction(
    authenticationTypes.AUTHENTICATION_REQUEST,
  ),
  authenticationSuccess: createAction(
    authenticationTypes.AUTHENTICATION_SUCCESS,
    (data) => ({payload: data}),
  ),

  authenticationAsync: createAction(
    authenticationTypes.AUTHENTICATION_ASYNC,
    (data) => ({payload: data}),
  ),

  checkRequest: createAction(authenticationTypes.CHECK_REQUEST),
  checkSuccess: createAction(authenticationTypes.CHECK_SUCCESS, (data) => ({
    payload: data,
  })),
  checkAsync: createAction(authenticationTypes.CHECK_ASYNC),

  logoutSuccess: createAction(authenticationTypes.LOGOUT_SUCCESS),
  logoutAsync: createAction(authenticationTypes.LOGOUT_ASYNC),
};
