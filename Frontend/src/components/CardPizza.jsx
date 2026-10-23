import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { formatNumber } from '../utils/formatNumber';

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);
  const imagenFinal = img.includes('firebasestorage') ? `/img/${id}.avif` : img;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={imagenFinal} className="card-img-top" alt={name} style={{ height: '220px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title text-start fw-bold text-capitalize">Pizza {name}</h5>
          <hr />
          <p className="card-text text-muted mb-1 text-center fw-light">Ingredientes:</p>
          <ul className="card-text small mb-2">
            {ingredients.map((ingredient) => (
              <li key={ingredient} className="text-capitalize">{ingredient}</li>
            ))}
          </ul>
          <hr />
          <p className="card-text text-center fs-5 fw-bold text-dark">
            Precio: ${formatNumber(price)}
          </p>
          <div className="d-flex justify-content-around">
            <Link to={`/pizza/${id}`} className="btn btn-outline-dark btn-sm">
              Ver Más 👀
            </Link>
            <button
              className="btn btn-dark btn-sm"
              onClick={() => addToCart({ id, name, price, img: imagenFinal })}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
