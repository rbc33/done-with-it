import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { User } from "./context";
import authStorage from "./storage";

export const useAuthAndSplash = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [user, setUser] = useState<User>(null!);

  useEffect(() => {
    const restoreUser = async () => {
      const res = await authStorage.getUser();
      if (!res) return setIsReady(true);
      setUser(res);
      setIsReady(true);
    };

    restoreUser();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  return { user, setUser, isReady, onLayoutRootView };
};
