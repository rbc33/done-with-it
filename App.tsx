import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import React from "react";

import AuthContext from "./app/auth/context";
import { useAuthAndSplash } from "./app/auth/useAuthSplash";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigaton/AppNavigator";
import AuthNavigator from "./app/navigaton/AuthNAvigator";
import navigationTheme from "./app/navigaton/navigationTheme";
import { navigationRef } from "./app/navigaton/rootNavigation";
import logger from "./app/utility/logger";

logger.start();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { user, setUser, isReady, onLayoutRootView } = useAuthAndSplash();

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer
        ref={navigationRef}
        theme={navigationTheme}
        onReady={onLayoutRootView}
      >
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
