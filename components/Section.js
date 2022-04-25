import { Box, Text, Flex, Grid } from "theme-ui";
import Image from "next/image";

export const Section = ({ children, img, position, alt }) => {
  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: [
          position === "left" ? "column" : "column-reverse",
          "row",
          "row",
        ],
      }}
    >
      {position === "left" && (
        <>
          <Box
            sx={{
              width: ["100%", "100%", "50%"],
            }}
          >
            <Image
              src={img}
              layout="responsive"
              width={550}
              height={360}
              alt={alt}
            />
          </Box>
          <Flex
            bg="white"
            marginLeft={[3, -5, -5]}
            marginRight={[3, 0, 0]}
            marginTop={[-5, 0, 0]}
            sx={{
              borderRadius: "5px",
              zIndex: 1,
              maxWidth: ["100%", "100%", "50%"],
            }}
          >
            {children}
          </Flex>
        </>
      )}
      {position === "right" && (
        <>
          <Flex
            bg="white"
            marginLeft={[3, 0, 0]}
            marginRight={[3, -5, -5]}
            marginTop={[-5, 0, 0]}
            sx={{
              borderRadius: "5px",
              zIndex: "1",
              maxWidth: ["100%", "100%", "50%"],
            }}
          >
            {children}
          </Flex>
          <Box
            sx={{
              width: ["100%", "100%", "50%"],
            }}
          >
            <Image
              src={img}
              layout="responsive"
              width={550}
              height={360}
              alt={alt}
            />
          </Box>
        </>
      )}
    </Flex>
  );
};
