import { Box } from "@theme-ui/components";
import { Header } from "./Header";
import { Stack } from "./Stack";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <Box bg="#f7f1ed">
      <Box
        sx={{
          margin: "auto",
          maxWidth: "900px",
          padding: "1rem",
        }}
      >
        <header>
          <Header />
        </header>
        <main>
          <Stack gap={5}>{children}</Stack>
        </main>
      </Box>
      <Footer />
    </Box>
  );
};
