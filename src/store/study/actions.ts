import { AppThunk } from "../types";
import axios from "axios";
import { FETCH_STUDY_SUCCES, study } from "./types";
import { apiUrl } from "../../config/constants";

const fetchStudySucces = (studies: study[]) => ({
  type: FETCH_STUDY_SUCCES,
  payload: studies,
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
