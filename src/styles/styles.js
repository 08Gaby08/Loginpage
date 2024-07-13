import { css } from '@emotion/react';

export const globalStyles = css`
  body {
    font-family: Arial, sans-serif;
    background-color: rgb(240, 239, 239);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110vh;
    margin: 0;
  }
`;

export const container = css`
  background-color: rgb(238, 10, 135);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  widht: 300px;
`;

export const heading = css`
  color: white;
  margin-bottom: 15px;
`;

export const paragraph = css`
  color: white;
`;

export const labelStyle = css`
  display: block;
  margin: 10px 0 5px;
  color: white;
`;

export const inputStyle = css`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
`;



export const errorMessage = css`
  color: white;
  background: #FF1493;
  padding: 12px;
`;
