import { AppThunk } from "../types";
import axios from "axios";
import { apiUrl } from "../../config/constants";
import { question, FETCHED_QUESTIONS } from "./types";

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
//add question to state
