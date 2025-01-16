import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleSheet,
  Animated,
} from "react-native";
import globalStyles from "@/styles/globalStyles";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object; // Optional custom styles for the button
  textStyle?: object; // Optional custom styles for the text
  disabled?: boolean; // Optional disabled state
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style = {},
  textStyle = {},
  disabled = false,
}) => {
  const [scale] = useState(new Animated.Value(1)); // Start with scale of 1 (original size)

  // Handle press in and out animation
  const handlePressIn = () => {
    if (!disabled) {
      Animated.spring(scale, {
        toValue: 0.95, // Scale down to 95% of the original size
        friction: 3,
        useNativeDriver: true, // Use native driver for better performance
      }).start();
    }
  };

  const handlePressOut = () => {
    if (!disabled) {
      Animated.spring(scale, {
        toValue: 1, // Return to original size
        friction: 3,
        useNativeDriver: true, // Use native driver for better performance
      }).start();
    }
  };

  return (
    <TouchableOpacity
      style={[
        globalStyles.button,
        style,
        disabled && styles.disabledButton, // Add disabled styles
      ]}
      onPress={onPress}
      onPressIn={handlePressIn} // Trigger scale animation on press in
      onPressOut={handlePressOut} // Trigger scale animation on press out
      disabled={disabled}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <Text
          style={[
            globalStyles.buttonText,
            textStyle,
            disabled && styles.disabledText,
          ]}
        >
          {title}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabledButton: {
    opacity: 0.6, // Dim the button when disabled
    backgroundColor: "#ccc", // Optional: change background color when disabled
  },
  disabledText: {
    color: "#888", // Change text color when disabled
  },
});

export default Button;
