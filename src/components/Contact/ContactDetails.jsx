import React from "react";

// MATERIAL UI
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    width: "50%"
  },
  list: {
    width: "50%",
    margin: "0 auto"
  }
});

export default function ContactDetails() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List className={classes.list}>
        <ListItemLink href="https://www.linkedin.com/in/peresola/">
          <ListItemIcon>
            <LinkedInIcon fontSize={"large"} />
          </ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItemLink>
        <ListItemLink href="https://twitter.com/petrussola">
          <ListItemIcon>
            <TwitterIcon fontSize={"large"} />
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </ListItemLink>
        <ListItemLink href="https://github.com/petrussola">
          <ListItemIcon>
            <GitHubIcon fontSize={"large"} />
          </ListItemIcon>
          <ListItemText primary="GitHub" />
        </ListItemLink>
      </List>
    </div>
  );
}

function ListItemLink(props) {
  return <ListItem button component="a" selected={false} {...props} />;
}
