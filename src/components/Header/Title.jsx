import React from "react";
import { Link } from "react-router-dom";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "yellow",
    width: "50%"
  }
});

export default function Title() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/">
        <h1>PSC</h1>
      </Link>
    </div>
  );
}
