import { DEFAULT_MESSAGE_TIMEOUT } from "../../config/constants";
import { AppThunk } from "../types";
import {
  appActionTypes,
  APP_DONE_LOADING,
  APP_LOADING,
  CLEAR_MESSAGE,
  SET_MESSAGE,
} from "./types";

export const appLoading = (): appActionTypes => ({ type: APP_LOADING });
export const appDoneLoading = (): appActionTypes => ({
  type: APP_DONE_LOADING,
});
export const clearMessage = (): appActionTypes => ({ type: CLEAR_MESSAGE });

export const setMessage = (
  message: string,
  severity: string
): appActionTypes => ({
  type: SET_MESSAGE,
  payload: { message, severity },
});

export const showMessageWithTimeout = (
  message: string,
  severity: string
): AppThunk => {
  return (dispatch, getState) => {
    dispatch(setMessage(message, severity));

    const timeout = DEFAULT_MESSAGE_TIMEOUT;

    setTimeout(() => dispatch(clearMessage()), timeout);
  };
};
