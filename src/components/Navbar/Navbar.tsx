import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navbar() {
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>{loginLogoutControls}</Toolbar>
      </AppBar>
    </div>
  );
}
