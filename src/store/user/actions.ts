import {
  LOG_OUT,
  LOGIN_SUCCES,
  TOKEN_STILL_VALID,
  userWithToken,
  userActionTypes,
  userWithoutToken,
} from "./types";

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

const logOut = (): userActionTypes => ({ type: LOG_OUT });
