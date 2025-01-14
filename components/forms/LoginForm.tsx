import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import InputField from "@/components/ui/InputFeild";
import globalStyles from "@/styles/globalStyles";
import { Colors } from "@/Constant/Colors";
import { useRouter } from "expo-router";
import Button from "../ui/Button";

interface LoginFormProps {
  onLogin: (identifier: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const handleSubmit = () => {
    router.push("/welcome");
    if (!identifier || !password) {
      setErrorMessage("Both fields are required");
      return;
    }
    setErrorMessage("");
    onLogin(identifier, password);
  };

  const handleNavigateToRegister = () => {
    router.push("/register");
  };

  return (
    <View style={globalStyles.container}>
      <InputField
        label="Username or Email"
        placeholder="Enter your username or email"
        value={identifier}
        onChangeText={setIdentifier}
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errorMessage && (
        <Text style={[globalStyles.errorText, { color: Colors.light.tint }]}>
          {errorMessage}
        </Text>
      )}
      <Button
        title="Login"
        onPress={handleSubmit}
        style={{ marginVertical: 10 }}
        textStyle={{ fontSize: 18 }}
      />
      <View style={globalStyles.switchContainer}>
        <Text style={globalStyles.switchText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleNavigateToRegister}>
          <Text
            style={[
              globalStyles.switchText,
              { color: Colors.light.tabIconDefault },
            ]}
          >
            register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
