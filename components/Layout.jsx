import { Box } from "@theme-ui/components";
import { Header } from "./Header";
import { Stack } from "./Stack";

export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        margin: "auto",
        maxWidth: "900px",
        padding: "1rem",
      }}
    >
      <Header />
      <Stack gap={5}>{children}</Stack>
    </Box>
  );
};
