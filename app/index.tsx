import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"; // For Google and Apple icons
import { Colors } from "@/Constant/Colors"; // Custom colors
import { useRouter } from "expo-router";
import globalStyles from "@/styles/globalStyles";

interface Props {
  navigation: NavigationProp<any>;
}

const IndexScreen: React.FC<Props> = ({ navigation }) => {
  const router = useRouter();
  return (
    <View style={globalStyles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/capybara.png")} // Replace with your logo path
        style={globalStyles.logo}
        resizeMode="contain"
      />

      {/* Title and Subtitle */}
      <Text style={globalStyles.title}>Welcome to AiSpeak</Text>
      <Text style={globalStyles.subtitle}>
        The best platform for learning and growth
      </Text>

      {/* Auth Buttons */}
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => router.push("/register")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Social Login Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={24} color="#DB4437" />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-apple" size={24} color="#000" />
          <Text style={styles.socialButtonText}>Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authButton: {
    backgroundColor: "transparent", // Minimal design, no background
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8, // Added slight border-radius for rounded corners
    borderWidth: 1,
    borderColor: Colors.light.white, // White border
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.white, // White text
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Spaced out in a row
    width: "80%",
    marginTop: 30,
  },
  socialButton: {
    flexDirection: "row", // Aligns icon and text horizontally
    backgroundColor: Colors.light.white, // White background for social buttons
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8, // Added slight border-radius for rounded corners
    borderWidth: 1,
    borderColor: "#ddd", // Light border color for minimal design
    width: "48%", // Make buttons smaller and equal in width
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.light.aispeakBlue, // Matching text color with the app theme
    marginLeft: 10, // Space between icon and text
  },
});

export default IndexScreen;
