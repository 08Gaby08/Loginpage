import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Eye, EyeOff } from 'lucide-react';
import { inputStyle, labelStyle, iconStyle} from './styed-inputpassword'; 

const InputPassword = ({ value, onChange, error, label, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div css={{ position: 'relative' }}>
      <label css={labelStyle}>{label}</label>
      <input
        css={inputStyle}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <div css={iconStyle} onClick={togglePasswordVisibility}>
        {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
      </div>
    </div>
  );
};

export default InputPassword;
