import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    padding: "1rem"
  }
});

export default function Center() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <p>Pere Sola Claver</p>
      <p>/</p>
      <p>Full Stack Web Developer</p>
      <p>/</p>
      <p>HTML, CSS, JavaScript, React, Node, Express</p>
    </div>
  );
}
