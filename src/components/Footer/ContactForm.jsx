import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "50%"
  }
});

export default function ContactForm() {
  const classes = useStyles();
  return <div className={classes.root}>this is a form</div>;
}
