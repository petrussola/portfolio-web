import React from "react";
import { Form, Field, ErrorMessage } from "formik";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    display: "flex",
    "flex-direction": "column",
    background: "red"
  },
  formItem: {
    background: "purple",
    display: "flex",
    "flex-direction": "row",
    "justify-content": "flex-start"
  }
});

export default function ContactUsForm() {
  const classes = useStyles();
  return (
    <>
      <Form className={classes.form}>
        <label className={classes.formItem}>
          Name:
          <Field name="name" type="text" placeholder="Name" />
        </label>
        <label className={classes.formItem}>
          Email:
          <Field name="email" type="email" placeholder="Email" />
        </label>
        <label className={classes.formItem}>
          Text:
          <Field name="message" as="textarea" placeholder="Text" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
