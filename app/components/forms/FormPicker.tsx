import { useFormikContext } from "formik";
import React from "react";

import AppPicker, { Category } from "../Picker";
import ErrorMessage from "./ErrorMessage";
import { PickerItemProps } from "../PickerItem";

interface AppFormPickerProps<Item> {
  items: Item[];
  name: string;
  numberOfColumns: number;
  PickerItemComponent: React.ComponentType<PickerItemProps>;
  placeholder: string;
  width: any;
}

const AppFormPicker = ({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}: AppFormPickerProps<Category>) => {
  const { errors, setFieldValue, touched, values } =
    useFormikContext<Category>();
  //const selectedItem = items.find((item) => item.value === values[name]?.value) as Item | undefined
  const selected =
    values[name] !== undefined && values[name] !== null
      ? values[name]
      : undefined;

  const errorsName = !errors[name] ? errors[name] : undefined;
  const touchedName =
    touched[name] !== (undefined && null) ? touched[name] : null;
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={selected}
        width={width}
      />
      <ErrorMessage
        error={errors[name] as string}
        visible={touched[name] as boolean}
      />
    </>
  );
};

export default AppFormPicker;
