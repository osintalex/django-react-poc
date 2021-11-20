import React from "react";
import { Formik } from "formik";
import {
  FormLabel,
  Input,
  FormHelperText,
  FormControl,
  Button,
} from "@chakra-ui/react";

/**
 * Form for submitting data for converison
 * @param {Object} props string data on what should be in the form, instructions
 * @returns {React Component} the form that is part of the popover
 */
export default function ConversionForm(props) {

  /**
   * Makes POST requests to the backend where the data is converted in python
   * @param {string} formdata data to convert
   * @param {String} label instruction used in the backend for control flow of different data types
   */
  function callAPI(formdata, label) {
    formdata.label = label
    fetch("http://localhost:8000/backend/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
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

  return (
    <Formik
      initialValues={{ stix: "" }}
      onSubmit={(values, { setSubmitting }) => {
        callAPI(values, props.label);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <FormControl as="fieldset">
            <FormLabel>{props.label}</FormLabel>
            <Input
              type="stix"
              name="stix"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.stix}
            />
            <FormHelperText>{props.pasteInstruction}</FormHelperText>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            disabled={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}
