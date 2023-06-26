import {put} from 'redux-saga/effects';

import {languageActions} from '@bus/language/actions';

export function* workerSetLanguage(action: any) {
  localStorage.setItem('@fun_LANGUAGE', action.payload);

  yield put(languageActions.setLanguageSuccess(action.payload));
}
