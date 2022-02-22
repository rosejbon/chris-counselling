import { Box, Text, Link, Flex } from "@theme-ui/components";
import { Stack } from "./Stack";

export const Footer = () => (
  <Box bg="white">
    <Box
      sx={{
        margin: "auto",
        maxWidth: "900px",
        padding: "1rem",
      }}
    >
      <footer>
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            justifyContent: "space-between",
            alignItems: ["flex-start", "flex-end"],
          }}
        >
          <address>
            <Stack gap={2}>
              <Text as="p">
                <Link variant="bold" href="mailto:jim@rock.com">
                  email@email.com
                </Link>
              </Text>
              <Text as="p">
                <Link variant="bold" href="tel:+123456789">
                  01234 56789
                </Link>
              </Text>
            </Stack>
          </address>
          <Text as="p" pt={[2, 0]}>
            BACP Registration No: 123456
          </Text>
        </Flex>
      </footer>
    </Box>
  </Box>
);
