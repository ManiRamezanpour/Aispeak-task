import { Colors } from "@/Constant/Colors";
import React, { useRef } from "react";
import {
  Image,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

const LogoHeader: React.FC<{ isError?: boolean }> = ({ isError }) => {
  const bounceAnim = useRef(new Animated.Value(1)).current; // Scale for bounce
  const rotateAnim = useRef(new Animated.Value(0)).current; // Rotation for wave

  // Bounce Animation
  const handleBounce = () => {
    Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: 1.2, // Scale up
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 1, // Back to normal
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Wave Animation (triggered on error)
  React.useEffect(() => {
    if (isError) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotateAnim, {
            toValue: 1, // Rotate slightly right
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(rotateAnim, {
            toValue: -1, // Rotate slightly left
            duration: 100,
            useNativeDriver: true,
          }),
        ])
      ).start();

      // Stop the animation after a short delay
      const timeout = setTimeout(() => {
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isError]);

  const rotation = rotateAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-10deg", "10deg"],
  });

  return (
    <TouchableWithoutFeedback onPress={handleBounce}>
      <Animated.View
        style={[
          styles.logoContainer,
          { transform: [{ scale: bounceAnim }, { rotate: rotation }] },
        ]}
      >
        <Image
          source={require("../../assets/images/capybara.png")} // Update the path to your logo
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150, // Adjust width based on your logo's dimensions
    height: 50, // Adjust height based on your logo's dimensions
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.aispeakYellow, // Adjust color to match your theme
    marginTop: 8, // Add some spacing below the logo
  },
});
