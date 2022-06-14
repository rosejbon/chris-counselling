import React from "react";

import { Layout } from "../components/Layout";
import { Stack } from "../components/Stack";
import { Box, Flex, Heading, Text, Link } from "theme-ui";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Contact = () => {
  const google = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuUQs0ODj2UcR2yBmYhkI04M&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;

  return (
    <Layout>
      <Flex as="article" sx={{ justifyContent: "center" }}>
        <Stack gap={4}>
          <Box
            as="section"
            bg="white"
            padding={4}
            sx={{ maxWidth: 560, borderRadius: "5px" }}
          >
            <Stack gap={3}>
              <Heading>Get in touch</Heading>
              <Text as="p" sx={{ fontSize: 2 }}>
                If you would like to know more or book an appointment get in
                touch.
              </Text>
              <Text as="p" sx={{ fontSize: 2 }}>
                I offer a free 15-30 minute telephone conversation to discuss
                whether I may be of help to you.
              </Text>
              <address>
                <Stack gap={3}>
                  <Link
                    variant="bold"
                    pt={2}
                    href="mailto:chris@cdaviscounselling.co.uk"
                  >
                    chris@cdaviscounselling.co.uk
                  </Link>

                  <Link variant="bold" href="tel:+447458985302">
                    07458 985302
                  </Link>
                </Stack>
              </address>
            </Stack>
          </Box>
          <Box
            as="section"
            bg="white"
            padding={4}
            sx={{ maxWidth: 560, borderRadius: "5px" }}
          >
            <Stack gap={4}>
              <Heading>Where I am based</Heading>
              <Text as="p" sx={{ fontSize: 2 }}>
                I work out of the Practice Rooms in Norwich. But I also offer
                online sessions.
              </Text>
              <iframe
                width="100%"
                height="450"
                loading="lazy"
                allowFullScreen
                src={google}
              />
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Contact;
