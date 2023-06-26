import {call, put} from 'redux-saga/effects';

import {authenticationActions} from '@bus/authentication/actions';
import {login, logout, refresh, register} from '@api/authentication';
import {languageActions} from '@bus/language/actions';

export function* workerRegister(action: any): any {
  yield put(authenticationActions.registerRequest());

  const response = yield call(register, action.payload);
  if (response?.data) {
    console.log(response.data);
    yield put(authenticationActions.registerSuccess(true));
    localStorage.setItem('@fun_ACCESS_TOKEN', response.data.data.token);
  } else {
    yield put(authenticationActions.registerFailed(null));
  }
}

export function* workerLogin(action: any): any {
  yield put(authenticationActions.authenticationRequest());
  const response = yield call(login, action.payload);
  if (response?.data) {
    localStorage.setItem('@fun_ACCESS_TOKEN', response.data.data.token);
    yield put(authenticationActions.authenticationSuccess(true));
  } else {
    console.log('Ошибка');
  }
}

export function* workerCheck(): any {
  yield put(authenticationActions.checkRequest());
  const language = localStorage.getItem('@fun_LANGUAGE') || 'en';

  yield put(languageActions.setLanguageSuccess(language));
  const token = localStorage.getItem('@fun_ACCESS_TOKEN');
  if (token) {
    yield put(authenticationActions.checkSuccess(true));
    const response = yield call(refresh);
    if (response?.data) {
      localStorage.setItem('@fun_ACCESS_TOKEN', response.data.data.token);
      yield put(authenticationActions.authenticationSuccess(true));
    } else {
      console.log('Ошибка рефреша');
    }
  } else {
    yield put(authenticationActions.checkSuccess(false));
  }
}

export function* workerLogout() {
  yield put(authenticationActions.authenticationSuccess(false));
  // yield call(logout);
  localStorage.removeItem('@fun_ACCESS_TOKEN');
}
