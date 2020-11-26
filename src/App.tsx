import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Login</Button>
          <Button color="secondary">Signup</Button>
        </Toolbar>
      </AppBar>

      <h1>Hi i'm app</h1>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/signup" />
        <Route exact path="/login" />
      </Switch>
    </div>
  );
}

export default App;
