import * as ImagePicker from "expo-image-picker";
import { ImagePickerAsset } from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import Screen from "./Screen";
import logger from "../utility/logger";

export default function App() {
  const [images, setImages] = useState<ImagePickerAsset[]>([]);
  useEffect(() => {
    ImagePicker.requestMediaLibraryPermissionsAsync()
      .then((res) => {
        res.canAskAgain = true;
        if (!res.granted)
          alert("You need to enable permisions to acces the library");
      })
      .catch((err) => logger.log(err.message));
  }, []);
  const selectImage = () => {
    ImagePicker.launchImageLibraryAsync({ allowsMultipleSelection: true })
      .then((res) => {
        if (!res.canceled) {
          ImagePicker.MediaTypeOptions.Images;
          setImages([...images, ...res.assets]);
        }
      })
      .catch((err) => logger.log(err.message));
  };

  return (
    <Screen>
      {images &&
        images.map((img) => (
          <Image
            source={{ uri: img.uri }}
            style={{ width: 200, aspectRatio: 1 }}
          ></Image>
        ))}
      <TouchableOpacity
        onPress={selectImage}
        className="w-24 aspect-square bg-lightMedium rounded-lg"
      ></TouchableOpacity>
    </Screen>
  );
}
