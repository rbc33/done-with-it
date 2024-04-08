import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    prymary: colors.primary,
    background: colors.light,
  },
  height: 60,
};
