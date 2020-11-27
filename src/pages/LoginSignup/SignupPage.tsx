import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/user/actions";
import { Level, Role } from "../../store/user/types";

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleFirstnameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
    console.log(event.target.value);
  };

  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    console.log(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const onSelectRole = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRole(event.target.value as Role);
    console.log(role);
  };

  const onSelectLevel = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLevel(event.target.value as Level);
    console.log(level);
  };

  const onSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit got clicked");
    dispatch(
      signup(firstName, lastName, email, password, role as Role, level as Level)
    );
  };

  const roleControls =
    role === "scholar" ? (
      <FormControl variant="outlined">
        <InputLabel htmlFor="select">Education</InputLabel>
        <Select onChange={onSelectLevel} value={level}>
          <MenuItem value="havo">HAVO</MenuItem>
          <MenuItem value="vwo">VWO</MenuItem>
        </Select>
      </FormControl>
    ) : (
      <FormControl variant="outlined">
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
    <div>
      <h1>I'm the signup page</h1>
      <form noValidate autoComplete="off" onSubmit={onSignUp}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Firstname</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={firstName}
            onChange={handleFirstnameChange}
            label="Firstname"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Lastname</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={lastName}
            onChange={handleLastnameChange}
            label="Lastname"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">E-mail</InputLabel>
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
        <FormControl variant="outlined">
          <InputLabel htmlFor="select">Scholar/Student</InputLabel>
          <Select onChange={onSelectRole} value={role}>
            <MenuItem value="scholar">Scholar</MenuItem>
            <MenuItem value="student">Student</MenuItem>
          </Select>
        </FormControl>
        {signUpControls}
        <Button
          variant="outlined"
          color="secondary"
          type="submit"
          disabled={!formValid}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
