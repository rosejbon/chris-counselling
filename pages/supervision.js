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
          sx={{
            maxWidth: 560,
            borderRadius: "5px",
            boxShadow: "0px 0px 7px 1px rgb(0 0 0 / 27%)",
          }}
        >
          <Stack gap={3}>
            <Heading>My approach</Heading>
            <Text as="p">
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
          sx={{
            maxWidth: 560,
            borderRadius: "5px",
            boxShadow: "0px 0px 7px 1px rgb(0 0 0 / 27%)",
          }}
        >
          <Stack gap={3}>
            <Heading>My experience</Heading>
            <Text as="p">
              I have three years’ experience supervising integrative and
              person-centred counsellors offering one- to-one counselling.
            </Text>
            <Heading as="h3">Qualifications</Heading>
            <Box as="ul" pl={3}>
              <Text as="li" pb={2}>
                Counselling (humanistic-integrative) – Advanced Diploma (CPPD,
                London)
              </Text>
              <Text as="li" pb={2}>
                Supervision (integrative) – Diploma (The Grove, London)
              </Text>
              <Text as="li">Psychology – BSc (Newcastle University)</Text>
            </Box>
          </Stack>
        </Box>

        <Box
          as="section"
          bg="white"
          padding={4}
          sx={{
            maxWidth: 560,
            borderRadius: "5px",
            boxShadow: "0px 0px 7px 1px rgb(0 0 0 / 27%)",
          }}
        >
          <Stack gap={3}>
            <Heading>Fees and location</Heading>
            <Text as="p">
              <Text sx={{ fontSize: 2, fontWeight: "bold" }}>Fee:</Text> £55 per
              ninety minute session
            </Text>
            <Text as="p" sx={{ fontWeight: "bold" }}>
              Location:
            </Text>
            <Box as="ul" pl={3}>
              <Text as="li" pb={2}>
                Face to face in Norwich city centre at the Practice Rooms
              </Text>
              <Text as="li" pb={2}>
                Online
              </Text>
            </Box>
            <Text as="p">
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
