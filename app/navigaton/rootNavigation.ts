import { NavigationContainerRef } from "@react-navigation/native";
import { createRef } from "react";
import { AccountNavParamsList } from "./AccountNavigator";

export const navigationRef =
  createRef<NavigationContainerRef<AccountNavParamsList>>();

const navigation = navigationRef.current;

const navigate = (
  name: string,
  params?: AccountNavParamsList[keyof AccountNavParamsList]
) => navigation?.navigate(name, params);

export default { navigate };
