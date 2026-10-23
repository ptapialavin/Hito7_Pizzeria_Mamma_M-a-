import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <div style={{ fontSize: '5rem' }}>🍕</div>
      <h1 className="display-3 fw-bold">404</h1>
      <h2 className="mb-3">¡Esta pizza se quemó en el horno!</h2>
      <p className="text-muted mb-4">
        La página que buscas no existe o fue movida. Vuelve a la carta y elige otra pizza.
      </p>
      <Link to="/" className="btn btn-dark">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
