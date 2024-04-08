import { ApiResponse } from "apisauce";
import { LocationObject } from "expo-location";
import { PostListingData } from "../screens/ListingEditScreen";
import { ListingItem } from "../screens/ListingsScreen";
import apiClient from "./client";
import logger from "../utility/logger";

global.SharedArrayBuffer;

export interface PostListingItem extends PostListingData {
  location: LocationObject | null | undefined;
}

const getListings = (): Promise<ListingsResponse> => apiClient.get(endpoint);

export type ListingsResponse = ApiResponse<ListingItem[]>;

const endpoint = "/listings";

export const addListing = async (
  listing: PostListingItem,
  onUploadProgress: (progress: any) => void
) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  if (listing.category)
    data.append("categoryId", listing.category.value.toString());
  else data.append("categoryId", "");
  data.append("description", listing.description);

  listing.images.forEach((image, index) => {
    const imageArray = {
      name: `image${index}`,
      type: "image/jpeg",
      uri: image,
    };
    data.append("images", imageArray as any);
  });

  if (listing.location?.coords.latitude && listing.location?.coords.longitude) {
    const locationData = {
      latitude: listing.location.coords.latitude,
      longitude: listing.location.coords.longitude,
    };
    data.append("location", JSON.stringify(locationData));
  }
  const res = await apiClient.post(endpoint, data, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: (progress) => {
      if (progress.loaded && progress.total) {
        onUploadProgress(progress.loaded / progress.total);
      }
    },
  });
  if (!res.ok) {
    logger.log(res.problem);
    logger.log(data);
    logger.log(res.originalError);
  }
  return res;
};

export default {
  addListing,
  getListings,
};
