import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import colors from "../config/colors";

export interface IconProps {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

const Icon = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}: IconProps) => {
  const dynamicClass =
    "bg-[" +
    backgroundColor +
    "] w-10 aspect-square rounded-full justify-center items-center";

  return (
    <View
      // className={}
      // className={dynamicClass}
      style={{
        backgroundColor: backgroundColor,
        width: size,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: size / 2,
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default Icon;
