// context/auth.tsx
import { tokenStorage } from '@/storages';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext  : any = createContext(undefined);

export function AuthProvider({ children }: any) {
  const [token, setToken] : any = useState(null);

  useEffect(() => {
    // Read token on app startup
    readToken();
  }, []);

  const readToken = async () => {
    const token: any = await tokenStorage.getToken();

    if (Boolean(token)) {
      setToken(token);
    }
  }
  
  return (
    <AuthContext.Provider value={{ token , setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
