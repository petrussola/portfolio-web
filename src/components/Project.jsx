import React from "react";

// PROJECT DATA
import ProjectsData from "../database/Projects";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    "flex-direction": "row"
  },
  imageContainer: {
    width: "50%"
  },
  image: {
    width: "50%"
  },
  text: {
    width: "50%"
  }
});

export default function Project(props) {
  const classes = useStyles();
  const { id } = props.match.params;
  const [selectedProject] = ProjectsData.filter(item => {
    return item.id === Number(id);
  });
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          src={selectedProject.img}
          alt={selectedProject.title}
          className={classes.image}
        />
      </div>
      <div className={classes.text}>
        <h1>{selectedProject.title}</h1>
        <p>{selectedProject.description}</p>
      </div>
    </div>
  );
}
