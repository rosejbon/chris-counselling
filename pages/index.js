import Head from "next/head";
import { Box, Text, Heading } from "theme-ui";
import { Layout } from "../components/Layout";
import { Section } from "../components/Section";
import { Stack } from "../components/Stack";
import Button from "../components/Button";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Chris Davis Counselling</title>
        <meta
          name="description"
          content="Christopher Davis counselling and supervision"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Section
          img={"/chris.jpg"}
          position={"left"}
          alt={"photograph of Chris Davis."}
        >
          <Box p={3}>
            <section>
              <Stack gap={3}>
                <Text as="p" sx={{ fontSize: 3 }}>
                  I am a professionally accredited counsellor based in Norwich
                  with seven years&#x27; experience. As well as providing
                  counselling for individuals I also provide supervision for
                  professional counsellors.
                </Text>
                {/* <Button href="contact">Book a session</Button> */}
              </Stack>
            </section>
          </Box>
        </Section>

        <Section
          img={"/norwich-at-night.jpg"}
          position={"right"}
          alt={"Photograph of Norwich at night."}
        >
          <Box p={3}>
            <section>
              <Stack gap={3}>
                <Heading as="h2" variant="heading">
                  Counselling
                </Heading>
                <Text as="p" sx={{ fontSize: 2 }}>
                  I offer one-to-one, open-ended counselling in person and
                  online.
                </Text>
                <Button href="counselling">
                  Find out about how I can help you
                </Button>
              </Stack>
            </section>
          </Box>
        </Section>
        <Section
          img={"/norwich.jpg"}
          position={"left"}
          alt={"Photograph of Norwich in spring time."}
        >
          <Box p={3}>
            <section>
              <Stack gap={3}>
                <Heading as="h2" variant="heading">
                  Supervision
                </Heading>
                <Text as="p" sx={{ fontSize: 2 }}>
                  I provide one-to-one supervision for qualified counsellors.
                </Text>
                <Button href="supervision">
                  Learn about my supervision process
                </Button>
              </Stack>
            </section>
          </Box>
        </Section>
      </Layout>
    </>
  );
}

// TO DO: background colour #F3F3F0, change button color to #42779b, add footer, change find out more button to link
