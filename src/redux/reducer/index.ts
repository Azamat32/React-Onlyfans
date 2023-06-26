import {combineReducers} from 'redux'

import {authenticationReducer} from '@bus/authentication/reducer'
import {languageReducer} from '@bus/language/reducer'

export const rootReducer = () =>
	combineReducers({
		authentication: authenticationReducer,
		language: languageReducer,
	})
