// URL base de la API de pizzas. En local usa el backend en el puerto 5000;
// para un despliegue se puede definir VITE_API_URL en las variables de entorno.
export const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000';
