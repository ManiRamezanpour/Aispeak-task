import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RegisterForm from "@/components/forms/RegisterForm";
import { Colors } from "@/Constant/Colors"; // Custom colors

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      {/* Title and Subtitle */}
      <Text style={styles.title}>Join the AiSpeak Community</Text>
      <Text style={styles.subtitle}>
        Unlock your potential with the best learning platform.
      </Text>

      <RegisterForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center", // Centers the content vertically
    backgroundColor: "#fff", // White background for a clean look
  },
  logo: {
    alignSelf: "center",
    width: 200, // Adjust the size of the logo
    height: 120,
    marginBottom: 20,
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
});
