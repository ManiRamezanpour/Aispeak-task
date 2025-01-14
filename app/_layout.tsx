import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Image } from "expo-image";

import { useColorScheme } from "@/hooks/useColorScheme";
import globalStyles from "@/styles/globalStyles";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Image
        style={globalStyles.image}
        source="/assets/images/capybara.png"
        placeholder="fsdf"
        contentFit="cover"
        transition={1000}
      />
      <Stack initialRouteName="login">
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="register" options={{ title: "Register" }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});
