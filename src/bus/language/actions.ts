import {createAction} from '@reduxjs/toolkit'

import {languageTypes} from '@bus/language/types'

export const languageActions = {
	setLanguageSuccess: createAction(languageTypes.SET_LANGUAGE_SUCCESS, data => ({payload: data})),

	setLanguageAsync: createAction(languageTypes.SET_LANGUAGE_ASYNC, data => ({payload: data})),
}
