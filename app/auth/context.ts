import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface User {
  email: string;
  iat: number;
  name: string;
  userId: number;
}
interface AuthContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}
export const AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;
