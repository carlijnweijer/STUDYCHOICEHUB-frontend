import { combineReducers } from "redux";
import appStateReducer from "./appState/reducer";
import userStateReducer from "./user/reducer";
import studyStateReducer from "./study/reducer";
import studyStoryStateReducer from "./studyStory/reducer";

const rootReducer = combineReducers({
  appStateReducer,
  userStateReducer,
  studyStateReducer,
  studyStoryStateReducer,
});

export default rootReducer;
