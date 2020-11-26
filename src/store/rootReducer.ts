import { combineReducers } from "redux";
import appStateReducer from "./appState/reducer";
import userStateReducer from "./user/reducer";

const rootReducer = combineReducers({
  appStateReducer,
  userStateReducer,
});

export default rootReducer;
