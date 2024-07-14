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



export const heading = css`
  color: white;
  margin-bottom: 15px;
`;

export const paragraph = css`
  color: white;
`;


export const errorMessage = css`
  color: white;
  background: #FF1493;
  padding: 12px;
`;
