import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import AppText from "./Text";

interface Props {
  title: string;
  subtitle: string;
  imageUrl: string;
  thumbnailUrl: string;
  onPress: () => void;
}
const CardComponent = ({
  title,
  subtitle,
  imageUrl,
  thumbnailUrl,
  onPress,
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="container bg-light dark:bg-slate-800 flex-1 items-center px-3">
        <View className="container bg-white dark:bg-slate-600 flex-1 items-start  mt-6 overflow-hidden rounded-[18px]">
          <Image
            // className="w-full h-[220px] "
            // resizeMode="cover"
            style={{ width: "100%", height: 220, resizeMode: "cover" }}
            tint="light"
            preview={{ uri: thumbnailUrl }}
            uri={imageUrl}
          />
          <View className="p-5">
            <AppText numberOfLines={1}>{title}</AppText>
            <Text
              className="text-secondary text-[20px] font-bold my-2"
              numberOfLines={2}
            >
              {subtitle}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardComponent;
