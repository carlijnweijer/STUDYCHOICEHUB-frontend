import React, { useEffect } from "react";
import "./app.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import UploadButton from "./components/StudyStories/UploadStory/UploadButton";
import LoginPage from "./pages/LoginSignup/LoginPage";
import LogoutPage from "./pages/LoginSignup/LogoutPage";
import SignupPage from "./pages/LoginSignup/SignupPage";
import StudyPage from "./pages/Study/StudyPage";
import Homepage from "./pages/HomePage/Homepage";
import Sidebar from "./components/Sidebar/Sidebar";
import SectorPage from "./pages/Study/SectorPage";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="app">
      <div className="topBar">
        <Navbar />
      </div>
      <div className="main">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route path="/study/:id" component={StudyPage} />
            <Route path="/studies/:sector" component={SectorPage} />
          </Switch>
        </div>
      </div>
      <div className="footer">
        <div>i'm footer</div>
      </div>
    </div>
  );
}

export default App;
