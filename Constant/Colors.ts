/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primary = "#017cfe"; // Aispeak Blue
const seconday = "#ffbb00"; // Aispeak Yellow

export const Colors = {
  light: {
    aispeakBlue: primary,
    aispeakYellow: seconday,
    white: "#FFFFFF",
    black: "#000000",
    error: "#FF0000",
  },
  dark: {
    text: "#ECEDEE", // Light gray text for dark mode
    background: "#151718", // Dark background
    tint: seconday, // Aispeak Yellow for dark mode
    icon: "#9BA1A6", // Lighter gray icon color
    tabIconDefault: "#9BA1A6", // Default tab icon color (light gray)
    tabIconSelected: seconday, // Selected tab icon color (Aispeak Yellow)
  },
};
