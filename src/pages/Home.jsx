import React from 'react';
import { css } from '@emotion/react';
import Container from '../components/container/Container'
import { paragraph } from '../styles/styles';

const Home = () => {
  return (
    <div>
    <Container title="Bem-vindo!"> 
      <p css={paragraph}>Você foi redirecionado com sucesso.</p>
      </Container>
    </div>
  );
}

export default Home;