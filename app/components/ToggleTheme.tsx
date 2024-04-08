import React from "react";
import { Platform, Switch, Text, View } from "react-native";
import defaultStyle from "../config/styles";
import { useColorScheme } from "nativewind";

const toggleTheme = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const platMargin = Platform.select({ ios: 10, android: 0 });
  return (
    <View style={{ bottom: platMargin }}>
      <View className="flex-row justify-end justify-flex-end items-center mt-[15px]">
        <Switch
          value={colorScheme === "dark" ? true : false}
          onValueChange={toggleColorScheme}
          className="accent-color: dark:slate-300"
          trackColor={{
            true: defaultStyle.colors.lightMedium,
            false: defaultStyle.colors.lightMedium,
          }}
          thumbColor={defaultStyle.colors.medium}
        />
        <Text style={{ marginLeft: 8 }}>{`${
          colorScheme === "dark" ? "🌙" : "🌞"
        }`}</Text>
      </View>
    </View>
  );
};

export default toggleTheme;
