import { Theme } from "theme-ui";

export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "'Lato', sans-serif",
    heading: "'Roboto Slab', serif;",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#AD3D11",
    secondary: "#494F7A",
    muted: "#f6f6f6",
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      fontFamily: "body",
      "&:hover": {
        bg: "secondary",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
    gray: {
      color: "background",
      bg: "gray",
    },
  },
  text: {
    default: {
      color: "text",
      fontSize: 3,
      fontFamily: "body",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
  },
  links: {
    home: {
      textDecoration: "none",
    },
    nav: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      fontFamily: "body",
    },
  },
};
