import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
          <Button color="secondary" component={RouterLink} to="/signup">
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
