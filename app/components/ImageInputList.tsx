import React, { useRef } from "react";
import { ScrollView, View } from "react-native";
import ImageInput from "./ImageInput";

interface ImageInputListProps {
  imageUris: string[];
  onRemoveImage: (uri: string) => void;
  onAddImage: (uri: string[] | string) => void;
}

function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: ImageInputListProps) {
  const scrollView = useRef<ScrollView>(null);

  return (
    <View className="flex-row">
      <ScrollView
        // className="bg-yellow-300"
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        <View className="flex-row ml-1.5">
          {imageUris &&
            imageUris.map((uri) => (
              <View key={uri} className="mr-1.5">
                <ImageInput
                  imageUri={uri}
                  onChangeImage={() => onRemoveImage(uri)}
                />
              </View>
            ))}
        </View>
        <View className="">
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

export default ImageInputList;
