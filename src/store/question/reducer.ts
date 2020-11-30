import { questionState } from "./types";

const initialState: questionState = [];

const questionStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default questionStateReducer;
