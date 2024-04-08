import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styled } from "nativewind";
import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import fontClassName from "../config/font";
import defaultStyles from "../config/styles";

export interface AppTextInputProps extends TextInputProps {
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  className?: string;
  fontClass?: string;
  width?: any;
  placeholder?: string;
}

const AppTextInput = ({
  icon,
  className = " text-xl text-black font-medium ",
  fontClass = fontClassName,
  width = "100%",
  placeholder,
  ...otherProps
}: AppTextInputProps) => {
  const StyledIcon = styled(MaterialCommunityIcons);

  return (
    <View className="container px-2">
      <View
        style={{ width }}
        className={
          "container bg-white dark:bg-slate-400 rounded-3xl flex-row p-4 mt-1.5 mb-2.5 "
        }
      >
        {icon && (
          <StyledIcon
            name={icon}
            size={22}
            color={defaultStyles.colors.medium}
            className="mr-2.5"
          />
        )}
        <TextInput
          value=""
          className={" text-xl text-black font-lightbold " + fontClass}
          placeholderTextColor={defaultStyles.colors.lightDark}
          placeholder={placeholder + "                                    "}
          {...otherProps}
        />
      </View>
    </View>
  );
};

export default AppTextInput;
