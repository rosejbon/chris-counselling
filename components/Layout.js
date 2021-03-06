import { Box, Flex } from "@theme-ui/components";
import { Header } from "./Header";
import { Stack } from "./Stack";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ borderBottom: "solid", borderColor: "blue" }}>
        <Box
          sx={{
            margin: "auto",
            maxWidth: "900px",
            padding: "1rem",
          }}
        >
          <Header />
        </Box>
      </Box>
      <Flex
        bg="offwhite"
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <Box>
          <Box
            sx={{
              margin: "auto",
              maxWidth: "900px",
              padding: 4,
            }}
          >
            <main>
              <Stack gap={5}>{children}</Stack>
            </main>
          </Box>
        </Box>
        <Box bg="white" sx={{ borderTop: "solid", borderColor: "blue" }}>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};
