import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {authenticationActions} from '@bus/authentication/actions';
import {getLanguage} from '@bus/language/selector';

import Routing from '@routes/Routing';

const App = () => {
  const dispatch = useDispatch();
  const {i18n} = useTranslation();
  const {language} = useSelector(getLanguage);

  useEffect(() => {
    dispatch(authenticationActions.checkAsync());
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <Routing />;
};

export default App;
