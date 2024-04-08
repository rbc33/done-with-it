import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import logger from "./logger";

interface StoreProps {
  key: string;
  value: any;
}
type Item = {
  value: any;
  timaStamp: dayjs.Dayjs;
};
const prefix = "cache";
const expiryInMinutes = 5;

const store = async ({ key, value }: StoreProps) => {
  try {
    const item: Item = {
      value,
      timaStamp: dayjs(),
    };
    AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    logger.log(error);
  }
};
const isExpired = (item: Item) => {
  const storedTime = dayjs(item.timaStamp);
  const now = dayjs();
  return now.diff(storedTime, "minute") > expiryInMinutes;
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    if (value) {
      const item: Item = JSON.parse(value);
      if (isExpired(item)) {
        // Breaking Command Query Separation (CQS) make sense here for saving space
        await AsyncStorage.removeItem(prefix + key);
        return null;
      }
      return item.value;
    }
  } catch (error) {
    logger.log(error);
  }
};
export default { store, get };
