/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const formContainer = css`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

export const inputField = css`
  margin-bottom: 20px;
`;

export const errorMessage = css`
  color: red;
  font-size: 0.8em;
`;

export const button = css`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
