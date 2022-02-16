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
    text: "#1A1810",
    background: "#e4f6f2",
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
        color: "secondary",
      },
    },
    bold: {
      fontWeight: "bold",
      color: "secondary",
      fontFamily: "body",
    },
  },
};
