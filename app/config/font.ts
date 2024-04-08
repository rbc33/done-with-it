import { Platform } from "react-native";

const fontClassName = Platform.select({
  ios: " font-[Avenir] ",
  android: " font-[Roboto] ",
  web: " text-sans ",
});
export default fontClassName;
