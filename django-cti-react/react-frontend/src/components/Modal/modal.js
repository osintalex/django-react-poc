import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export default function GeneralConversionModal(props) {
  function handleClick() {
    if (props.requestType === "post") {
      fetch("http://localhost:8000/backend/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Hi: "friend" }),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (props.requestType === "get") {
      fetch("http://localhost:8000/api/stix/")
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.body}</ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={handleClick}>
              {props.uploadInstruction}
            </Button>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* {getResponse && <p>{getResponse.message}</p>}
      {postResponse && <p>{postResponse[0].name}</p>} */}
    </>
  );
}
