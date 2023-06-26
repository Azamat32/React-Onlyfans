import {createReducer} from '@reduxjs/toolkit';

import {authenticationActions} from '@bus/authentication/actions';

interface InitialState {
  isAuth: boolean;
  isLoadingAuth: boolean;
  register: boolean;
}

const initialState: InitialState = {
  isAuth: false,
  isLoadingAuth: false,
  register: false,
};

export const authenticationReducer = createReducer(initialState, (builder) => {
  builder.addCase(authenticationActions.registerRequest, (state) => ({
    ...state,
    isLoadingAuth: true,
  }));

  builder.addCase(authenticationActions.registerSuccess, (state, action) => ({
    ...state,
    isAuth: action.payload,
    isLoadingAuth: false,
    register: true,
  }));

  builder.addCase(authenticationActions.registerFailed, (state, action) => ({
    ...state,
    isLoadingAuth: false,
  }));

  builder.addCase(authenticationActions.authenticationRequest, (state) => ({
    ...state,
    isLoadingAuth: true,
  }));

  builder.addCase(
    authenticationActions.authenticationSuccess,
    (state, action) => ({
      ...state,
      isAuth: action.payload,
      isLoadingAuth: false,
    }),
  );

  builder.addCase(authenticationActions.checkRequest, (state) => ({
    ...state,
    isLoadingAuth: false,
  }));

  builder.addCase(authenticationActions.checkSuccess, (state, action) => ({
    ...state,
    isAuth: action.payload,
    isLoadingAuth: false,
  }));

  builder.addCase(authenticationActions.logoutSuccess, () => ({
    register: false,
    isAuth: false,
    isLoadingAuth: false,
  }));
});
