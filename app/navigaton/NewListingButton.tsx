import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

interface NewListingButtonProps {
  onPress: () => void;
}

const NewListingButton = ({ onPress }: NewListingButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="bg-primary rounded-full h-20 aspect-square bottom-[20px] border-[10px] border-white items-center justify-center">
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={50}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;
