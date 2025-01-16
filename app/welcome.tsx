import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "@/hooks/useAuth"; // Assuming you have an auth hook

const WelcomeScreen = () => {
  const { user, logout } = useAuth(); // Assuming `user` contains the username and email

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user?.username}!</Text>
      <Text style={styles.emailText}>Email: {user?.email}</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Light background color
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  emailText: {
    fontSize: 18,
    color: "#666",
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: "#f44336", // Red button for logout
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  logoutButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

export default WelcomeScreen;
