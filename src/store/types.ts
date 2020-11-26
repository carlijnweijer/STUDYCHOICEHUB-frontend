//src/store/types

import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import rootReducer from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

enum Role {
  scholar,
  student,
}

enum Level {
  havo,
  vwo,
  hbo,
  wo,
}

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  level: Level;
};
