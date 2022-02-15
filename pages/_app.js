import { ThemeProvider } from "@theme-ui/core";
import { theme } from "../theme";
import "../global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
