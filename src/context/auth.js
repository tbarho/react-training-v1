import React, { createContext } from 'react';
import useAuthentication from '../hooks/useAuthentication';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const loginProps = useAuthentication();

  return (
    <AuthContext.Provider
      value={{
        ...loginProps,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
