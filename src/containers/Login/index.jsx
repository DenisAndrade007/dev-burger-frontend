import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/UserContext';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Logo from '../../assets/Logo.png';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles';

const schema = yup.object({
  email: yup
    .string()
    .email('Digite um email válido')
    .required('O email é obrigatório'),
  password: yup
    .string()
    .min(6, 'No mínimo 6 dígitos')
    .required('A senha é obrigatória'),
});

export function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const { putUserData } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/sessions', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Realizando login...',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.Admin) {
                 navigate('/admin/pedidos');
              } else {
                navigate('/');
              }
            }, 2000);
            return 'Login realizado com sucesso! 🎉';
          },
        },
        error: 'Email ou senha incorretos ❌',
      },
    );

    putUserData(userData);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>DevBurger!</span>
          <br />
          Acesse com seu <span>Login e Senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} autoComplete="email" />
            <p>{errors.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input
              type="password"
              {...register('password')}
              autoComplete="current-password"
            />
            <p>{errors.password?.message}</p>
          </InputContainer>

          {loginError && <p style={{ color: '#fff' }}>{loginError}</p>}

          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          <Link to="/register">Clique Aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}