import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";

import colors from "../../config/colors";

interface ListItemDeleteActionProps {
  onPress: () => void;
}
const ListItemDeleteAction = ({ onPress }: ListItemDeleteActionProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="w-17.5 bg-danger justify-center items-center">
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;
