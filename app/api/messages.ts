import apiClient from "./client";

const send = (message: string, listingId: number): Promise<any> | null =>
  apiClient.post("/messages", {
    message,
    listingId,
  });
export default {
  send,
};
