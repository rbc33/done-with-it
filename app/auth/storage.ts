import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";
import { decode } from "base-64";
import { User } from "./context";
import logger from "../utility/logger";

global.atob = decode;

interface StoreTokenProps {
  key: string;
  authToken: string;
  [key: string]: string;
}
const key = "authToken";
const storeToken = async (authToken: string) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    logger.log(error as any);
  }
};
const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    logger.log(error as any);
  }
};
const getUser: () => Promise<User | null> = () => {
  return getToken().then((token) => {
    return token ? jwtDecode(token) : null;
  });
};
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    logger.log(error);
  }
};

export default { storeToken, getToken, getUser, removeToken };
