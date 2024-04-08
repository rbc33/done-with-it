import { RouteProp } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import { FeedNavParamsList } from "../navigaton/FeedNavigator";

interface ListindDetailsScreenProps {
  route: RouteProp<FeedNavParamsList, "ListindDetails">;
}
const ListindDetailsScreen = ({ route }: ListindDetailsScreenProps) => {
  const listing = route.params;

  return (
    <View className="container flex-1 justify-start">
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <Image
          style={{ width: "100%", height: 300, resizeMode: "cover" }}
          tint="light"
          preview={{ uri: listing.images[0].thumbnailUrl }}
          uri={listing.images[0].url}
        />
        <View className="p-2.5">
          <Text className="font-medium text-2xl ml-2.5">{listing.title}</Text>
          <Text className="text-secondary text-xl font-bold my-2.5">
            ${listing.price}
          </Text>
          <View className="my-2.5">
            <ListItem
              image={require("../assets/user.jpg")}
              title="John Doe"
              subTitle="5 Listings"
            />
          </View>
        </View>
        <View className="container">
          <ContactSellerForm listing={listing} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ListindDetailsScreen;
