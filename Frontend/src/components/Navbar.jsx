import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { formatNumber } from '../utils/formatNumber';

// NavLink agrega la clase "active" al enlace de la ruta actual.
const navClass = ({ isActive }) =>
  `btn btn-outline-light btn-sm${isActive ? ' active' : ''}`;

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white px-4 py-2">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center gap-2">
        <Link to="/" className="navbar-brand mb-0">
          ¡Pizzería Mamma Mia!
        </Link>

        <div className="d-flex flex-wrap gap-2 order-3 order-lg-2">
          <NavLink to="/" end className={navClass}>
            🍕 Inicio
          </NavLink>

          {token ? (
            <>
              <NavLink to="/profile" className={navClass}>
                🔓 Perfil
              </NavLink>
              <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navClass}>
                🔐 Iniciar Sesión
              </NavLink>
              <NavLink to="/register" className={navClass}>
                🔐 Registrarse
              </NavLink>
            </>
          )}
        </div>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `btn btn-outline-info btn-sm order-2 order-lg-3${isActive ? ' active' : ''}`
          }
        >
          🛒 Total: ${formatNumber(total)}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
