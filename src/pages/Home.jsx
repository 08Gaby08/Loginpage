import React from 'react';
import { css } from '@emotion/react';
import Container from '../components/container/Container'
import { paragraph } from '../styles/styles';

const Home = () => {
  return (
    <div>
    <Container title="Bem-vindo!"> </Container>
      <p css={paragraph}>Você foi redirecionado com sucesso.</p>
    </div>
  );
}

export default Home;