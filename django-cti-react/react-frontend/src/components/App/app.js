import React, { useState } from "react";
import {
  Center,
  VStack,
  Grid,
  Stack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ColourModeSwitcher } from "../ColourModeSwitcher/colourModeSwitcher.js";
import IntroText from "../IntroText/introText.js";
import GeneralConversionModal from "../Modal/modal.js";

/**
 * The App! Starts here with different buttons to trigger conversion formats, which then go to modals
 * and then onto popovers before communciating with the backend
 * @returns App Component!
 */
export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState({
    title: "",
    body: "",
    uploadInstruction: "",
  });
  return (
    <Center textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColourModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <IntroText />
          <Stack>
            <Button
              colorScheme="pink"
              variant="outline"
              onClick={() => {
                onOpen();
                setText({
                  title: "Convert STIX 2 to elasticsearch",
                  body: "Convert STIX 2 JSON to elasticsearch",
                  uploadInstruction: "Let's go!",
                  label: "Paste STIX 2 data here",
                  pasteInstruction: "Your STIX 2 JSON data goes here",
                });
              }}
            >
              STIX 2 to elasticsearch
            </Button>
            <Button
              colorScheme="pink"
              variant="outline"
              onClick={() => {
                onOpen();
                setText({
                  title: "Convert STIX to SQL",
                  body: "Convert STIX to a a MySQL query",
                  uploadInstruction: "Let's go!",
                  label: "Paste STIX here",
                  pasteInstruction: "Your STIX 1 or STIX 2 XML goes here",
                });
              }}
            >
              STIX to SQL
            </Button>
            <Button
              colorScheme="pink"
              variant="outline"
              onClick={() => {
                onOpen();
                setText({
                  title: "Download Some JSON",
                  body: "This is just an example of how to get some data from Django",
                  uploadInstruction: "Download",
                });
              }}
            >
              Example STIX data
            </Button>
            <GeneralConversionModal
              isOpen={isOpen}
              onClose={onClose}
              title={text.title}
              body={text.body}
              uploadInstruction={text.uploadInstruction}
              requestType={text.requestType}
              label={text.label}
              pasteInstruction={text.pasteInstruction}
            />
          </Stack>
        </VStack>
      </Grid>
    </Center>
  );
}
