import React, { FC, useState } from 'react';

import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
} from '@mui/material';

const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de inicio de sesión, por ejemplo, una llamada a una API.
    console.log('Iniciando sesión con email:', email, 'y contraseña:', password);
  };

  const handleRegister = () => {
    // Aquí puedes agregar la lógica de registro, por ejemplo, una llamada a una API.
    console.log('Registrando nuevo usuario con email:', email, 'y contraseña:', password);
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        style={{
          padding: '16px',
          marginTop: '60px',
          height: '400px',
          //backgroundImage: 'url(https://i.postimg.cc/nj8Dh0dK/Duende.gif)', 
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
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={isRegistering ? handleRegister : handleLogin}
            style={{ margin: '10px 0' }}
          >
            {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
          </Button>
          <Typography
            variant="body2"
            style={{ margin: '10px 0', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? '¿Ya tienes una cuenta? Iniciar Sesión' : '¿No tienes una cuenta? Registrarse'}
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
