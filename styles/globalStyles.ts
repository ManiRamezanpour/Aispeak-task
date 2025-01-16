import { StyleSheet } from "react-native";
import { Colors } from "@/Constant/Colors"; // Assuming the colors are imported from a file

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.secondary, // Aispeak Blue for title text
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: Colors.light.text, // Dark text for subtitle
    marginBottom: 8,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.light.tint, // Aispeak Blue for button background
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: {
    color: Colors.light.background, // White text for button text
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.light.text, // Dark text color for input border
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    fontSize: 16,
    backgroundColor: Colors.light.background, // White background for input
  },
  errorText: {
    color: Colors.light.error, // Aispeak Blue for error messages
    fontSize: 14,
    marginTop: -5,
    marginBottom: 10,
    // textAlign: "center",
    fontWeight: "semibold",
  },

  // Dark Mode Styles
  containerDark: {
    backgroundColor: Colors.dark.background, // Dark background for dark mode
  },
  titleDark: {
    color: Colors.dark.tint, // Aispeak Yellow for title text in dark mode
  },
  subtitleDark: {
    color: Colors.dark.text, // Light gray text for subtitle in dark mode
  },
  buttonDark: {
    backgroundColor: Colors.dark.tint, // Aispeak Yellow for button background in dark mode
  },
  buttonTextDark: {
    color: Colors.dark.background, // Dark background text for button in dark mode
    fontSize: 16,
    fontWeight: "bold",
  },
  errorTextDark: {
    color: Colors.dark.tint, // Aispeak Yellow for error messages in dark mode
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },
  switchText: {
    fontSize: 16,
    color: Colors.dark.background, // Light gray text in dark mode
    marginLeft: 8,
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});

export default globalStyles;
