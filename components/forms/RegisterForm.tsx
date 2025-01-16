import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import InputField from "@/components/ui/InputFeild";
import globalStyles from "@/styles/globalStyles";
import { Colors } from "@/Constant/Colors";
import { useRouter } from "expo-router";
import Button from "../ui/Button";
import { useAuth } from "@/hooks/useAuth";

interface RegisterFormProps {
  onRegister: (username: string, email: string, password: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter(); // to change routes after functionality
  const auth = useAuth(); // use auth hook to control user authentication
  const handleSubmit = () => {
    if (!username || !email || !password) {
      setErrorMessage("All fields are required");
      return;
    }
    auth.register(email, username, password);
    setErrorMessage("");
    onRegister(username, email, password);
  };
  const handleNavigateToLogin = () => {
    router.push("/login");
  };
  return (
    <View>
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
      {errorMessage && (
        <Text style={globalStyles.errorText}>{errorMessage}</Text>
      )}
      <Button
        title="Register"
        onPress={handleSubmit}
        style={{ marginVertical: 10 }}
        textStyle={{ fontSize: 18 }}
      />
      <View style={globalStyles.switchContainer}>
        <Text style={globalStyles.switchText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleNavigateToLogin}>
          <Text style={[globalStyles.switchText, { color: Colors.light.tint }]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;
