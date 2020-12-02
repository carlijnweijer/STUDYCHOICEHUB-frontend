import { combineReducers } from "redux";
import appStateReducer from "./appState/reducer";
import userStateReducer from "./user/reducer";
import studyStateReducer from "./study/reducer";
import studyStoryStateReducer from "./studyStory/reducer";
import questionStateReducer from "./question/reducer";
import reviewStateRecuder from "./studyReview/reducer";

const rootReducer = combineReducers({
  appStateReducer,
  userStateReducer,
  studyStateReducer,
  studyStoryStateReducer,
  questionStateReducer,
  reviewStateRecuder,
});

export default rootReducer;
