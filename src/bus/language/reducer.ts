import {createReducer} from '@reduxjs/toolkit';

import {languageActions} from '@bus/language/actions';
import {authenticationActions} from '@bus/authentication/actions';

interface InitialState {
  language: string;
}

const initialState: InitialState = {
  language: 'en',
};

export const languageReducer = createReducer(initialState, (builder) => {
  builder.addCase(languageActions.setLanguageSuccess, (state, action) => ({
    ...state,
    language: action.payload,
  }));

  builder.addCase(authenticationActions.logoutSuccess, () => ({
    language: 'en',
  }));
});
