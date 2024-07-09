import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { css } from '@emotion/react';
import { formContainer, inputField, errorMessage, button } from '../styles/styles';

const schema = z.object({
  fullName: z.string().min(1, 'Nome completo é obrigatório'),
  username: z.string()
    .min(4, 'Username precisa ter no mínimo 4 caracteres')
    .regex(/^[A-Za-z][A-Za-z0-9]+$/, 'Username não pode começar com número, conter espaços ou caracteres especiais'),
  email: z.string().email('Email inválido'),
  birthday: z.string().min(1, 'Aniversário é obrigatório'),
  password: z.string().min(8, 'Senha precisa ter pelo menos 8 dígitos'),
  confirmPassword: z.string().min(8, 'Confirmar senha é obrigatório'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Confirmar senha precisa ser idêntico à senha',
  path: ['confirmPassword']
});

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form css={formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div css={inputField}>
        <label>Nome completo</label>
        <input type="text" {...register('fullName')} />
        {errors.fullName && <span css={errorMessage}>{errors.fullName.message}</span>}
      </div>
      <div css={inputField}>
        <label>Username</label>
        <input type="text" {...register('username')} />
        {errors.username && <span css={errorMessage}>{errors.username.message}</span>}
      </div>
      <div css={inputField}>
        <label>Email</label>
        <input type="email" {...register('email')} />
        {errors.email && <span css={errorMessage}>{errors.email.message}</span>}
      </div>
      <div css={inputField}>
        <label>Aniversário</label>
        <input type="date" {...register('birthday')} />
        {errors.birthday && <span css={errorMessage}>{errors.birthday.message}</span>}
      </div>
      <div css={inputField}>
        <label>Senha</label>
        <input type="password" {...register('password')} />
        {errors.password && <span css={errorMessage}>{errors.password.message}</span>}
      </div>
      <div css={inputField}>
        <label>Confirmar a senha</label>
        <input type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <span css={errorMessage}>{errors.confirmPassword.message}</span>}
      </div>
      <button type="submit" css={button}>Registrar</button>
    </form>
  );
};

export default RegisterForm;
