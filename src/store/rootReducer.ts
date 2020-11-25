import { combineReducers } from "redux";

const reducer = combineReducers({
  // reducers etc.
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
