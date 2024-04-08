import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";
import useAuth from "../auth/useAuth";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import { colors } from "../config/colors";
import {
  AccountNav,
  AccountNavParamsList,
} from "../navigaton/AccountNavigator";

interface menuItemsProps {
  title: string;
  icon: {
    name: React.ComponentProps<typeof Icon>["name"];
    backgroundColor: string;
  };
  targetScreen?: keyof AccountNavParamsList;
}

const menuItems: menuItemsProps[] = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = () => {
  const navigation = useNavigation<AccountNav>();
  const { user, logOut } = useAuth();
  const handleNavigation = (targetScreen?: keyof AccountNavParamsList) => {
    if (targetScreen && typeof targetScreen === "string") {
      navigation.navigate(targetScreen);
    }
  };

  return (
    <Screen>
      <View className="my-[20px]">
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/richard.jpg")}
        />
      </View>
      <View className="my-[20px]">
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => handleNavigation(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon
            name="logout"
            backgroundColor={colors.terciary}
            iconColor="gray"
          />
        }
        onPress={logOut}
      />
    </Screen>
  );
};

export default AccountScreen;
