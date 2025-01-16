import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import InputField from "@/components/ui/InputFeild";
import { Colors } from "@/Constant/Colors";
import { useRouter } from "expo-router";
import Button from "../ui/Button";
import { useAuth } from "@/hooks/useAuth";

interface LoginFormProps {
  onLogin: (identifier: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const auth = useAuth();

  const handleSubmit = () => {
    if (!identifier || !password) {
      setErrorMessage("Both fields are required");
      return;
    }
    auth.login(identifier, password);
    onLogin(identifier, password);
  };

  const handleNavigateToRegister = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
      <InputField
        label="Username or Email"
        placeholder="Enter your username or email"
        value={identifier}
        onChangeText={setIdentifier}
        containerStyle={styles.inputContainer}
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={styles.inputContainer}
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      <Button
        title="Login"
        onPress={handleSubmit}
        style={styles.button}
        textStyle={styles.buttonText}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleNavigateToRegister}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff", // White background for contrast
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    elevation: 5,
    paddingTop: 40,
    width: "100%",
  },
  inputContainer: {
    marginBottom: 20, // Increased space between inputs
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: "100%",
    elevation: 3, // Optional: Add shadow to inputs for better visibility
  },
  errorText: {
    color: Colors.light.error,
    fontSize: 16,
    marginBottom: 20, // Added more space between error and button
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.light.aispeakBlue,
    paddingVertical: 16,
    borderRadius: 8,
    width: "100%",
    marginVertical: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  switchText: {
    fontSize: 16,
    color: Colors.light.aispeakYellow,
  },
  registerText: {
    fontSize: 16,
    color: Colors.light.aispeakYellow,
    marginLeft: 5,
    fontWeight: "600",
  },
});
