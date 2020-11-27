import { combineReducers } from "redux";
import appStateReducer from "./appState/reducer";
import userStateReducer from "./user/reducer";
import studyStateReducer from "./study/reducer";

const rootReducer = combineReducers({
  appStateReducer,
  userStateReducer,
  studyStateReducer,
});

export default rootReducer;
