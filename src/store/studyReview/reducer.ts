import { ReviewState, FETCH_REVIEWS_SUCCES } from "./types";

const initialState: ReviewState = {
  all: [],
};

const reviewStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_REVIEWS_SUCCES:
      return { ...state, all: action.payload };

    default:
      return state;
  }
};

export default reviewStateReducer;
