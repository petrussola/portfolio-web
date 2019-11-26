import React from "react";

// PROJECT DATA
import ProjectsData from "../database/Projects";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles(theme => ({
  root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      padding: '50px',
    //   background: "brown",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%"
  }
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={3} spacing={50}>
        {ProjectsData.map(project => (
          <GridListTile
            key={project.id}
            cols={project.cols || 1}
            rows={project.rows || 1}
          >
            <img src={project.img} alt={project.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
