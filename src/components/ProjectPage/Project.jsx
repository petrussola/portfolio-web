import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";
import BeforeNext from "./BeforeNext";

// PROJECT DATA
import ProjectsData from "../../database/Projects";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 2)
  },
  projectContainer: {
    // margin: theme.spacing(3, 2),
    display: "flex",
    "flex-direction": "row"
  },
  imageContainer: {
    width: "50%"
  }
}));

export default function Project(props) {
  const classes = useStyles();
  const { id } = props.match.params;
  const [selectedProject] = ProjectsData.filter(item => {
    return item.id === Number(id);
  });
  return (
    <div className={classes.root}>
      <BeforeNext />
      <div className={classes.projectContainer}>
        <ProjectImage selectedProject={selectedProject} />
        <ProjectDescription selectedProject={selectedProject} />
      </div>
    </div>
  );
}
