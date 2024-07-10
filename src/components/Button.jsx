import React from 'react';
import { css } from '@emotion/react';
import { buttonStyle } from '../styles/styles';

const Button = ({ children, ...props }) => (
  <button css={buttonStyle} {...props}>
    {children}
  </button>
);

export default Button;
