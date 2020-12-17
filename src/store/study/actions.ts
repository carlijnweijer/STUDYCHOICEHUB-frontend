import { AppThunk } from "../types";
import axios from "axios";
import {
  FETCH_SELECTED_STUDY,
  FETCH_STUDY_SUCCES,
  study,
  FETCH_CHOSEN_STUDY,
  FETCH_NEXT_20_STUDIES,
} from "./types";
import { apiUrl } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/actions";

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

const fetchNext20Succes = (studies: study[]) => ({
  type: FETCH_NEXT_20_STUDIES,
  payload: studies,
});

export const fetchStudies = (): AppThunk => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/studies`);
    dispatch(fetchStudySucces(response.data));
    dispatch(appDoneLoading());
  };
};

export const fetchNext20Studies = (sector: string): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const offset = getState().studyStateReducer.studies?.length || 20;
    const response = await axios.get(
      `${apiUrl}/studies/${sector}?offset=${offset}&limit=20`
    );

    const moreStudies = response.data.rows;

    dispatch(fetchNext20Succes(moreStudies));
    dispatch(appDoneLoading());
  };
};

export const fetchStudiesSector = (sector: string): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const offset = getState().studyStateReducer.studies?.length || 20;
    const response = await axios.get(
      `${apiUrl}/studies/${sector}?offset=${offset}&limit=20`
    );
    dispatch(fetchStudySucces(response.data));
    dispatch(appDoneLoading());
  };
};

export const fetchSearchedStudy = (search: string): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/study?title=${search}`);

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
      dispatch(fetchSelectedStudySucces(response.data.study));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
    }
  };
};
