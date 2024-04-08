import { RouteProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React from "react";
import ListindDetailsScreen from "../screens/ListindDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

export type FeedNavParamsList = {
  Listings: undefined;
  ListindDetails: {
    id: number;
    title: string;
    images: {
      url: string;
      thumbnailUrl: string;
    }[];
    price: number;
    categoryId: number;
    userId: number;
    location: {
      latitude: number;
      longitude: number;
    };
  };
};

export type FeedNav = NativeStackNavigationProp<FeedNavParamsList>;
export type FeedRoute = RouteProp<FeedNavParamsList>;

const Stack = createNativeStackNavigator<FeedNavParamsList>();
const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListindDetails" component={ListindDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
