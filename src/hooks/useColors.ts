import { useColorScheme } from "react-native";
import { DarkTheme, LightTheme } from "../constants/colors";
import { Theme } from "../constants/colors";



export const useColors = (): Theme => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? DarkTheme : LightTheme;
};