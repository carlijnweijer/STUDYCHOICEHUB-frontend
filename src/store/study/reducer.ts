import { FETCH_STUDY_SUCCES, studyState } from "./types";

const initialState: studyState = {
  sectors: [
    "economie",
    "gedrag_en_maatschappij",
    "gezondheidszorg",
    "landbouw_en_natuurlijke_omgeving",
    "natuur",
    "onderwijs",
    "recht",
    "taal_en_cultuur",
    "techniek",
  ],
  studies: [],
};

const studyStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_STUDY_SUCCES:
      return { ...state, studies: action.payload };

    default:
      return state;
  }
};

export default studyStateReducer;
