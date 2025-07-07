import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
  sub: string;
  exp: number;
  email?: string;
}

interface AuthContextType {
  accessToken: string | null;
  user: DecodedToken | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    () => localStorage.getItem("access_token")
  );
  const [user, setUser] = useState<DecodedToken | null>(null);

  useEffect(() => {
    if (accessToken) {
      try {
        const decoded: DecodedToken = jwtDecode(accessToken);
        setUser(decoded);
      } catch (err) {
        console.error("Failed to decode token", err);
        logout();  // Invalidate if decoding fails
      }
    }
  }, [accessToken]);

  const login = (token: string) => {
    localStorage.setItem("access_token", token);
    setAccessToken(token);
    try {
      const decoded: DecodedToken = jwtDecode(token);
      setUser(decoded);
    } catch (err) {
      console.error("Invalid token on login", err);
    }
    window.location.href = "/";
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setAccessToken(null);
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ accessToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
