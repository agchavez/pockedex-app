// 1. Import `createTheme`
import { createTheme } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom values
export const darkTheme  = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
    },
  },
});

export const lightTheme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
    }, // optional
  }
})
