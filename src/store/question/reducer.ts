import { FETCHED_QUESTIONS, questionState } from "./types";

const initialState: questionState = [];

const questionStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCHED_QUESTIONS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default questionStateReducer;
