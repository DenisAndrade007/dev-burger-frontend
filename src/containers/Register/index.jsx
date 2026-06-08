import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Logo from '../../assets/Logo.png';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Link,
} from './styles';

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('Digite um email válido')
    .required('O email é obrigatório'),
  password: yup
    .string()
    .min(6, 'No mínimo 6 dígitos')
    .required('A senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('A confirmação de senha é obrigatória'),
});

export function Register() {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      const { status } = response;

      if (status === 200 || status === 201) {
        toast.success('✅ Conta criada com sucesso!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else if (status === 409) {
        toast.error('❌ Email já cadastrado! Faça o login para continuar.');
      } else {
        throw new Error('Erro inesperado');
      }

      console.log(status);
      setRegisterError('');
    } catch (error) {
      console.error('Erro:', error);
      toast.error('⚠️ Falha no sistema! Tente novamente.');
      setRegisterError(
        error.response?.data?.error || 'Erro ao cadastrar, tente novamente',
      );
    }
  };

  if (Object.keys(errors).length > 0) {
    console.log('📋 Erros de validação:', errors);
  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar Conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register('name')} autoComplete="name" />
            <p>{errors.name?.message}</p>
          </InputContainer>

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
              autoComplete="new-password"
            />
            <p>{errors.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Confirmar Senha</label>
            <input
              type="password"
              {...register('confirmPassword')}
              autoComplete="off"
            />
            <p>{errors.confirmPassword?.message}</p>
          </InputContainer>

          {registerError && <p style={{ color: '#FF6B00' }}>{registerError}</p>}

          <Button type="submit">Cadastrar</Button>
        </Form>
        <p>
          Já possui Conta? <Link to="/login">Clique Aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
