import { Text, Flex, NavLink, Link, Box } from "theme-ui";
import { useRouter } from "next/router";

export const Header = () => {
  const currentPage = useRouter().pathname;                                                                       

  return (
    <header>
      <Flex
        bg="white"
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
                color: "offblack",
                fontFamily: "heading",
              }}
            >
              Chris Davis <br />
              <Text sx={{ fontFamily: "heading", color: "burntorange" }}>
                COUNSELLING
              </Text>
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
          <NavLink
            href="counselling"
            pt={2}
            sx={{
              color: currentPage.includes("counselling") ? "burntorange" : null,
            }}
          >
            Counselling
          </NavLink>
          <NavLink
            href="supervision"
            pt={2}
            sx={{
              color: currentPage.includes("supervision") ? "burntorange" : null,
            }}
          >
            Supervision
          </NavLink>
          <NavLink
            href="contact"
            pt={2}
            sx={{
              color: currentPage.includes("contact") ? "burntorange" : null,
            }}
          >
            Contact
          </NavLink>
        </Flex>
      </Flex>
    </header>
  );
};
