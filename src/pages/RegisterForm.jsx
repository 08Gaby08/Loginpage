import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '../components/Input';
import Button from '../components/Button';
import { css } from '@emotion/react';
import { container, heading, errorMessage } from '../styles/styles';

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
    <div css={container}>
      <h1 css={heading}></h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nome completo" error={errors.fullName?.message} {...register('fullName')} />
        <Input label="Username" error={errors.username?.message} {...register('username')} />
        <Input label="Email" type="email" error={errors.email?.message} {...register('email')} />
        <Input label="Aniversário" type="date" error={errors.birthday?.message} {...register('birthday')} />
        <Input label="Senha" type="password" error={errors.password?.message} {...register('password')} />
        <Input label="Confirmar a senha" type="password" error={errors.confirmPassword?.message} {...register('confirmPassword')} />
        <Button type="submit">Registrar</Button>
      </form>
      {errors.fullName && <span css={errorMessage}>{errors.fullName.message}</span>}
      {errors.username && <span css={errorMessage}>{errors.username.message}</span>}
      {errors.email && <span css={errorMessage}>{errors.email.message}</span>}
      {errors.birthday && <span css={errorMessage}>{errors.birthday.message}</span>}
      {errors.password && <span css={errorMessage}>{errors.password.message}</span>}
      {errors.confirmPassword && <span css={errorMessage}>{errors.confirmPassword.message}</span>}
    </div>
  );
};

export default RegisterForm;
