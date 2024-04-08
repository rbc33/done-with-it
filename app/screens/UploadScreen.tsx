import LottieView from "lottie-react-native";
import React from "react";
import { Modal, View } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";

interface UploadScreenProps {
  progress: number;
  visible: boolean;
  onDone: () => void;
}

const UploadScreen = ({
  progress,
  onDone,
  visible = false,
}: UploadScreenProps) => {
  return (
    <Modal visible={visible}>
      <View className="flex-1 items-center justify-center">
        {progress < 1 ? (
          <Progress.Bar
            width={200}
            progress={progress}
            color={colors.primary}
          />
        ) : (
          <LottieView
            style={{ width: 150, aspectRatio: 1 }}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;
