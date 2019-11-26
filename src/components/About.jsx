import React from "react";
import Photo from "../media/photoPere.png";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: "0 auto"
  },
  image: {
    width: "100%"
    // height: '200px'
  },
  text: {
    width: "50%",
    margin: "0 auto"
  }
});

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>PERE SOLÀ CLAVER</h1>
      <div>
        <img src={Photo} alt="Pere" className={classes.image} />
      </div>
      <div className={classes.text}>
        <div>
          <h2>FULL STACK DEVELOPER</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin feugiat quam, vitae condimentum lacus. Sed molestie
            posuere est, eget lobortis urna consequat ut. Aliquam erat volutpat.
            Vivamus ut pharetra libero. Praesent scelerisque malesuada tortor,
            quis commodo neque interdum sit amet. Nulla condimentum, enim quis
            luctus vestibulum, magna magna gravida nunc, a egestas lacus magna
            sed ipsum. In at fermentum felis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <div>
          <h2>LANGUAGES & FRAMEWORKS</h2>
          <p>HTML | CSS | Javascript | React | Node | Express | Databases</p>
        </div>
      </div>
    </div>
  );
}
