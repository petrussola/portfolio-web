import React from "react";
// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "yellow",
    width: '50%'
  }
});

export default function Title() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>PSC</h1>
    </div>
  );
}
