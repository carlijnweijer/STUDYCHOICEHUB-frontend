import { AppThunk } from "../types";
import axios from "axios";
import {
  FETCH_SELECTED_STUDY,
  FETCH_STUDY_SUCCES,
  study,
  FETCH_CHOSEN_STUDY,
} from "./types";
import { apiUrl } from "../../config/constants";
import { appDoneLoading } from "../appState/actions";

const fetchStudySucces = (studies: study[]) => ({
  type: FETCH_STUDY_SUCCES,
  payload: studies,
});

const fetchSelectedStudySucces = (study: study) => ({
  type: FETCH_SELECTED_STUDY,
  payload: study,
});

export const fetchChosenStudySucces = (study: any) => ({
  type: FETCH_CHOSEN_STUDY,
  payload: study,
});

export const fetchStudies = (): AppThunk => {
  console.log("did i get to thunk");
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/studies`);
    console.log("what is response, ", response);
    dispatch(fetchStudySucces(response.data));
    dispatch(appDoneLoading());
  };
};

export const fetchStudiesSector = (sector: string): AppThunk => {
  return async (dispatch, getState) => {
    const offset = getState().studyStateReducer.studies.length;
    const response = await axios.get(
      `${apiUrl}/studies/${sector}?offset=${offset}&limit=20`
    );
    console.log("what is response data", response.data);
    dispatch(fetchStudySucces(response.data));
    dispatch(appDoneLoading());
  };
};

export const fetchSearchedStudy = (search: string): AppThunk => {
  return async (dispatch, getState) => {
    console.log("did i get to fetchsearchedstudy");
    try {
      console.log("what is search");
      const response = await axios.get(`${apiUrl}/study?title=${search}`);

      console.log(response);
      dispatch(fetchChosenStudySucces(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchStudy = (
  studyId: number | string | undefined | null
): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/study/${studyId}`);
      console.log("did i get to fetch study");
      dispatch(fetchSelectedStudySucces(response.data.study));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
    }
  };
};
