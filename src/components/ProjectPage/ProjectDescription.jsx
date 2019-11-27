import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 2),
    padding: theme.spacing(3, 2),
    width: "50%",
    height: "350px",
    "text-align": "left"
  }
}));

export default function ProjectDescription({ selectedProject }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4">{selectedProject.title}</Typography>
        <Typography variant="body1">{selectedProject.description}</Typography>
        <Typography variant="body1" color="secondary">
          Built with: {selectedProject.tech}
          <br />
        </Typography>
        <Typography>Github repo: {selectedProject.repo}</Typography>
      </CardContent>
      {!selectedProject.url ? null : (
        <CardActions>
          <Button size="small">Visit app</Button>
        </CardActions>
      )}
    </Card>
  );
}
