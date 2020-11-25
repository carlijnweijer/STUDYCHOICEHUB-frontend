import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
