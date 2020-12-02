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

      dispatch(appDoneLoading());
      dispatch(showMessageWithTimeout("Review successfully posted", "success"));
      dispatch(fetchStudy(studyId));
      dispatch(getUserWithStoredToken());
    } catch (error) {
      console.log(error);
    }
  };
};
