import { Box, Text, Link, Flex } from "@theme-ui/components";
import { Stack } from "./Stack";

import Image from "next/image";

export const Footer = () => (
  <footer>
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: "900px",
        margin: "auto",
        padding: "1rem",
        alignItems: "centre",
        "@media screen and (min-width: 30em)": {
          flexDirection: "row",
        },
      }}
    >
      <address>
        <Stack gap={2}>
          <Link
            variant="bold"
            pt={2}
            href="mailto:chris@cdaviscounselling.co.uk"
          >
            chris@cdaviscounselling.co.uk
          </Link>

          <Link variant="bold" href="tel:+4474589853029">
            07458 985302
          </Link>
        </Stack>
      </address>
      <Box pt={2} sx={{ width: "160px" }}>
        <Image
          src="/bacp-logo.png"
          layout="responsive"
          width={2072}
          height={921}
          alt="Registered BACP member 162095 logo."
        />
      </Box>
    </Flex>
  </footer>
);
