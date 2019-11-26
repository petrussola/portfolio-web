import React from "react";
import Title from "./Title";
import NavBar from "./NavBar";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "red",
    display: "flex",
    "flex-direction": "row",
    "align-items": "center",
    height: "150px"
  }
});

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title className={classes.title} />
      <NavBar className={classes.navbar} />
    </div>
  );
}
