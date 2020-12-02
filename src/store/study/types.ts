export type studyState = {
  sectors: string[];
  studies: study[];
  selectedStudy: study | null;
  chosenStudy: study[];
};

export type study = {
  id: number;
  crohoSector: string;
  rowkey: number;
  titleEn: string;
  titleNL: string;
};

export const FETCH_STUDY_SUCCES = "FETCH_STUDY_SUCCES";
export const FETCH_SELECTED_STUDY = "FETCH_SELECTED_STUDY";
export const FETCH_CHOSEN_STUDY = "FETCH_CHOSEN_STUDY";
// export const REVIEW_CREATED = "REVIEW_CREATED";

export type fetchChosenStudySucces = {
  type: typeof FETCH_CHOSEN_STUDY;
  payload: study;
};

export type fetchStudySucces = {
  type: typeof FETCH_STUDY_SUCCES;
  payload: study[];
};

// export type studyActionTypes = fetchStudySucces;
