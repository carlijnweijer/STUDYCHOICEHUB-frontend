import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/user/actions";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div>
      <h1>I'm the login page</h1>
      <form noValidate autoComplete="off" onSubmit={onLogin}>
        <div>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Email</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={email}
              onChange={handleEmailChange}
              label="E-mail"
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={password}
              onChange={handlePasswordChange}
              label="Password"
            />
          </FormControl>
          <Button color="primary" variant="outlined" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
