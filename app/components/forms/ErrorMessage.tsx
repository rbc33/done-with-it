import React from "react";
import { Text, View } from "react-native";
import fontClassName from "../../config/font";

interface ErrorMessageProps {
  error?: string | undefined;
  visible: boolean | undefined;
}

const ErrorMessage = ({ error, visible }: ErrorMessageProps) => {
  if (!visible || !error) return null;
  return (
    <View>
      <Text
        className={
          "text-danger text-xl font-medium self-center " + fontClassName
        }
      >
        {error}
      </Text>
    </View>
  );
};

export default ErrorMessage;
