import { View, Text } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppButton, { AppButtonProps } from "../Button";

interface SubmitButtonProps extends Omit<AppButtonProps, "onPress"> {
  title: string;
  onPress?: () => void;
}

const SubmitButton = ({ title, onPress, ...otherProps }: SubmitButtonProps) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      extraClassName="mt-2.5"
      {...otherProps}
    />
  );
};

export default SubmitButton;
