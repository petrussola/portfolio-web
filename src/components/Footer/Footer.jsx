import React from "react";

// COMPONENTS
import FormContainer from "./FormContainer";
import ContactDetails from "./ContactDetails";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "black",
    color: "white",
    width: "100%",
    height: "300px"
  },
  container: {
    width: "50%",
    margin: "0 auto",
    display: "flex",
    "flex-direction": "row",
    "align-items": "center",
    height: "inherit"
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root} id={'test'}>
      <div className={classes.container}>
        <ContactDetails />
        <FormContainer />
      </div>
    </div>
  );
}
