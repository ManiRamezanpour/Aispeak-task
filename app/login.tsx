import LoginForm from "@/components/forms/LoginForm";
import globalStyles from "@/styles/globalStyles";
import { View, Text } from "react-native";

export default function LoginScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
      <LoginForm onLogin={() => console.log("Fsdfds")} />
    </View>
  );
}
