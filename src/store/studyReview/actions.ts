import { AppThunk } from "../types";
import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appDoneLoading,
  appLoading,
  showMessageWithTimeout,
} from "../appState/actions";
import { fetchStudy } from "../study/actions";
import { getUserWithStoredToken } from "../user/actions";
import { FETCH_REVIEWS_SUCCES, Review } from "./types";

const fetchReviewsSucces = (reviews: Review[]) => ({
  type: FETCH_REVIEWS_SUCCES,
  payload: reviews,
});

export const fetchReviews = (): AppThunk => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/reviews`);

    dispatch(fetchReviewsSucces(response.data));
  };
};

//post reviews
export const postReview = (content: string, title: string): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const state = getState();
    const { id, studyId } = state.userStateReducer;

    try {
      const response = await axios.post(`${apiUrl}/study/${studyId}/review`, {
        content,
        title,
        userId: id,
      });
      console.log("resp is ", response);
      dispatch(appDoneLoading());
      dispatch(showMessageWithTimeout("Review successfully posted", "success"));
      dispatch(fetchStudy(studyId));
      dispatch(getUserWithStoredToken());
      dispatch(fetchReviews());
    } catch (error) {
      console.log(error);
    }
  };
};
