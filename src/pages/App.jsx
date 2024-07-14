import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Button from '../components/Button';
import Container from '../components/container/Container'
import { css } from '@emotion/react';

const App = () => {
  return (
    <div>
    <Container title="Bem-vindo faça seu cadastro!">
      <RegisterForm />
      <Link to="/login">
        <Button>Ir para Login</Button>
      </Link>
      </Container>
    </div>
  );
}

export default App;

