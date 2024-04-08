import { useFormikContext } from "formik";
import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

interface FormImagePickerProps {
  name: string;
}

const FormImagePicker = ({ name }: FormImagePickerProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<{
    [key: string]: string[];
  }>();
  const imageUris = values[name];

  const handleAdd = (uri: string | string[]) => {
    if (uri !== undefined) {
      if (Array.isArray(uri)) {
        setFieldValue(name, [...values[name], ...uri]);
      } else {
        setFieldValue(name, [...values[name], uri]);
      }
    }
  };
  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage
        error={errors[name] as string}
        visible={touched[name] as boolean}
      />
    </>
  );
};

export default FormImagePicker;
