import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "50%",
    height: "300px",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center"
  },
  image: {
    width: "95%",
    height: "auto",
    margin: "20px"
  }
}));

export default function ProjectImage({ selectedProject }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div>
        <img
          src={selectedProject.img}
          alt={selectedProject.title}
          className={classes.image}
        />
      </div>
    </Paper>
  );
}