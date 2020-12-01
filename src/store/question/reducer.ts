import { FETCHED_QUESTIONS, POST_QUESTION, questionState } from "./types";

const initialState: questionState = [];

const questionStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCHED_QUESTIONS:
      return [...state, ...action.payload];

    // case POST_QUESTION:
    //   console.log(action.payload, "payload");
    //   console.log("state", [...state, action.payload]);
    //   return [...state, action.payload];

    default:
      return state;
  }
};

export default questionStateReducer;
