import React from "react";
// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "purple",
    width: "50%"
  },
  menuItems: {
    background: "red",
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-around"
  }
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul className={classes.menuItems}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
