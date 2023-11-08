import React, { FC, useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import client from '../../apollo/apolloClient';

const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      firstName
      lastName
      jwt
    }
  }
`;

const REGISTER_MUTATION = gql`
  mutation Register(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $address: String!
  ) {
    SignUp(
      email: $email,
      password: $password,
      first_name: $firstName,
      last_name: $lastName,
      phone: $phone,
      address: $address
    )
  }
`;

const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    jwt: '',
  });

  const handleLogin = async () => {
    try {
      const { data } = await client.query({
        query: LOGIN_QUERY,
        variables: { email, password },
      });

      const { jwt, firstName, lastName } = data.Login;
      setIsLoggedIn(true);
      setUserData({ firstName, lastName, jwt });
      localStorage.setItem('user_info', JSON.stringify({ firstName, lastName, jwt }));
      // Realizar acciones con los datos, como redirigir al usuario
      setMessage('Inicio de sesión exitoso');

      setTimeout(() => {
        window.location.href = "/";
       
      }, 1000); //1 segundos
      
    } catch (error) {
      setMessage('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  const handleRegister = async () => {
    try {
      const { data } = await client.mutate({
        mutation: REGISTER_MUTATION,
        variables: {
          email,
          password,
          firstName,
          lastName,
          phone,
          address,
        },
      });

      // Realizar acciones con los datos, como redirigir al usuario
      setMessage('Registro exitoso');

      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      setMessage('Error al registrar. Verifica tus datos.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        style={{
          padding: '16px',
          marginTop: '60px',
          minHeight: '300px',
          backgroundSize: 'cover',
        }}
      >
        <Typography variant="h5">
          {isRegistering ? 'Registro' : 'Inicio de Sesión'}
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: '10px 0' }}
          />
          <TextField
            fullWidth
            label="Contraseña"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: '10px 0' }}
          />
          {isRegistering && (
            <>
              <TextField
                fullWidth
                label="Nombre"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{ margin: '10px 0' }}
              />
              <TextField
                fullWidth
                label="Apellido"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{ margin: '10px 0' }}
              />
              <TextField
                fullWidth
                label="Teléfono"
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ margin: '10px 0' }}
              />
              <TextField
                fullWidth
                label="Dirección"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ margin: '10px 0' }}
              />
            </>
          )}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={isRegistering ? handleRegister : handleLogin}
            style={{ margin: '10px 0' }}
          >
            {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
          </Button>
          <Typography variant="body2" style={{ margin: '10px 0', color: 'red' }}>
            {message}
          </Typography>
        </form>
      </Paper>
      <Typography
        variant="body2"
        style={{ margin: '10px 0', cursor: 'pointer', textDecoration: 'underline' }}
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering ? '¿Ya tienes una cuenta? Iniciar Sesión' : '¿No tienes una cuenta? Regístrate'}
      </Typography>
    </Container>
  );
};

export default LoginPage;
