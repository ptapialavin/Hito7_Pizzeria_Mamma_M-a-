import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null); // { type: 'success' | 'error', text: string }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage({ type: 'error', text: 'Todos los campos son obligatorios!' });
      return;
    }

    if (password.length < 6) {
      setMessage({ type: 'error', text: 'La contraseña debe tener al menos 6 caracteres!' });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Las contraseñas no coinciden!' });
      return;
    }

    setMessage({ type: 'success', text: '¡Registro exitoso!' });
  };

  return (
    <div className="container my-4" style={{ maxWidth: '480px' }}>
      <h1>Registro</h1>

      {message && (
        <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">Correo electrónico</label>
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registerPassword" className="form-label">Contraseña</label>
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registerConfirmPassword" className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            id="registerConfirmPassword"
            className="form-control"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-dark">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
