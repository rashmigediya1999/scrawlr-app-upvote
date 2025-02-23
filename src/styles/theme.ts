import { Theme } from "../types";

export const theme: Theme = {
  colors: {
    primary: "#253CF2",
    secondary: "#343A40",
    background: "#F5F5F5",
    surface: "#FFFFFF",
    text: {
      primary: "#1A1A1A",
      secondary: "#666666",
    },
    upvote: {
      default: {
        background: "#F4F6F8",
        arrow: "#343A40",
      },
      selected: {
        background: "#E5E8FD",
        arrow: "#253CF2",
      },
    },
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  transitions: {
    default: "all 0.2s ease-in-out",
  },
};
