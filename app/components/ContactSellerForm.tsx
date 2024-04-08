import React from "react";
import { Alert, Keyboard, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "./forms";
import messagesApi from "../api/messages";
import { ListingItem } from "../screens/ListingsScreen";
import useNotifications from "../hooks/useNotifications";
import logger from "../utility/logger";
interface ContactSellerFormProps {
  listing: ListingItem;
}
interface Messagesubmit {
  message: string;
}
const showNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Awesome!",
      body: "Your message was sent to the seller.",
    },
    trigger: null,
  });
};
const ContactSellerForm = ({ listing }: ContactSellerFormProps) => {
  const handleSubmit = async (
    { message }: Messagesubmit,
    { resetForm }: any
  ): Promise<any | null> => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      logger.log(result);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }
    resetForm();
    showNotification();
  };

  return (
    <View className="w-full h-50 flex-1container ">
      <View>
        <Form
          initialValues={{ message: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View className="w-full mb-2.5 ">
            {/* <View style={{ width: "80%", marginBottom: 20 }}> */}
            <FormField
              maxLength={255}
              multiline
              name="message"
              numberOfLines={3}
              placeholder="Message..."
            />
          </View>
          {/* </View> */}
          <SubmitButton title="Contact Seller" />
        </Form>
      </View>
    </View>
  );
};

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
