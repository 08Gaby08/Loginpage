import { css } from '@emotion/react';


export const buttonStyle = css`
  background-color: white;
  color: rgb(238, 10, 135);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 4px;
  &:hover {
    background-color: rgb(238, 10, 135);
    color: white;
  }
`;
export const labelStyle = css`
  display: block;
  margin: 10px 0 5px;
  color: white;
`;