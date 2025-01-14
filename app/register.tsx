import RegisterForm from "@/components/forms/RegisterForm";
import { View, Text, StyleSheet } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <RegisterForm onRegister={() => console.log("Res")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
