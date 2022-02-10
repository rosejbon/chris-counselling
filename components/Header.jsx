import { Text, Flex, NavLink, Link } from "theme-ui";

export const Header = () => (
  <Flex
    mb={4}
    sx={{
      flexDirection: ["column", "column", "row"],
      justifyContent: "space-between",
      alignItems: ["flex-start", "flex-end", "flex-end"],
    }}
  >
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      {/* TO DO: Make H1, make an image and clickable */}
      <Link variant="home" href="/">
        <Text
          as="h1"
          sx={{
            fontSize: 4,
            fontWeight: "bold",
            textDecoration: "none",
            color: "primary",
          }}
        >
          Chris Davis
        </Text>
        <Text>COUNSELLING</Text>
      </Link>
    </Flex>
    <Flex
      as="nav"
      pt={3}
      sx={{
        width: "100%",
        justifyContent: ["space-between", "space-between", []],
        flexDirection: "column",
        "@media screen and (min-width: 25em)": {
          flexDirection: "row",
        },
      }}
    >
      <NavLink href="counselling" pt={2}>
        Counselling
      </NavLink>
      <NavLink href="supervision" pt={2}>
        Supervision
      </NavLink>
      <NavLink href="about" pt={2}>
        About
      </NavLink>
    </Flex>
  </Flex>
);
