import { FETCH_STUDY_SUCCES, studyState } from "./types";

const initialState: studyState = [];

const studyStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_STUDY_SUCCES:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default studyStateReducer;
