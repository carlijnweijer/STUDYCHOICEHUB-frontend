import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginSignup/LoginPage";
import LogoutPage from "./pages/LoginSignup/LogoutPage";
import SignupPage from "./pages/LoginSignup/SignupPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hi i'm app</h1>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
      </Switch>
    </div>
  );
}

export default App;
