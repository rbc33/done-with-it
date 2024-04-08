import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styled } from "nativewind";
import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";

interface Props {
  onPress: () => void;
}
const ListItemDeleteAction = ({ onPress }: Props) => {
  const StyledIcon = styled(MaterialCommunityIcons);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="bg-danger w-20 items-center justify-center">
        <MaterialCommunityIcons name="trash-can" size={35} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;
