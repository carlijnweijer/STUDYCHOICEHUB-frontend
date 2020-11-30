import { AppThunk } from "../types";
import axios from "axios";
import { FETCH_SELECTED_STUDY, FETCH_STUDY_SUCCES, study } from "./types";
import { apiUrl } from "../../config/constants";

const fetchStudySucces = (studies: study[]) => ({
  type: FETCH_STUDY_SUCCES,
  payload: studies,
});

const fetchSelectedStudySucces = (study: study) => ({
  type: FETCH_SELECTED_STUDY,
  payload: study,
});

export const fetchStudies = (): AppThunk => {
  console.log("did i get to thunk");
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/studies`);
    console.log("what is response, ", response.data);
    dispatch(fetchStudySucces(response.data));
  };
};

export const fetchStudiesSector = (sector: string): AppThunk => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/studies/${sector}`);
    console.log("what is response data", response.data);
    dispatch(fetchStudySucces(response.data));
  };
};

export const fetchStudy = (studyId: number | string | undefined): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/study/${studyId}`);
      dispatch(fetchSelectedStudySucces(response.data.study));
    } catch (error) {
      console.log(error);
    }
  };
};
