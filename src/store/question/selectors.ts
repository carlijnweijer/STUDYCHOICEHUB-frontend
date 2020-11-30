import { RootState } from "../types";

export const selectQuestions = (state: RootState) => state.questionStateReducer;
