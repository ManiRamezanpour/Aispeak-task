import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import InputField from "@/components/ui/InputFeild";
import { Colors } from "@/Constant/Colors"; // Assuming custom color palette
import { useRouter } from "expo-router";
import Button from "../ui/Button";
import { useAuth } from "@/hooks/useAuth";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const auth = useAuth();

  const handleSubmit = () => {
    if (!username || !email || !password) {
      setErrorMessage("All fields are required");
      return;
    }
    auth.register(email, username, password);
    setErrorMessage("");
  };

  const handleNavigateToLogin = () => {
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      {/* Input Fields */}
      <InputField
        label="Username"
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Error Message */}
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      {/* Register Button */}
      <Button
        title="Register"
        onPress={handleSubmit}
        style={styles.button}
        textStyle={styles.buttonText}
      />

      {/* Switch to Login Screen */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Already have an account?</Text>
        <TouchableOpacity onPress={handleNavigateToLogin}>
          <Text
            style={[styles.switchText, { color: Colors.light.aispeakBlue }]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25, // Increased horizontal padding for better spacing
    backgroundColor: "#fff", // White background for contrast
    borderRadius: 12, // Slightly larger border-radius for a softer look
    padding: 20, // More padding inside the form
    elevation: 5, // Optional: Add shadow for better separation from the background
  },
  errorText: {
    color: "#D9534F", // Red error text
    fontSize: 16, // Increased font size for better visibility
    marginBottom: 20, // Added margin to give space to the button
    textAlign: "center", // Center-align error message
  },
  button: {
    marginVertical: 12, // More space around the button
    backgroundColor: Colors.light.aispeakBlue, // Blue background for the button
    borderRadius: 8, // Slightly rounded corners
    paddingVertical: 16, // Increased padding for a bigger button
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18, // Larger font size for better readability
    color: "#fff", // White text on the button
    fontWeight: "600", // Semi-bold text for emphasis
  },
  switchContainer: {
    marginTop: 20, // Added more space from the form fields
    flexDirection: "row",
    justifyContent: "center", // Centered the "Already have an account?" text
  },
  switchText: {
    fontSize: 16,
    color: "#666", // Lighter color for the switch text
  },
});
