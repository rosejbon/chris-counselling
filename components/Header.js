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
      <Link variant="home" href="/">
        <Text
          as="h1"
          sx={{
            fontSize: 4,
            fontWeight: "bold",
            textDecoration: "none",
            color: "primary",
            fontFamily: "heading",
          }}
        >
          Chris Davis <br />
          <Text sx={{ fontFamily: "heading" }}>COUNSELLING</Text>
        </Text>
      </Link>
    </Flex>
    <Flex
      as="nav"
      pt={3}
      sx={{
        width: "100%",
        justifyContent: ["space-between", "space-between", []],
        flexDirection: "column",
        "@media screen and (min-width: 22em)": {
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
      <NavLink href="contact" pt={2}>
        Contact
      </NavLink>
    </Flex>
  </Flex>
);
