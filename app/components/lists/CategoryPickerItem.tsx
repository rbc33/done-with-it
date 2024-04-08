import { useColorScheme } from "nativewind";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import colors from "../../config/colors";
import Icon from "../Icon";
import { PickerItemProps } from "../PickerItem";
import AppText from "../Text";

const CategoryPickerItem = ({ item, onPress }: PickerItemProps) => {
  const { colorScheme } = useColorScheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View className="px-7.5 py-5 items-center w-[127px]">
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={50}
          iconColor={colorScheme === "light" ? colors.light : colors.light}
        />
        <AppText extraClass=" mt-1 text-center">{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;
