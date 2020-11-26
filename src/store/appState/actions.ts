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

export const setMessage = (message: string): appActionTypes => ({
  type: SET_MESSAGE,
  payload: message,
});
