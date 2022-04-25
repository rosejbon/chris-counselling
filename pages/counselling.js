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
          sx={{ maxWidth: 560, borderRadius: "5px" }}
        >
          <Stack gap={3}>
            <Heading>Counselling with me</Heading>
            <Text as="p" sx={{ fontSize: 2 }}>
              Some people find it helpful to talk about what they are thinking
              and feeling to someone outside their situation. As a counsellor it
              is my role to be that person.
            </Text>
            <Text as="p" sx={{ fontSize: 2 }}>
              I won’t tell you what to do, diagnose you, give advice or set
              homework. What I will do is - without judgement - help you:
            </Text>
            <Box as="ul" pl={3}>
              <Text as="li" pb={2} sx={{ fontSize: 2 }}>
                explore and clarify your emotions, thoughts, and behaviours,
              </Text>
              <Text as="li" pb={2} sx={{ fontSize: 2 }}>
                gain an understanding of yourself and your unique circumstances,
              </Text>
              <Text as="li" sx={{ fontSize: 2 }}>
                and consider how all this may be affecting you and the choices
                available to you.
              </Text>
            </Box>
            <Text as="p" sx={{ fontSize: 2 }}>
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
          sx={{ maxWidth: 560, borderRadius: "5px" }}
        >
          <Stack gap={3}>
            <Heading>My experience</Heading>
            <Text as="p" sx={{ fontSize: 2 }}>
              Before providing private counselling I worked for over 7 years as
              a counsellor in the NHS. And before this I spent 7 years in
              voluntary befriending and counselling services.
            </Text>
            <Text as="p" sx={{ fontSize: 2 }}>
              As well as providing counselling for individuals I also provide
              supervision to professional counsellors. Helping other therapists
              to keep their skills up to date and make sure that they work in a
              safe and ethical way.
            </Text>
            <Text as="p" sx={{ fontSize: 2 }}>
              I am accredited member of the British Association of Counselling
              Practitioners. And also have I Psychology degree from Newcastle
              university.
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
              <Text sx={{ fontSize: 2, fontWeight: "bold" }}>Fee:</Text> £45 per
              fifty minute session
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
