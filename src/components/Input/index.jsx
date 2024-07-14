import React from 'react';
import { css } from '@emotion/react';
import { inputStyle, labelStyle, errorMessage } from './styed-input';

export default function Input({ label, error, ...props }) {
  return (
    <div>
      <label css={labelStyle}>{label}</label>
      <input css={inputStyle} {...props} />
      {error && <span css={errorMessage}>{error}</span>}
    </div>
  );
}