import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginForm from "@/components/forms/LoginForm";
import { Colors } from "@/Constant/Colors";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to your account</Text>
      {/* Form Section */}
      <LoginForm onLogin={() => console.log("Logged In")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white, // Light background
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 150, // Adjust size as needed
    height: 150, // Adjust size as needed
  },
  title: {
    fontSize: 30, // Larger font for title
    fontWeight: "700", // Bold for emphasis
    color: Colors.light.aispeakBlue, // Use AiSpeakBlue for the title
    textAlign: "center", // Center-align title
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18, // Medium size font for the subtitle
    fontWeight: "400", // Normal weight
    color: Colors.light.aispeakYellow, // AiSpeakYellow color for subtitle
    textAlign: "center", // Center-align subtitle
    marginBottom: 40, // Added margin for space
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.light.aispeakBlue, // Blue background for the button
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600", // Semi-bold text for emphasis
  },
});
