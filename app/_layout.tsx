import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { View, Image, StyleSheet } from "react-native";
import { AuthProvider } from "@/contexts/AuthContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      router.push("/login");
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Prevent rendering until fonts are loaded.
  }

  // Logo Header Component
  const LogoHeader = () => (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/images/capybara.png")} // Update the path to your logo
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <ThemeProvider value={DefaultTheme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen
            name="login"
            options={{
              title: "",
              headerTitle: () => <LogoHeader />, // Replace the title with the logo
              headerStyle: {
                backgroundColor: "#f8f9fa", // Optional: adjust background color
              },
              headerTitleAlign: "center", // Center the logo
            }}
          />
          <Stack.Screen
            name="register"
            options={{
              title: "",
              headerTitle: () => <LogoHeader />,
              headerStyle: {
                backgroundColor: "#f8f9fa", // Optional: adjust background color
              },
              headerTitleAlign: "center",
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150, // Adjust width based on your logo's dimensions
    height: 50, // Adjust height based on your logo's dimensions
  },
});
