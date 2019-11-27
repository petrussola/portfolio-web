import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";

// PROJECT DATA
import ProjectsData from "../../database/Projects";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    "flex-direction": "row",
    background: "#F5F5F5"
  },
  imageContainer: {
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
    <div className={`${classes.root} containerMainPage`}>
      <ProjectImage selectedProject={selectedProject} />
      <ProjectDescription selectedProject={selectedProject} />
    </div>
  );
}
