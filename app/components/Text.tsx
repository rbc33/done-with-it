import React, { ReactNode } from "react";
import { Text, TextProps } from "react-native";
import fontClassName from "../config/font";

interface AppTextProps extends TextProps {
  children: ReactNode;
  className?: string;
  fontClass?: string;
  extraClass?: string;
}
const AppText = ({
  children,
  className = " text-xl text-dark dark:text-light font-medium ",
  fontClass = fontClassName,
  extraClass,
  ...otherProps
}: AppTextProps) => {
  let defaultClassName = fontClass + className + extraClass;

  return (
    <Text
      // style={defaultStyles.text}
      className={defaultClassName}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
