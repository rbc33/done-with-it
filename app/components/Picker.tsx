import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styled } from "nativewind";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Text,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import fontClassName from "../config/font";
import defaultStyles from "../config/styles";
import PickerItem, { PickerItemProps } from "./PickerItem";
import Screen from "./Screen";

export interface Category {
  value: number;
  label: string;
  backgroundColor: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  [key: string]: any;
}

interface AppTextInputProps extends TextInputProps {
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  items: Category[];
  className?: string;
  fontClass?: string;
  onSelectItem: (item: Category) => void;
  numberOfColumns: number;
  placeholder?: string;
  PickerItemComponent: React.ComponentType<PickerItemProps>;
  selectedItem?: Category;
  width: any;
}

const AppPicker = ({
  icon,
  items,
  selectedItem,
  onSelectItem,
  numberOfColumns,
  PickerItemComponent = PickerItem,
  placeholder,
  className = " text-xl text-black  flex-1",
  fontClass = fontClassName,
  width = "100%",
}: AppTextInputProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState<number>(0);
  const StyledIcon = styled(MaterialCommunityIcons);
  let defaultClassName = fontClass + className;

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View className="container px-2">
          <View
            style={{ width }}
            className="container bg-white dark:bg-slate-400 rounded-xl flex-row  p-4 ms-2.5 me-2.5 mt-1.5 mb-2.5 overflow-hidde"
          >
            {icon && (
              <StyledIcon
                name={icon}
                size={22}
                color={defaultStyles.colors.medium}
                className="mr-2.5"
              />
            )}
            {selectedItem ? (
              <Text className={defaultClassName}>{selectedItem.label}</Text>
            ) : (
              <Text className={defaultClassName}>{placeholder}</Text>
            )}
            <StyledIcon
              name="chevron-double-down"
              size={30}
              color={defaultStyles.colors.dark}
              className="self-end place-self-end"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setShowModal(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  onSelectItem(item);
                  setShowModal(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;
