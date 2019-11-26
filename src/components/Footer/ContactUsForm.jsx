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
  field: {
    height: "50px",
    "font-size": "1rem",
    padding: '1rem'
  }
});

export default function ContactUsForm() {
  const classes = useStyles();
  return (
    <>
      <Form className={classes.form}>
        <Field
          name="name"
          type="text"
          placeholder="Name"
          className={classes.field}
        />
        <Field
          name="email"
          type="email"
          placeholder="Email"
          className={classes.field}
        />
        <Field
          name="message"
          as="textarea"
          placeholder="Text"
          className={classes.field}
        />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
