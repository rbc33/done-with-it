import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";

interface ActivityIndicator {
  visible: boolean;
}

const ActivityIndicator = ({ visible = false }: ActivityIndicator) => {
  if (!visible) return null;
  return (
    <View
      className="w-full h-full bg-white opacity-70 absolute"
      style={{ zIndex: 1 }}
    >
      <LottieView
        autoPlay
        style={{
          opacity: 1,
          position: "absolute",
          width: 200,
          height: 200,
          alignSelf: "center",
          // backgroundColor: "black",
        }}
        loop={true}
        source={require("../assets/animations/redloader.json")}
      />
    </View>
  );
};

export default ActivityIndicator;
