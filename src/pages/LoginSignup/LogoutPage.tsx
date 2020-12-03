import { Button, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import "./LoginSignup.css";
import { logOut } from "../../store/user/actions";

export default function LogoutPage() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token, history]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("logout got clicked");
    dispatch(logOut());
  };

  return (
    <div className="logoutPage">
      <div className="logoutPageBox">
        <div className="logoutPageTop">
          <Typography variant="h3">
            Are you sure you want to log out?
          </Typography>
        </div>
        <div className="buttons">
          <Button
            variant="contained"
            color="secondary"
            component={RouterLink}
            to="/login"
          >
            No send me back please
          </Button>
        </div>
        <div className="buttons">
          <Button variant="contained" color="primary" onClick={handleClick}>
            Yes I'm sure
          </Button>
        </div>
      </div>
    </div>
  );
}
