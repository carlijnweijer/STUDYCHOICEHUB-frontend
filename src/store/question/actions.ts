import { AppThunk } from "../types";
import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  question,
  FETCHED_QUESTIONS,
  POST_QUESTION,
  postQuestionAction,
} from "./types";

//fetch all the questions
//takes studyid

export const fetchQuestions = (
  studyId: number | string | undefined
): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/study/${studyId}/questions`);

      dispatch(fetchedQuestions(response.data));
    } catch (error) {
      console.log(error);
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

      // dispatch(postAQuestion(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const postAnswer = (
  content: string,
  studyId: number,
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
          questionId,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};
