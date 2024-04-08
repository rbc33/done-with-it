import React from "react";
import { ImageBackground, View, Image, Text } from "react-native";
import AppButton from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNav } from "../navigaton/AuthNAvigator";
import routes from "../navigaton/routes";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthNav>();
  return (
    <View className="flex-1 justify-end w-full h-full">
      <ImageBackground
        className="flex-1 justify-end "
        blurRadius={5}
        source={require("../assets/background.jpg")}
      >
        <View className="top-[80px] absolute self-center">
          <Image
            className="w-[100px] h-[100px] self-center"
            source={require("../assets/logo-red.png")}
          />
          <Text className="font-semibold text-[25px] self-center mt-5">
            One Man's Trash
          </Text>
          <Text className="font-semibold text-[25px]">
            {" "}
            Another Man's Treasure
          </Text>
        </View>
        <AppButton
          title="login"
          color="primary"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
