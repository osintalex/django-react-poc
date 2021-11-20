import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Gradient } from "react-gradient";

/**
 * Makes some gradient changing intro text for the landing page
 * @returns same as the above!
 */
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
          <Gradient
            gradients={[
              ["#FFFD00", "#9CA2FF"],
              ["#FF47F4", "#6DFF5C"],
              ["lime", "coral"],
              ["magenta", "gold"],
              ["violet", "royalblue"],
            ]}
            property="text"
            angle="30deg"
            className="text"
            duration={3000}
          >
            <Heading fontFamily="body" bgClip="text" size="2xl">
              Convert CTI Formats
            </Heading>
          </Gradient>
        </Box>
      </VStack>
    </>
  );
}
