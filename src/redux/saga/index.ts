import {all, call} from 'redux-saga/effects'

import {watchAuth} from '@bus/authentication/watchers'
import {watchLanguage} from '@bus/language/watchers'

export function* rootSaga() {
	yield all([call(watchAuth), call(watchLanguage)])
}
