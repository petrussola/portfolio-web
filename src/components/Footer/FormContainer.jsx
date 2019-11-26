import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ContactUsForm from "./ContactUsForm";

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
