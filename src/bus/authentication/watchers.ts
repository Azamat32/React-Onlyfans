import {all, takeLatest, call, takeEvery} from 'redux-saga/effects';

import {authenticationTypes} from './types';
import {
  workerCheck,
  workerLogin,
  workerLogout,
  workerRegister,
} from './workers';

function* watchRegister() {
  yield takeEvery(authenticationTypes.REGISTER_ASYNC, workerRegister);
}

function* watchAuthentication() {
  yield takeLatest(authenticationTypes.AUTHENTICATION_ASYNC, workerLogin);
}

function* watchCheck() {
  yield takeLatest(authenticationTypes.CHECK_ASYNC, workerCheck);
}

function* watchLogout() {
  yield takeLatest(authenticationTypes.LOGOUT_ASYNC, workerLogout);
}

export function* watchAuth() {
  yield all([
    call(watchAuthentication),
    call(watchCheck),
    call(watchLogout),
    call(watchRegister),
  ]);
}
