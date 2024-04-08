import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { platformSelect, useColorScheme } from "nativewind";
import { ReactNode } from "react";
import { SafeAreaView, StyleProp, View, ViewStyle } from "react-native";
import colors from "../config/colors";
interface Props {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}
const Screen = ({ children, style }: Props) => {
  const { colorScheme } = useColorScheme();
  const platformClassName = platformSelect({
    android: " container bg-light dark:bg-slate-800 flex-1 w-full ",
    ios: "container bg-light dark:bg-slate-800 flex-1 ",
  });

  return (
    <SafeAreaView
      style={[{ paddingTop: Constants.statusBarHeight }, style]}
      className={platformClassName}
    >
      <View className="container bg-light dark:bg-slate-800 flex-1">
        <StatusBar
          style={colorScheme === "dark" ? "light" : "dark"}
          backgroundColor={colorScheme === "dark" ? colors.dark : colors.light}
        />
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Screen;
