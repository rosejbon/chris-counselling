import { Box, Text, Flex, Heading } from "theme-ui";

import { Layout } from "../components/Layout";
import { Stack } from "../components/Stack";

const Counselling = () => (
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
            <Heading>Counselling with me</Heading>
            <Text as="p">
              Some people find it helpful to talk through their difficulties
              with someone who is outside of their situation. As a counsellor it
              is my role to be that person.
            </Text>
            <Text as="p">
              I won’t tell you what to do, diagnose you, give advice or set
              homework. What I will do is - without judgement - help you:
            </Text>
            <Box as="ul" pl={3}>
              <Text as="li" pb={2}>
                explore and clarify your emotions, thoughts, and behaviours,
              </Text>
              <Text as="li" pb={2}>
                gain an understanding of yourself and your unique circumstances,
              </Text>
              <Text as="li">
                and consider how all this may be affecting you and the choices
                available to you.
              </Text>
            </Box>
            <Text as="p">
              My counselling is open-ended. This means there is no set end date
              and no obligation for you continue counselling if you decide to
              finish.
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
              Before providing private counselling I worked for over 7 years as
              a counsellor in the NHS and with Mind. And before this I spent 7
              years in voluntary befriending and counselling services.
            </Text>
            <Text as="p">
              As well as providing counselling for individuals I also provide
              supervision to professional counsellors. This entails helping
              counsellors continually develop and reflect on their practice to
              ensure they work in a safe and ethical way.
            </Text>
            <Text as="p">
              I am an accredited member of the British Association of
              Counselling and Psychotherapy (BACP).
            </Text>
            <Heading as="h3" sx={{ fontSize: 3 }}>
              Qualifications
            </Heading>
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
              <Text sx={{ fontWeight: "bold" }}>Fee:</Text> £45 per fifty minute
              session
            </Text>
            <Text as="p" sx={{ fontSize: 2, fontWeight: "bold" }}>
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
              Please note I only offer one-to-one counselling to adults (18+). I
              do not work with children or couples.
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  </Layout>
);

export default Counselling;
