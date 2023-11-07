import React, { FC, useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import client from '../../apollo/apolloClient'; // Importa el cliente Apollo
import { useRouter } from 'next/router'; // Importa el enrutador de Next.js

const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      firstName
      lastName
      jwt
    }
  }
`;

const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter(); // Obtiene el enrutador de Next.js

  const handleLogin = async () => {
    try {
      const { data } = await client.query({
        query: LOGIN_QUERY,
        variables: { email, password },
      });

      setMessage('Inicio de sesión exitoso');

      // Redirige a la página de inicio ("/") después de 1 segundo
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      setMessage('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        style={{
          padding: '16px',
          marginTop: '60px',
          height: '400px',
          backgroundSize: 'cover',
        }}
      >
        <Typography variant="h5">Inicio de Sesión</Typography>
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
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            style={{ margin: '10px 0' }}
          >
            Iniciar Sesión
          </Button>
          <Typography variant="body2" style={{ margin: '10px 0', color: 'red' }}>
            {message}
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
