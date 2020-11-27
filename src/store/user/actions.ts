import { AppThunk } from "../types";
import axios from "axios";
import {
  LOG_OUT,
  LOGIN_SUCCES,
  TOKEN_STILL_VALID,
  userWithToken,
  userActionTypes,
  userWithoutToken,
  Role,
  Level,
} from "./types";
import { appDoneLoading, appLoading, setMessage } from "../appState/actions";
import { apiUrl } from "../../config/constants";

const loginSucces = (userWithToken: userWithToken): userActionTypes => ({
  type: LOGIN_SUCCES,
  payload: userWithToken,
});

const tokenStillValid = (
  userWithoutToken: userWithoutToken
): userActionTypes => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const logOut = (): userActionTypes => ({ type: LOG_OUT });

export const login = (email: string, password: string): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSucces(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage(error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage(error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const signup = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: Role,
  level: Level
): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        firstName,
        lastName,
        email,
        password,
        role,
        level,
      });

      dispatch(loginSucces(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage(error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage(error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
