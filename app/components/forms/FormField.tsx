import { useFormikContext } from "formik";
import React from "react";
import AppTextInput, { AppTextInputProps } from "../TextInput";
import ErrorMessage from "./ErrorMessage";

interface AppFormFieldProps extends AppTextInputProps {
  name: string;
}

const AppFormField = ({ name, width, ...otherProps }: AppFormFieldProps) => {
  const { setFieldValue, setFieldTouched, touched, errors, values } =
    useFormikContext<{
      [key: string]: string;
    }>();

  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default AppFormField;
