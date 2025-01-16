// src/context/AuthContext.tsx
import users from "@/data/users";
import { useRouter } from "expo-router";
import React, { createContext, useState } from "react";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface AuthContextData {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    email: string,
    username: string,
    password: string
  ) => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Check from users lists
      users.forEach((item: User) => {
        if (
          (item.username == email || item.email == email) &&
          item.password == password
        ) {
          setUser(item);
          return router.push("/welcome");
        }
      });
    } catch (error) {
      console.error("Login error:", error);
      throw new Error("login credentials are not valid");
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      const newUser = {
        id: Math.random() * 10,
        email,
        username,
        password,
      };
      users.forEach((item: User) => {
        if (item.username == username || item.email == email) {
          throw new Error("User with this data is Exists !");
        }
      });
      users.push(newUser);
      setUser(newUser);
      return router.push("/welcome");
    } catch (error) {
      console.error("Login error:", error);
      throw new Error("login credentials are not valid");
    }
  };
  const logout = () => {
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };
