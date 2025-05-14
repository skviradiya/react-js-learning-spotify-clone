// src/providers/AuthProvider.tsx
import { createContext, useContext, useEffect, useState } from "react";
import cacheAccessKeys from "../constants/cacheAccessKeys";
import { userActions } from "../store/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  userData: IUserData;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem(cacheAccessKeys.USER_DATA);
    if (userData) {
      dispatch(userActions.setUserData(JSON.parse(userData)));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) return;

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
