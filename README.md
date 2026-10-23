# Pizzería Mamma Mía

**Link del Deploy:** https://pizzeria-mamma-mia-lac.vercel.app

Proyecto de una pizzería ficticia hecho para el curso Desarrollo Full Stack de Desafío Latam. Este repositorio corresponde al **Hito 7** (React Router II) e incluye las dos partes de la aplicación:

| Carpeta | Contenido |
|---|---|
| `Frontend/` | Aplicación React + Vite: rutas con React Router, `CartContext`, `UserContext` y rutas protegidas. El detalle del hito está en `Frontend/README.md`. |
| `Backend/` | API Express de apoyo del curso (pizzas, auth con JWT y checkouts). |

## Despliegue

- Frontend (Vercel): https://pizzeria-mamma-mia-lac.vercel.app
- Backend (Render): https://pizzeria-mamma-mia-api.onrender.com

> El backend corre en el plan gratuito de Render: tras 15 minutos sin uso se duerme y la primera visita puede tardar cerca de un minuto en cargar las pizzas.

## Cómo ejecutarlo

Se necesitan dos terminales, una para cada parte.

**1. Backend** (puerto 5000):

```bash
cd Backend
npm install
npm start
```

Requiere un archivo `Backend/.env` con la variable `JWT_SECRET`.

**2. Frontend** (puerto 5173):

```bash
cd Frontend
npm install
npm run dev
```

## Requerimientos del Hito 7

1. Navbar con `NavLink`, que marca la ruta activa.
2. Detalle de pizza en `/pizza/:id` usando `useParams`.
3. `UserContext` con `token` y `logout`.
4. Rutas protegidas con `Navigate` (`/profile`, `/login` y `/register`).
5. Página 404 para rutas inexistentes.

## Autor

Patricio Tapia
