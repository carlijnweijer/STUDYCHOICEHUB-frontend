import {
  userState,
  LOG_OUT,
  LOGIN_SUCCES,
  TOKEN_STILL_VALID,
  userActionTypes,
} from "./types";

const initialState: userState = {
  token: localStorage.getItem("token"),
  firstName: null,
  lastName: null,
  email: null,
  id: null,
  role: null,
  level: null,
};

const userStateReducer = (state = initialState, action: userActionTypes) => {
  switch (action.type) {
    case LOGIN_SUCCES:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default userStateReducer;
