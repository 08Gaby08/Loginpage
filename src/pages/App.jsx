import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Button from '../components/Button/';
import { css } from '@emotion/react';
import { container, heading } from '../styles/styles';

const App = () => {
  return (
    <div css={container}>
      <h1 css={heading}>Bem-vindo faça seu cadastro!</h1>
      <RegisterForm />
      <Link to="/login">
        <Button>Ir para Login</Button>
      </Link>
    </div>
  );
}

export default App;

