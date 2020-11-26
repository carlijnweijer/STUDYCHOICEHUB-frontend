import { RootState } from "../types";

export const selectToken = (state: RootState) => state.userStateReducer.token;
export const selectUser = (state: RootState) => state.userStateReducer;
