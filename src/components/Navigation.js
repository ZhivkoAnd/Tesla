import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function Navigation(props) {
  const classes = useStyles();
  const { history } = props;
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const itemsList = [
    {
      text: "Home",
      onClick: () => history.push("/"),
    },
    {
      text: "Lineup",
      onClick: () => history.push("/lineup"),
    },
    {
      text: "Upcoming",
      onClick: () => history.push("/upcoming"),
    },
    {
      text: "Utilities",
      onClick: () => history.push("/utilities"),
    },
    {
      text: "My Tesla Account",
      onClick: () => history.push("/myaccount"),
    },
    {
      text: "Sign Up",
      onClick: () => history.push("/signup"),
    },
    {
      text: "Support",
      onClick: () => history.push("/support"),
    },
  ];
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {itemsList.map((item, index) => {
          const { text, onClick } = item;
          return (
            <ListItem onClick={onClick} button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{ zIndex: "1500" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon></MenuIcon>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Button
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "0.9rem",
                marginRight: "0.9rem",
                opacity: "0",
              }}
              onClick={toggleDrawer(anchor, false)}
            >
              <MenuIcon></MenuIcon>
            </Button>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default withRouter(Navigation);
