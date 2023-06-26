import Input from '@ui/Components/Input';
import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import './CreateAccount.scss';
import {authenticationActions} from '@bus/authentication/actions';

interface Props {
  showPassword: boolean;
  togglePassword: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCreateAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const CreateAccount: React.FC<Props> = ({
  showPassword,
  togglePassword,
  setShowCreateAccount,
}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) =>
    dispatch(authenticationActions.registerAsync(data)),
  );

  return (
    <>
      <div className="login_page_right_title">
        <h1>Create your account</h1>
      </div>
      <form onSubmit={onSubmit} className="login_form">
        <Input
          reactHookForm={{...register('name'), required: true}}
          placeholder="Name"
        />
        <Input
          reactHookForm={{...register('email'), required: true}}
          placeholder="Email"
        />
        <Input
          reactHookForm={{...register('password'), required: true}}
          type={showPassword ? 'text' : 'password'}
          toggle={togglePassword}
          placeholder="Password"
          endIcon={showPassword ? 'open_eye.svg' : 'close_eye.svg'}
        />
        <Input
          reactHookForm={{...register('confirmPassword'), required: true}}
          type={showPassword ? 'text' : 'password'}
          toggle={togglePassword}
          placeholder="Confirm Password"
          endIcon={showPassword ? 'open_eye.svg' : 'close_eye.svg'}
        />
        <button type="submit" className="login_form_btn">
          SIGN UP
        </button>
        <p>
          By signing up you agree to our <a>Terms of Service</a> and
          <a>Privacy Policy</a>, and confirm that you are at least 18 years old.
        </p>
        <div className="login_links">
          <h6>
            Already have an account?{' '}
            <a onClick={() => setShowCreateAccount(false)}>Login</a>
          </h6>
        </div>
      </form>
      {/* <div className="login_signup">
        <div className="login_signup_link">
          <a href="#">
            <img className="Black" src="./img/VkIcon.svg" alt="" />
            <img className="white" src="./img/whiteVk.svg" alt="" /> SIGN IN
            WITH VK
          </a>
        </div>

        <div className="login_signup_link">
          <a href="#">
            <img style={{left: '15px'}} src="./img/googleIcon.svg" alt="" />
            SIGN IN WITH GOOGLE
          </a>
        </div>
        <div className="login_signup_link">
          <a href="#">
            <img style={{left: '15px'}} src="./img/apple.svg" alt="" />
            SIGN IN WITH APPLE ID
          </a>
        </div>
      </div> */}
    </>
  );
};

export default CreateAccount;
