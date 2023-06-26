import React from 'react';

import Image from '@ui/Components/Image';

import './Input.scss';

interface InputProps {
  placeholder?: string;
  type?: string;
  startIcon?: any;
  endIcon?: any;
  toggle?: any;
  reactHookForm?: any;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  startIcon,
  endIcon,
  type,
  toggle,
  reactHookForm,
}) => {
  return (
    <label className="labelContainer">
      {startIcon && <Image path={startIcon} />}
      <input {...reactHookForm} type={type} className="input" required />
      {endIcon ? (
        <div onClick={toggle}>
          <Image path={endIcon} />
        </div>
      ) : null}

      {startIcon ? (
        <span className="floatingLabel">{placeholder}</span>
      ) : (
        <span className="floatingLabel">{placeholder}</span>
      )}
    </label>
  );
};

export default Input;
