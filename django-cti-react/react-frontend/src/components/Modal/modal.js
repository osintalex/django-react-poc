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
import PopOverForm from "../PopOver/popover.js";

/**
 * General modal popups for the different data conversions
 * @param {Object} props contains strings with instructions on what to show
 * @returns {React Component} one all purpose modal that can be modified for different props
 */
export default function GeneralConversionModal(props) {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.body}</ModalBody>
          <ModalFooter>
            <PopOverForm
              uploadInstruction={props.uploadInstruction}
              requestType={props.requestType}
              label={props.label}
              pasteInstruction={props.pasteInstruction}
            />
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
