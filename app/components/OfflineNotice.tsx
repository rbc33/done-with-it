import { View } from "react-native";
import React from "react";
import Text from "./Text";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View
        className="bg-primary self-start place-self-start justify-center items-center absolute h-10 w-full"
        style={{ top: Constants.statusBarHeight, zIndex: 1 }}
      >
        <Text>Connection not Reacheble</Text>
      </View>
    );
  return null;
};
export default OfflineNotice;
