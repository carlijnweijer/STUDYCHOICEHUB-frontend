import { RootState } from "../types";

export const selectStudyStory = (state: RootState) =>
  state.studyStoryStateReducer;
