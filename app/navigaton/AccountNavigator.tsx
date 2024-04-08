import { RouteProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React from "react";
import toggleTheme from "../components/ToggleTheme";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreem from "../screens/MessagesScreen";

export type AccountNavParamsList = {
  Account: undefined;
  Messages: undefined;
  [key: string]: undefined;
};

export type AccountNav = NativeStackNavigationProp<AccountNavParamsList>;
export type AccountRoute = RouteProp<AccountNavParamsList>;

const Stack = createNativeStackNavigator<AccountNavParamsList>();
const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerRight: toggleTheme }}
      />
      <Stack.Screen name="Messages" component={MessagesScreem} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
