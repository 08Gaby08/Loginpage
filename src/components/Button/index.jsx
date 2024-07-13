import React from 'react';
import { css } from '@emotion/react';
import { buttonStyle } from './styed-button';

export default function Button({ children, ...props }) { 
  return (
      <button css={buttonStyle} {...props}>
        {children}
      </button>
  );
};
