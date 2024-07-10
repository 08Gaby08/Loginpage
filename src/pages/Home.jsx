import React from 'react';
import { css } from '@emotion/react';
import { container, heading, paragraph } from '../styles';

const Home = () => {
  return (
    <div css={container}>
      <h1 css={heading}>Bem-vindo!</h1>
      <p css={paragraph}>Você foi redirecionado com sucesso.</p>
    </div>
  );
}

export default Home;
