export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "'Karla', sans-serif",
    heading: "'Lato', sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    offblack: "#1A1810",
    offwhite: "#f7f1ed",
    white: "#ffffff",
    burntorange: "#AD3D11",
    blue: "#494F7A",
  },
  buttons: {
    primary: {
      color: "white",
      bg: "burntorange",
      fontFamily: "body",
      "&:hover": {
        bg: "blue",
      },
    },
  },
  text: {
    default: {
      color: "text",
      fontSize: 2,
      fontFamily: "body",
      lineHeight: "body",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: 4,
    },
  },
  links: {
    home: {
      textDecoration: "none",
      fontFamily: "heading",
    },
    nav: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      fontFamily: "heading",
      fontSize: [1, 2],
      "&:hover": {
        color: "blue",
      },
    },
    bold: {
      fontWeight: "bold",
      color: "blue",
      fontFamily: "body",
    },
  },
  alerts: {
    primary: {
      color: "offWhite",
      bg: "blue",
    },
    error: {
      color: "offWhite",
      bg: "burntorange",
    },
  },
};
