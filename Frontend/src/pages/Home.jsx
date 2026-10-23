import { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { API_URL } from '../utils/api';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/pizzas`);

        if (!response.ok) {
          throw new Error('No se pudo obtener el listado de pizzas');
        }

        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div>
      <Header />
      <div className="container my-4">
        {loading && <p className="text-center">Cargando pizzas...</p>}

        {error && (
          <p className="text-center text-danger">
            Ocurrió un error al cargar las pizzas: {error}. Verifica que el backend esté
            corriendo en {API_URL}.
          </p>
        )}

        {!loading && !error && (
          <div className="row">
            {pizzas.map((pizza) => (
              <CardPizza
                key={pizza.id}
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
