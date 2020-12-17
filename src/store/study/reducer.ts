import {
  FETCH_CHOSEN_STUDY,
  FETCH_SELECTED_STUDY,
  FETCH_STUDY_SUCCES,
  FETCH_NEXT_20_STUDIES,
  studyState,
} from "./types";

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
  selectedStudy: null,
  chosenStudy: [],
};

const studyStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_STUDY_SUCCES:
      return { ...state, studies: action.payload };

    case FETCH_NEXT_20_STUDIES:
      return { ...state, ...state.studies, studies: action.payload };

    case FETCH_SELECTED_STUDY:
      return { ...state, selectedStudy: action.payload };

    case FETCH_CHOSEN_STUDY:
      return { ...state, chosenStudy: action.payload };

    default:
      return state;
  }
};

export default studyStateReducer;
