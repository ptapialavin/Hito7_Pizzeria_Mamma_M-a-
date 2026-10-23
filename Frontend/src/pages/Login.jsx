import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null); // { type: 'success' | 'error', text: string }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage({ type: 'error', text: 'Todos los campos son obligatorios!' });
      return;
    }

    if (password.length < 6) {
      setMessage({ type: 'error', text: 'La contraseña debe tener al menos 6 caracteres!' });
      return;
    }

    setMessage({ type: 'success', text: '¡Autenticación exitosa!' });
  };

  return (
    <div className="container my-4" style={{ maxWidth: '480px' }}>
      <h1>Iniciar Sesión</h1>

      {message && (
        <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">Correo electrónico</label>
          <input
            type="email"
            id="loginEmail"
            className="form-control"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Contraseña</label>
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
