import React from "react";
import { Link } from "react-router-dom";
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
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>
    </div>
  );
}
