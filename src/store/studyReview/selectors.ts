import { RootState } from "../types";

export const selectReviews = (state: RootState) => state.reviewStateRecuder.all;
