import { combineReducers } from "redux";
import appStateReducer from "./appState/reducer";

const rootReducer = combineReducers({
  appStateReducer,
});

export default rootReducer;
