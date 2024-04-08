import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Alert, Image, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useFormikContext } from "formik";
import logger from "../utility/logger";

interface ImageInputProps {
  imageUri?: string;
  onChangeImage: (uri: string | string[]) => void;
}

const ImageInput = ({ imageUri, onChangeImage }: ImageInputProps) => {
  const { values } = useFormikContext<{ [key: string]: string[] }>();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    ImagePicker.requestMediaLibraryPermissionsAsync()
      .then((res) => {
        res.canAskAgain = true;
        if (!res.granted)
          alert("You need to enable permissions to access the library");
      })
      .catch((err) => logger.log(err.message));
  }, []);

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage([]) },
        { text: "No" },
      ]);
  };

  const selectImage = () => {
    ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    })
      .then((res) => {
        if (!res.canceled) {
          const uris = res.assets.map((asset) => asset.uri);
          setSelectedImages(uris);
          onChangeImage(uris);
        }
      })
      .catch((err) => {
        logger.log(err);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        className="bg-lightMedium border-2 border-lightMedium rounded-xl overflow-hidden  my-1.5 w-[100px] aspect-square"
        // style={{
        //   borderWidth: 2,
        //   borderColor: colors.lightMedium,
        //   borderRadius: 10,
        //   overflow:"hidden",
        //   width: 100,
        //   height: 100,
        //   justifyContent: "center",
        //   alignItems: "center",
        //   marginVertical: 5,
        // }}
      >
        {!imageUri && (
          <View
            className=" bg-lightMedium w-full aspect-square justify-center items-center"
            // style={{
            //   backgroundColor: colors.lightMedium,
            //   width: "100%",
            //   height: "100%",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
          >
            <MaterialCommunityIcons
              name="camera"
              color={colors.dark}
              size={45}
            />
          </View>
        )}
        {imageUri && (
          <Image
            className="w-full aspect-square"
            source={{ uri: imageUri }}
            // style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;
