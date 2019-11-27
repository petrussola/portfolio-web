import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "50%"
  }
}));

export default function ProjectDescription({ selectedProject }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3">{selectedProject.title}</Typography>
      <Typography variant="body1">{selectedProject.description}</Typography>
    </div>
  );
}
