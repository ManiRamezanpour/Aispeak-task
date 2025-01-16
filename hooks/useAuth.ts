import { AuthContext, AuthContextData } from "@/contexts/AuthContext";
import { useContext } from "react";

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { useAuth };
