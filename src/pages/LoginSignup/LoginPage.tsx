import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import "./LoginSignup.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("i got clicked");
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="signupPage">
      <div className="signupPage_top">
        <Typography variant="h3">Welcome!</Typography>
      </div>
      <form noValidate autoComplete="off" onSubmit={onLogin}>
        <div className="login_formRow">
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Email</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={email}
              onChange={handleEmailChange}
              label="E-mail"
            />
          </FormControl>
        </div>
        <div className="login_formRow">
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={password}
              onChange={handlePasswordChange}
              label="Password"
              type="password"
            />
          </FormControl>
        </div>
        <div className="login_formRow">
          <Button color="primary" variant="outlined" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
