import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { Level, Role } from "../../store/user/types";
import "./LoginSignup.css";

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  const handleFirstnameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSelectRole = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRole(event.target.value as Role);
  };

  const onSelectLevel = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLevel(event.target.value as Level);
  };

  const onSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      signup(firstName, lastName, email, password, role as Role, level as Level)
    );
  };

  const roleControls =
    role === "scholar" ? (
      <FormControl variant="outlined" className="signup_formRow_element">
        <InputLabel htmlFor="select">Education</InputLabel>
        <Select onChange={onSelectLevel} value={level}>
          <MenuItem value="havo">HAVO</MenuItem>
          <MenuItem value="vwo">VWO</MenuItem>
        </Select>
      </FormControl>
    ) : (
      <FormControl variant="outlined" className="signup_formRow_element">
        <InputLabel htmlFor="select">Education</InputLabel>
        <Select onChange={onSelectLevel} value={level}>
          <MenuItem value="hbo">HBO</MenuItem>
          <MenuItem value="wo">WO</MenuItem>
        </Select>
      </FormControl>
    );

  const signUpControls = role === "" ? null : roleControls;

  const formValid =
    role !== "" &&
    level !== "" &&
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    password !== "";

  return (
    <div className="signupPage">
      <div className="signupPage_top">
        <Typography variant="h3">Welcome!</Typography>
      </div>
      <div className="signupPage_form">
        <form noValidate autoComplete="off" onSubmit={onSignUp}>
          <div className="signup_formRow">
            <FormControl variant="outlined" className="signup_formRow_element">
              <InputLabel htmlFor="component-outlined">Firstname</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={firstName}
                onChange={handleFirstnameChange}
                label="Firstname"
              />
            </FormControl>
            <FormControl variant="outlined" className="signup_formRow_element">
              <InputLabel htmlFor="component-outlined">Lastname</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={lastName}
                onChange={handleLastnameChange}
                label="Lastname"
              />
            </FormControl>
          </div>
          <div className="signup_formRow">
            <FormControl variant="outlined" className="signup_formRow_element">
              <InputLabel htmlFor="component-outlined">E-mail</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={email}
                onChange={handleEmailChange}
                label="E-mail"
              />
            </FormControl>
            <FormControl variant="outlined" className="signup_formRow_element">
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
          <div className="signup_formRow">
            <FormControl variant="outlined" className="signup_formRow_element">
              <InputLabel htmlFor="select">Scholar/Student</InputLabel>
              <Select onChange={onSelectRole} value={role}>
                <MenuItem value="scholar">Scholar</MenuItem>
                <MenuItem value="student">Student</MenuItem>
              </Select>
            </FormControl>
            {signUpControls}
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={!formValid}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
