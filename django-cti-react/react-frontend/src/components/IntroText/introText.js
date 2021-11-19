import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";

export default function IntroText() {
  return (
    <>
      <VStack
        spacing={8}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box>
          <Heading
            fontFamily="body"
            bgClip="text"
            size="2xl"
            bgGradient="linear(to-r, green.200, pink.500)"
          >
            Convert CTI Formats
          </Heading>
        </Box>
      </VStack>
    </>
  );
}
