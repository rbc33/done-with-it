import { useContext } from "react";
import AuthContext, { User } from "./context";
import authStorage from "./storage";
import { jwtDecode } from "jwt-decode";
import { decode } from "base-64"; // required for jwtDecode
global.atob = decode;

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const logIn = (authToken: string) => {
    const user: User = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };
  const logOut = () => {
    setUser(null!);
    authStorage.removeToken();
  };
  return { user, logIn, logOut };
};

export default useAuth;
