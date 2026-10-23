import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { formatNumber } from '../utils/formatNumber';
import { API_URL } from '../utils/api';

const Pizza = () => {
  // useParams entrega el :id de la ruta /pizza/:id
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${API_URL}/api/pizzas/${id}`);

        if (!response.ok) {
          throw new Error('No se pudo obtener la pizza');
        }

        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return <p className="text-center my-5">Cargando pizza...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-danger my-5">
        Ocurrió un error al cargar la pizza: {error}. Verifica que el backend esté corriendo en
        {API_URL}.
      </p>
    );
  }

  if (!pizza) {
    return null;
  }

  const imagenFinal = pizza.img.includes('firebasestorage')
    ? `/img/${pizza.id}.avif`
    : pizza.img;

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <img
              src={imagenFinal}
              className="card-img-top"
              alt={pizza.name}
              style={{ height: '320px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h3 className="card-title text-capitalize fw-bold">Pizza {pizza.name}</h3>
              <p className="card-text text-muted">{pizza.desc}</p>
              <hr />
              <p className="card-text mb-1 fw-light">Ingredientes:</p>
              <ul>
                {pizza.ingredients.map((ingredient) => (
                  <li key={ingredient} className="text-capitalize">
                    {ingredient}
                  </li>
                ))}
              </ul>
              <hr />
              <p className="card-text text-center fs-4 fw-bold">
                Precio: ${formatNumber(pizza.price)}
              </p>
              <div className="d-grid">
                <button className="btn btn-dark" onClick={() =>
                    addToCart({
                      id: pizza.id,
                      name: pizza.name,
                      price: pizza.price,
                      img: imagenFinal,
                    })
                  }
                >
                  Añadir al carrito 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
