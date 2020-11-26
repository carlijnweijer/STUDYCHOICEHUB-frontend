import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";

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
    <div>
      <h1>are u sure you want to log out?</h1>
      <Button
        variant="outlined"
        color="secondary"
        component={RouterLink}
        to="/login"
      >
        No send me back please
      </Button>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        Yes I'm sure
      </Button>
    </div>
  );
}
