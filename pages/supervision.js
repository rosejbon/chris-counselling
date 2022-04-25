import { Box, Text, Flex, Heading } from "theme-ui";

import { Layout } from "../components/Layout";
import { Stack } from "../components/Stack";

const Supervision = () => (
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
            <Heading>My approach</Heading>
            <Text as="p" sx={{ fontSize: 2 }}>
              My supervision approach may appeal to therapists interested in
              exploring and critically reflecting upon the assumptions and ideas
              underlying their practice.
            </Text>
          </Stack>
        </Box>

        <Box
          as="section"
          bg="white"
          padding={4}
          sx={{ maxWidth: 560, borderRadius: "5px" }}
        >
          <Stack gap={3}>
            <Heading>My experience</Heading>
            <Text as="p" sx={{ fontSize: 2 }}>
              I have three years’ experience supervising integrative and
              person-centred counsellors offering one- to-one counselling.
            </Text>
            <Heading as="h3" sx={{ fontSize: 3 }}>
              Qualifications
            </Heading>
            <Box as="ul" pl={3}>
              <Text as="li" pb={2} sx={{ fontSize: 2 }}>
                Counselling (humanistic-integrative) – Advanced Diploma (CPPD,
                London)
              </Text>
              <Text as="li" pb={2} sx={{ fontSize: 2 }}>
                Supervision (integrative) – Diploma (The Grove, London)
              </Text>
              <Text as="li" sx={{ fontSize: 2 }}>
                Psychology – BSc (Newcastle University)
              </Text>
            </Box>
          </Stack>
        </Box>

        <Box
          as="section"
          bg="white"
          padding={4}
          sx={{ maxWidth: 560, borderRadius: "5px" }}
        >
          <Stack gap={3}>
            <Heading>Fees and location</Heading>
            <Text as="p" sx={{ fontSize: 2 }}>
              <Text sx={{ fontSize: 2, fontWeight: "bold" }}>Fee:</Text> £55 per
              ninety minute session
            </Text>
            <Text as="p" sx={{ fontSize: 2, fontWeight: "bold" }}>
              Location:
            </Text>
            <Box as="ul" pl={3}>
              <Text as="li" pb={2} sx={{ fontSize: 2 }}>
                Face to face - Norwich City centre
              </Text>
              <Text as="li" pb={2} sx={{ fontSize: 2 }}>
                Online - over Zoom
              </Text>
            </Box>
            <Text as="p" sx={{ fontSize: 2 }}>
              Please note I do not offer group supervision or
              couples-counselling supervision.
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  </Layout>
);

export default Supervision;
