import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input/';
import Button from '../components/Button';
import Container from '../components/container/Container'
import InputPassword from '../components/Inputpassword';
import { css } from '@emotion/react';
import {errorMessage } from '../styles/styles';

function Api(data){
  const { email, password } = data;
  console.log("seu email é", email, "eu espero", "meuemail@gmail.com");
  console.log("sua senha é", password, "eu espero", "12345678");

  if (email === "meuemail@gmail.com"){
    if (password === "12345678"){
      return {
        "success": true,
        "messages": "Senha correta"
      };
    } else {
      return { "success": false, "messages": "Senha Incorreta" };
    }
  }
  return { "success": false, "messages": "informação invalida" };
}

const Login = () => {
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("cheguei até aqui");

    e.preventDefault();

    const data = Api({ email, password });

    if (data.success) {
      alert("Login com sucesso");
      navigate('/home');
    } else {
      alert(data.messages);
      setMsg(data.messages);
    }
  };

  return (
<div>
    <Container title="Login"></Container>
      {msg && <div css={errorMessage}>{msg}</div>}
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={msg && !email ? msg : null}
          required
        />
        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={msg && !password ? msg : null}
          required
        />
        <Button type="submit">Enviar</Button>
      </form>
  </div>
  );
}

export default Login;
