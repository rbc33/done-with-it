import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styled } from "nativewind";
import React from "react";
import { Image, SafeAreaView, View } from "react-native";

const ViewImageScreen = () => {
  const StyledIcon = styled(MaterialCommunityIcons);
  return (
    <>
      <SafeAreaView />
      <View className="bg-black container  flex-1">
        <StyledIcon
          className="absolute top-[40px] left-[30px]"
          name="close"
          size={40}
          color="white"
        />
        <StyledIcon
          className="absolute top-[40px] right-[30px]"
          name="trash-can-outline"
          size={40}
          color="white"
        />
        <Image
          className="w-[100%] h-[100%] top-[40px]"
          resizeMode="contain"
          source={require("../assets/chair.jpg")}
        />
      </View>
    </>
  );
};

export default ViewImageScreen;
