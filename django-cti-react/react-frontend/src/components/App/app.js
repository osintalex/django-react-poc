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
                  title: "Convert STIX to STIX 2",
                  body: "Conversion",
                  uploadInstruction: "Upload STIX XML",
                  requestType: "post"
                });
              }}
            >
              STIX to STIX 2
            </Button>
            <Button colorScheme="pink" variant="outline" onClick={() => {
                onOpen();
                setText({
                  title: "Convert STIX2 to elasticsearch",
                  body: "Conversion",
                  uploadInstruction: "Upload STIX XML",
                  requestType: "post"
                });
              }}
              >
              STIX 2 to elasticsearch
            </Button>
            <Button colorScheme="pink" variant="outline" onClick={() => {
                onOpen();
                setText({
                  title: "Convert JSON to STIX2",
                  body: "Conversion to STIX observable objects",
                  uploadInstruction: "Upload JSON file",
                  requestType: "post"
                });
              }}
              >
              JSON to STIX 2
            </Button>
            <Button colorScheme="pink" variant="outline" onClick={() => {
                onOpen();
                setText({
                  title: "Convert STIX to Native Data Source",
                  body: "Convert STIX to a native data source query such as SQL",
                  uploadInstruction: "Upload STIX XML",
                  requestType: "post"
                });
              }}
              >
              STIX to Native Data Source Query
            </Button>
            <Button colorScheme="pink" variant="outline" onClick={() => {
                onOpen();
                setText({
                  title: "Download Some JSON",
                  body: "This doesn't really make sense but is just an example of how to get data form Django",
                  uploadInstruction: "Download",
                  requestType: "get"
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
            />
          </Stack>
        </VStack>
      </Grid>
    </Center>
  );
}
