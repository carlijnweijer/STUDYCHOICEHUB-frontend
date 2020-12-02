import { RootState } from "../types";

export const selectAppLoading = (state: RootState) =>
  state.appStateReducer.loading;

export const selectMessage = (state: RootState) =>
  state.appStateReducer.message;
