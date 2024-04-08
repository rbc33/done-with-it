import React, { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";

export interface AppButtonProps {
  title: ReactNode;
  color?: "primary" | "secondary";
  extraClassName?: string;
  onPress: () => void;
}
const AppButton = ({
  title,
  color = "primary",
  extraClassName,
  onPress,
}: AppButtonProps) => {
  let colorClass =
    color === "primary"
      ? "bg-primary rounded-[25px] self-center items-center justify-center p-[15px] w-[90%] mb-5 "
      : "bg-secondary rounded-[25px] self-center items-center justify-center p-[15px] w-[90%] mb-5 ";
  colorClass += extraClassName;

  return (
    <TouchableOpacity className={colorClass} onPress={onPress}>
      <Text className="text-white font-bold uppercase text-[18px]">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
