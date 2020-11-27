import React from "react";
import "./app.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import UploadButton from "./components/StudyStories/UploadStory/UploadButton";
import LoginPage from "./pages/LoginSignup/LoginPage";
import LogoutPage from "./pages/LoginSignup/LogoutPage";
import SignupPage from "./pages/LoginSignup/SignupPage";
import StudyPage from "./pages/Study/StudyPage";
import Homepage from "./pages/HomePage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UploadButton />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route path="/study/:id" component={StudyPage} />
      </Switch>
    </div>
  );
}

export default App;
