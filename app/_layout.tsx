import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";
import { AuthProvider } from "@/contexts/AuthContext";
import LogoHeader from "@/components/ui/LogoHeader";
import { Colors } from "@/Constant/Colors";
import React from "react";

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
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <AuthProvider>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <Stack initialRouteName="index">
              <Stack.Screen
                name="index"
                options={{
                  headerTitle: () => <LogoHeader />,

                  navigationBarTranslucent: true,
                  navigationBarColor: Colors.light.aispeakYellow,
                  headerTitleAlign: "center",
                }}
              />
              <Stack.Screen
                name="login"
                options={{
                  headerTitle: () => <LogoHeader />,
                  headerStyle: {
                    backgroundColor: Colors.light.aispeakBlue,
                  },
                  navigationBarColor: Colors.light.aispeakYellow,
                  navigationBarTranslucent: true,
                  headerTitleAlign: "center",
                }}
              />
              <Stack.Screen
                name="register"
                options={{
                  headerTitle: () => <LogoHeader />,
                  headerStyle: {
                    backgroundColor: Colors.light.aispeakBlue,
                  },
                  headerTitleAlign: "center",
                }}
              />
            </Stack>
          </ScrollView>
        </KeyboardAvoidingView>
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
    width: 150,
    height: 50,
  },
});
