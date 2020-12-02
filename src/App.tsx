import React, { useEffect } from "react";
import "./styles/app.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginSignup/LoginPage";
import LogoutPage from "./pages/LoginSignup/LogoutPage";
import SignupPage from "./pages/LoginSignup/SignupPage";
import StudyPage from "./pages/Study/StudyPage";
import Homepage from "./pages/HomePage/Homepage";
import Sidebar from "./components/Sidebar/Sidebar";
import SectorPage from "./pages/Study/SectorPage";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";
import PostReview from "./components/reviewsSection/PostReview";
import { selectAppLoading } from "./store/appState/selectors";
import { CircularProgress } from "@material-ui/core";
import MessageBox from "./components/MessageBox/MessageBox";
import MyProfile from "./pages/User/MyProfile";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

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
          {isLoading ? <CircularProgress /> : null}
          <MessageBox />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route path="/study/:id" component={StudyPage} />
            <Route path="/studies/:sector" component={SectorPage} />
            <Route path="/writeReview" component={MyProfile} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
