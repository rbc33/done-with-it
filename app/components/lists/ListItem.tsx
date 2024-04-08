import React, { ReactElement, ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { IconProps } from "../Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

interface Props {
  title: string;
  subTitle?: string;
  image?: ImageSourcePropType;
  IconComponent?: ReactElement<IconProps>;
  onPress?: () => void;
  renderRighhtActions?: () => ReactNode;
}

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRighhtActions,
}: Props) => {
  return (
    <GestureHandlerRootView
      className="container mt-2 bg-white dark:bg-slate-600"
      style={{ width: "100%" }}
    >
      <Swipeable renderRightActions={renderRighhtActions}>
        <TouchableHighlight
          underlayColor="bg-light"
          onPress={onPress}
          style={{ width: "100%" }}
        >
          <View
            className="container flex-row justify-normal items-center p-[10px]"
            style={{ width: "100%" }}
          >
            {IconComponent}
            {image && (
              <Image
                className="w-[18%] aspect-square rounded-full"
                source={image}
              />
            )}
            <View className="w-[82%] ml-[10px] flex-1 justify-center">
              <Text
                className="font-bold text-[20px] w-[100%]"
                numberOfLines={1}
              >
                {title}
              </Text>
              {subTitle && (
                <Text
                  className="font-600 text-[20px] text-medium dark:text-darker"
                  numberOfLines={2}
                >
                  {subTitle}
                </Text>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={colors.darker}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;
