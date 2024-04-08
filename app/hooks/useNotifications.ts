import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import expoPushTokens from "../api/expoPushTokens";
import { useEffect } from "react";
import logger from "../utility/logger";

const useNotifications = (
  notificationListener?: (event: Notifications.Notification) => void
) => {
  const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig?.extra?.eas.projectId,
    })
      .then((token) => {
        if (token) expoPushTokens.register({ pushToken: token.data });
      })
      .catch((err) => logger.log(err));
  };
  useEffect(() => {
    registerForPushNotificationsAsync();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);
};
export default useNotifications;
