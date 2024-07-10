import React from 'react';
import { css } from '@emotion/react';
import { inputStyle, labelStyle, errorMessage } from '../styles/styles';

const Input = ({ label, error, ...props }) => (
  <div>
    <label css={labelStyle}>{label}</label>
    <input css={inputStyle} {...props} />
    {error && <span css={errorMessage}>{error}</span>}
  </div>
);

export default Input;
