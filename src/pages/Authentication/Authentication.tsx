import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import Select, {
  IndicatorSeparatorProps,
  MultiValue,
  StylesConfig,
} from 'react-select';

import {languageActions} from '@bus/language/actions';
import {getLanguage} from '@bus/language/selector';

import {langOption, langOptions} from './data';
import './Authentication.scss';
import icon from '@assets/images/loginBg.png';
import en from '@assets/images/flugs/en.png';

import Input from '@ui/Components/Input';
import CreateAccount from '@ui/Components/CreateAccount/CreateAccount';
import {useForm} from 'react-hook-form';
import {authenticationActions} from '@bus/authentication/actions';
import {getAuthentication} from '@bus/authentication/selector';
import Loader from './../../ui/Components/Loader/Loader';

type FormData = {
  email: string;
  password: string;
};

const Authentication: React.FC = () => {
  const dispatch = useDispatch();
  const {language} = useSelector(getLanguage);
  const {isLoadingAuth} = useSelector(getAuthentication);
  const {t} = useTranslation();

  const [actualLanguage, setActualLanguage] = useState(langOptions[0]);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showCreateAccount, setShowCreateAccount] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const changeLanguage = (lang: langOption | any) => {
    dispatch(languageActions.setLanguageAsync(lang.value));
  };

  const onAuthenticationSubmit = handleSubmit((data) => {
    dispatch(authenticationActions.authenticationAsync(data));
  });

  const getDefaultLanguage = () => {
    if (language) {
      const defaultLang = langOptions.filter(
        (lang: langOption) => lang.value === language,
      );

      setActualLanguage(defaultLang[0]);
    } else setActualLanguage(langOptions[0]);
  };

  useEffect(() => {
    getDefaultLanguage();
  }, [language]);

  const dot = (img = en) => ({
    alignItems: 'center',
    display: 'flex',
    ':before': {
      backgroundImage: `url(${img})`,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 20,
      width: 20,
    },
  });

  const colourStyles: StylesConfig<langOption> = {
    control: (styles) => ({
      ...styles,
      width: 123,
      backgroundColor: 'white',
      border: 'none',
      boxShadow: 'none',
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
    }),

    singleValue: (styles, {data}) => ({
      ...styles,
      color: '#ababb8',
      ...dot(data.img),
    }),
  };

  const indicatorSeparatorStyle = {
    display: 'none',
  };

  const IndicatorSeparator = ({
    innerProps,
  }: IndicatorSeparatorProps<langOption, true>) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  return (
    <section className="login_page_main">
      {!isLoadingAuth ? (
        <>
          <section className="login_page_header">
            <div className="container">
              <div className="login_page_inner">
                <div
                  className="login_page_left"
                  style={{backgroundImage: `url(${icon})`}}
                >
                  <div className="login_page_left-overflow"></div>
                  <div className="login_page_left_content">
                    <h1>Fanclub</h1>
                    <h2>Without prejudice</h2>
                  </div>
                </div>
                <div className="login_page_right">
                  <div className="login_page_right_content">
                    {showCreateAccount ? (
                      <CreateAccount
                        showPassword={showPassword}
                        setShowCreateAccount={setShowCreateAccount}
                        togglePassword={togglePassword}
                      />
                    ) : (
                      <>
                        <div className="login_page_right_title">
                          <h1> {t('login')}</h1>
                        </div>
                        <form
                          onSubmit={onAuthenticationSubmit}
                          className="login_form"
                        >
                          <Input
                            reactHookForm={{...register('email')}}
                            placeholder="email"
                          />
                          <Input
                            reactHookForm={{...register('password')}}
                            type={showPassword ? 'text' : 'password'}
                            toggle={togglePassword}
                            placeholder="Password"
                            endIcon={
                              showPassword ? 'open_eye.svg' : 'close_eye.svg'
                            }
                          />

                          <button type="submit" className="login_form_btn">
                            {t('login').toUpperCase()}
                          </button>

                          <div className="login_links">
                            <a href="#" className="form_password_toggle">
                              {t('forgotPassword')}
                            </a>
                            <span>•</span>
                            <a onClick={() => setShowCreateAccount(true)}>
                              {t('signup')}
                            </a>
                          </div>
                        </form>
                        <div className="login_signup">
                          {/* <div className="login_signup_link">
                   <a href="#">
                     <img className="Black" src="./img/VkIcon.svg" alt="" />
                     <img className="white" src="./img/whiteVk.svg" alt="" />
                     SIGN IN WITH VK
                   </a>
                 </div>

                 <div className="login_signup_link">
                   <a href="#">
                     <img
                       style={{left: '15px'}}
                       src="./img/googleIcon.svg"
                       alt=""
                     />
                     SIGN IN WITH GOOGLE
                   </a>
                 </div> */}
                        </div>{' '}
                      </>
                    )}
                    <div className="form_password">
                      <h2>
                        If you have an Fanclub account, you will receive a
                        password reset link to this e-mail.
                      </h2>
                      <div className="login_form_input">
                        <input type="text" required />
                        <label>Email</label>
                      </div>
                      <a
                        className="login_form_btn login_signup_toggle"
                        href="#"
                      >
                        SEND
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="notification">
         <div className="notification_content">
           <div className="notification_img">
             <svg>
               <circle cx="60" cy="60" r="15"></circle>
             </svg>
             <div className="counter">
               <img src="./img/notification.svg" alt="" />
             </div>
           </div>
           <h2>
             Please check your e-mail for a temporary password reset link and
             make sure you set a new one right after you click it.
           </h2>
         </div>
       </div> */}
          </section>
          <section className="login_footer">
            <div className="container">
              <div className="login_footer_inner">
                <div className="login_footer_inner_item">
                  <p>© 2022 Fanclub</p>
                </div>
                <div className="login_footer_inner_item">
                  <p>{t('about')}</p>
                </div>
                <div className="login_footer_inner_item">
                  <p>{t('termsOfService')}</p>
                </div>
                <div className="login_footer_inner_item">
                  <Select
                    value={actualLanguage}
                    onChange={(option: MultiValue<langOption>) =>
                      changeLanguage(option)
                    }
                    isSearchable={false}
                    menuPlacement="top"
                    components={{IndicatorSeparator}}
                    options={langOptions}
                    styles={colourStyles}
                  />
                </div>
                <div className="login_footer_inner_item">
                  <p>{t('help')}</p>
                </div>
                <div className="login_footer_inner_item">
                  <p>{t('contact')}</p>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Authentication;
