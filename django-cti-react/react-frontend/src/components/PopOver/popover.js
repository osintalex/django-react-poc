import FocusLock from "react-focus-lock";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useRef } from "react";
import ConversionForm from "../Form/form.js";

/**
 * Pop Over for pasting the STIX and other data sources
 * @param {Object} props string data on different instructions for the form
 * @returns {React Component} different popover components for data conversion and download
 */
export default function PopOverForm(props) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);

  /**
   * Handles connecting to django backend forgetting data from the database.
   */
  function handleClick() {
    fetch("http://localhost:8000/api/stix/")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        alert(JSON.stringify(response));
      })
      .catch((error) => {
        console.error(error);
      });
  }
  if (props.uploadInstruction !== "Download") {
    return (
      <>
        <Popover
          isOpen={isOpen}
          initialFocusRef={firstFieldRef}
          onOpen={onOpen}
          onClose={onClose}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button d="inline-block" mr={3}>
              {props.uploadInstruction}
            </Button>
          </PopoverTrigger>
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <PopoverCloseButton />
              <ConversionForm
                label={props.label}
                pasteInstruction={props.pasteInstruction}
              />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </>
    );
  } else {
    return (
      <>
        <Popover
          isOpen={isOpen}
          initialFocusRef={firstFieldRef}
          onOpen={onOpen}
          onClose={onClose}
          placement="right"
          closeOnBlur={false}
        >
          <Button
            d="inline-block"
            mr={3}
            onClick={handleClick}
          >
            {props.uploadInstruction}
          </Button>
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <PopoverCloseButton />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </>
    );
  }
}
