import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Navbar() {
  const classes = useStyles();
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", flex: 1 }}>
            <Typography
              variant="h6"
              className={classes.title}
              color="textPrimary"
            >
              STUDYCHOICE HUB
            </Typography>
          </Link>
          {loginLogoutControls}
        </Toolbar>
      </AppBar>
    </div>
  );
}
