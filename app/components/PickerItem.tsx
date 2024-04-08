import React from "react";
import { TouchableOpacity } from "react-native";
import { Category } from "./Picker";
import AppText from "./Text";

export interface PickerItemProps {
  item: Category;
  onPress: () => void;
}

const PickerItem = ({ item, onPress }: PickerItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText extraClass="p-5">{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;
