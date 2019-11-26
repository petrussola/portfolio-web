import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "50%"
  }
});

const initialValues = {
  name: "",
  email: "",
  message: ""
};

export default function ContactForm() {
  const submitFormHandler = values => {
    console.log(values);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitFormHandler}
        component={ContactUsForm}
      />
    </div>
  );
}

function ContactUsForm() {
  return (
    <>
      <Form>
        <label>
          Name:
          <Field type="text" name="name" placeholder="Name" />
        </label>
        <label>
          Email:
          <Field type="text" name="email" placeholder="Email" />
        </label>
        <label>
          Text:
          <Field type="text" name="message" placeholder="Text" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
