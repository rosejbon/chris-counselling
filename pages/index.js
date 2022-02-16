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
        <title>C T Davis Counselling</title>
        <meta
          name="description"
          content="Christopher Davis counselling and supervision"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Section
          img={"/norwich-at-night.jpg"}
          position={"left"}
          alt={"Image of person"}
        >
          <Text p={3}>
            A short sentence or two on what you can do for them. This should be
            in active voice.
          </Text>
        </Section>

        <Button href="contact">Book a session</Button>

        <Section
          img={"/norwich-at-night.jpg"}
          position={"right"}
          alt={"Image of Norwich"}
        >
          <Box p={3}>
            <section>
              <Stack>
                <Heading as="h2" variant="heading">
                  Counselling
                </Heading>
                <Text as="p" sx={{ fontSize: 2 }}>
                  A short sentence or two on what you can do for them. This
                  should be in active voice.
                </Text>
                <Button href="counselling">Find out more</Button>
              </Stack>
            </section>
          </Box>
        </Section>
        <Section
          img={"/norwich-at-night.jpg"}
          position={"left"}
          alt={"Image of Norwich"}
        >
          <Box p={3}>
            <section>
              <Stack>
                <Heading as="h2" variant="heading">
                  Supervision
                </Heading>
                <Text sx={{ fontSize: 2 }}>
                  A short sentence or two on what you can do for them. This
                  should be in active voice.
                </Text>
                <Button href="supervision">Find out more</Button>
              </Stack>
            </section>
          </Box>
        </Section>
      </Layout>
    </>
  );
}

// TO DO: background colour #F3F3F0, change button color to #42779b, add footer, change find out more button to link
