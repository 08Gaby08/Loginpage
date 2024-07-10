// components/Button.jsx
import React from 'react';
import { css } from '@emotion/react';
import { buttonStyle } from '../styles';

const Button = ({ children, ...props }) => (
  <button css={buttonStyle} {...props}>
    {children}
  </button>
);

export default Button;
