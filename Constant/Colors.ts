/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#017cfe"; // Aispeak Blue
const tintColorDark = "#ffbb00"; // Aispeak Yellow

export const Colors = {
  light: {
    text: "#11181C", // Default dark text color
    background: "#FFFFFF", // White background
    tint: tintColorLight, // Aispeak Blue
    icon: "#687076", // Light grayish icon color
    tabIconDefault: "#687076", // Default tab icon color (light gray)
    tabIconSelected: tintColorLight, // Selected tab icon color (Aispeak Blue)
  },
  dark: {
    text: "#ECEDEE", // Light gray text for dark mode
    background: "#151718", // Dark background
    tint: tintColorDark, // Aispeak Yellow for dark mode
    icon: "#9BA1A6", // Lighter gray icon color
    tabIconDefault: "#9BA1A6", // Default tab icon color (light gray)
    tabIconSelected: tintColorDark, // Selected tab icon color (Aispeak Yellow)
  },
};
