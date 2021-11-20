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
                  uploadInstruction: "Upload STIX 2 JSON",
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
                  title: "Convert JSON to STIX 2",
                  body: "Conversion to STIX 2 observable objects",
                  uploadInstruction: "Upload JSON",
                  label: "Paste JSON here",
                  pasteInstruction: "Your JSON goes here",
                });
              }}
            >
              JSON to STIX 2
            </Button>
            <Button
              colorScheme="pink"
              variant="outline"
              onClick={() => {
                onOpen();
                setText({
                  title: "Convert STIX to Native Data Source",
                  body: "Convert STIX to a Native Data source query such as SQL",
                  uploadInstruction: "Upload STIX 2 JSON or STIX 1 XML",
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
                  body: "This doesn't really make sense but is just an example of how to get data form Django",
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
