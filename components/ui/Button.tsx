import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import globalStyles from "@/styles/globalStyles";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object; // Optional custom styles
  textStyle?: object; // Optional custom text styles
  disabled?: boolean; // Optional disabled state
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style = {},
  textStyle = {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[globalStyles.button, style, disabled && { opacity: 0.6 }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
