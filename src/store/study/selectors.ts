import { RootState } from "../types";

export const selectStudies = (state: RootState) => state.studyStateReducer;
