import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import listingsApi from "../api/listings";
import Button from "../components/Button";
import CardComponent from "../components/CardComponent";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import { FeedNav } from "../navigaton/FeedNavigator";
import useApi from "../hooks/useApi";

export interface ListingItem {
  id: number;
  title: string;
  images: {
    url: string;
    thumbnailUrl: string;
  }[];
  price: number;
  categoryId: number;
  userId: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

const ListingsScreen = () => {
  const navigation = useNavigation<FeedNav>();
  const [refreshing, setRefreshing] = useState(false);

  const {
    data,
    error,
    isloading,
    request: loadlistings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadlistings();
    setRefreshing(false);
  }, []);

  return (
    <Screen>
      {/* <ActivityIndicator visible={isloading} /> */}
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadlistings}></Button>
        </>
      )}
      <FlatList
        data={data}
        keyExtractor={(listing) => listing.id.toString()}
        // onScrollBeginDrag={() => setRefreshing(true)}
        refreshing={refreshing}
        onRefresh={() => loadlistings()}
        overScrollMode="never"
        renderItem={({ item }) => (
          <CardComponent
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate("ListindDetails", item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;
