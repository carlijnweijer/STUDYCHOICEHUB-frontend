import {
  appState,
  APP_LOADING,
  APP_DONE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  appActionTypes,
} from "./types";

const initialState: appState = { loading: true, message: null };

const appStateReducer = (state = initialState, action: appActionTypes) => {
  switch (action.type) {
    case APP_LOADING:
      return { ...state, loading: true };

    case APP_DONE_LOADING:
      return { ...state, loading: false };

    case SET_MESSAGE:
      return { ...state, message: action.payload };

    case CLEAR_MESSAGE:
      return { ...state, message: null };

    default:
      return state;
  }
};

export default appStateReducer;
