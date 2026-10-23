# Pizzería Mamma Mía

#Link del Deploy: (pendiente)

Landing page de una pizzería ficticia, hecha con React y Vite. En este hito se profundizó en React Router: la página de detalle obtiene la pizza con `useParams`, se simula una sesión de usuario con un `UserContext` (token y `logout`), el Navbar cambia según la sesión y se implementaron rutas protegidas.

Proyecto correspondiente al Hito 7 del curso de React de Desafío Latam (continuación del Hito 6, que incorporó el `CartContext`).

## Backend

Las páginas Home y Pizza consumen una API de pizzas, por lo que necesitan el backend corriendo en `http://localhost:5000`. El backend de apoyo del curso está incluido en la carpeta `Backend` de este repositorio (ver el README de la raíz). El hito usa el endpoint `GET /api/pizzas/:id`.

La URL base de la API se define en `src/utils/api.js` y se puede cambiar con la variable de entorno `VITE_API_URL`.

## Rutas

| Ruta                         | Componente | Acceso                                           |
| ---------------------------- | ---------- | ------------------------------------------------ |
| `/`                          | Home       | Siempre                                          |
| `/pizza/:id`                 | Pizza      | Siempre (el `id` se lee con `useParams`)         |
| `/cart`                      | Cart       | Siempre (el botón "Pagar" requiere sesión)       |
| `/register`                  | Register   | Solo sin sesión (con sesión redirige a `/`)      |
| `/login`                     | Login      | Solo sin sesión (con sesión redirige a `/`)      |
| `/profile`                   | Profile    | Solo con sesión (sin sesión redirige a `/login`) |
| `/404` y cualquier otra ruta | NotFound   | Siempre                                          |

## Contexts

**`CartContext`** (`src/context/CartContext.jsx`): maneja el carrito. Expone `cart`, `addToCart`, `increment`, `decrement` y `total`.

**`UserContext`** (`src/context/UserContext.jsx`): maneja la sesión simulada.

| Valor      | Descripción                                               |
| ---------- | --------------------------------------------------------- |
| `token`    | Estado booleano; por defecto es `true` (sesión iniciada). |
| `logout()` | Cambia `token` a `false`.                                 |

## Cómo usarlo

Con el backend corriendo, entra al Home y usa "Ver Más 👀" en cualquier tarjeta para abrir el detalle de esa pizza (`/pizza/p001`, `/pizza/p002`, ...). Como el token parte en `true`, el Navbar muestra Perfil y Logout, y las páginas de login y registro redirigen al Home. Al pulsar **Logout** el token pasa a `false`: el Navbar muestra Iniciar Sesión y Registrarse, `/profile` redirige a `/login` y el botón "Pagar" del carrito queda deshabilitado. El enlace de la ruta actual se resalta en el Navbar (`NavLink`).

La sesión y el carrito se guardan en memoria, así que al recargar la página la sesión vuelve a estar iniciada y el carrito se vacía.

## Tecnologías

React · Vite · React Router (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `Navigate`, `useParams`, `useNavigate`) · Context API · Bootstrap 5 · JavaScript (`fetch`, `useEffect`, `useState`)

## Estructura

```
Hito7_Pizzeria_Mamma_Mía/
├── public/
│   └── img/                (p001.avif … p006.avif)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── CardPizza.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── UserContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   ├── Cart.jsx
│   │   ├── Pizza.jsx
│   │   ├── Profile.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── pizzas.js
│   ├── utils/
│   │   ├── api.js
│   │   └── formatNumber.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── README.md
```

## Ejecutar

```
npm install
npm run dev
```

(requiere el backend corriendo en paralelo, ver sección "Backend")

## Requerimientos de la prueba

| #   | Requerimiento                                                                                            | Dónde se cumple                                                        |
| --- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 1   | `useParams` para obtener el id en Pizza.jsx y pedir la pizza a la API                                    | `Pizza.jsx`, ruta `/pizza/:id` en `App.jsx`; `Link` en `CardPizza.jsx` |
| 2   | `UserContext` con `token` (por defecto `true`) y método `logout`                                         | `src/context/UserContext.jsx`, provider en `main.jsx`                  |
| 3   | Navbar usa el `UserContext`: Perfil y Logout con token; Login y Register sin token; Home y Total siempre | `Navbar.jsx`                                                           |
| 4   | Botón "Pagar" deshabilitado si el token es `false`                                                       | `Cart.jsx`                                                             |
| 5   | Ruta protegida `/profile` (sin token → `/login`); con token, login y register redirigen al home          | `App.jsx` (`Navigate`)                                                 |

## Autor

Patricio Tapia L. — Proyecto desarrollado para el curso Desarrollo Full Stack de Desafío Latam.
