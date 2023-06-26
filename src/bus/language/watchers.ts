import {all, takeLatest, call} from 'redux-saga/effects'

import {languageTypes} from './types'
import {workerSetLanguage} from './workers'

function* watchSetLanguage() {
	yield takeLatest(languageTypes.SET_LANGUAGE_ASYNC, workerSetLanguage)
}

export function* watchLanguage() {
	yield all([call(watchSetLanguage)])
}
