import { AppThunk } from "../types";
import axios from "axios";
import { apiUrl } from "../../config/constants";
import { question, FETCHED_QUESTIONS } from "./types";
import { fetchStudy } from "../study/actions";
import {
  appDoneLoading,
  appLoading,
  showMessageWithTimeout,
} from "../appState/actions";

export const fetchQuestions = (
  studyId: number | string | undefined
): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/study/${studyId}/questions`);
      dispatch(fetchedQuestions(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      dispatch(appDoneLoading());
    }
  };
};

//put all the questions in state
const fetchedQuestions = (questions: question[]) => ({
  type: FETCHED_QUESTIONS,
  payload: questions,
});

//post one question
export const postQuestion = (
  content: string,
  studyId: number | string | undefined
): AppThunk => {
  return async (dispatch, getState) => {
    const state = getState();
    const { id } = state.userStateReducer;

    try {
      const response = await axios.post(
        `${apiUrl}/study/${studyId}/questions/ask`,
        {
          content,
          userId: id,
        }
      );
      dispatch(
        showMessageWithTimeout("Question succesfully posted", "success")
      );
      dispatch(fetchStudy(studyId));
    } catch (error) {
      dispatch(showMessageWithTimeout("Something went wrong", "error"));
    }
  };
};

export const postAnswer = (
  content: string,
  studyId: any,
  questionId: number
): AppThunk => {
  return async (dispatch, getState) => {
    const state = getState();
    const { id } = state.userStateReducer;

    try {
      const response = await axios.post(
        `${apiUrl}/study/${studyId}/questions/${questionId}/answer`,
        {
          content,
          userId: id,
        }
      );
      dispatch(showMessageWithTimeout("Answer succesfully posted", "success"));
      dispatch(fetchStudy(studyId));
    } catch (error) {
      console.log(error);
      dispatch(showMessageWithTimeout("Something went wrong", "error"));
    }
  };
};
