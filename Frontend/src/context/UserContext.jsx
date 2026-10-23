import { createContext, useState } from 'react';

// Context que maneja la sesión (simulada) del usuario.
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Token simulado: por defecto es true (usuario con sesión iniciada).
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
