import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Button from '../components/Button';
import Container from '../components/container/Container'

const App = () => {
  return (
    <div>
  <Container title="Bem-vindo faça seu cadastro!"> </Container>
      <RegisterForm />
      <Link to="/login">
        <Button>Ir para Login</Button>
      </Link>
  </div>

  );
}

export default App;

