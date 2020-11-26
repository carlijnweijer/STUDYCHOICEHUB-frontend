import { DEFAULT_MESSAGE_TIMEOUT } from "../../config/constants";
import {
  appActionTypes,
  APP_DONE_LOADING,
  APP_LOADING,
  CLEAR_MESSAGE,
  SET_MESSAGE,
} from "./types";

const appLoading = (): appActionTypes => ({ type: APP_LOADING });
const appDoneLoading = (): appActionTypes => ({ type: APP_DONE_LOADING });
const clearMessage = (): appActionTypes => ({ type: CLEAR_MESSAGE });

const setMessage = (message: string): appActionTypes => ({
  type: SET_MESSAGE,
  payload: message,
});
