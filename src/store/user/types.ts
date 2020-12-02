//state type

export enum Role {
  Scholar = "scholar",
  Student = "student",
}

export enum Level {
  Havo = "havo",
  Vwo = "vwo",
  Hbo = "hbo",
  Wo = "wo",
}

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  level: Level;
};

export type userState = {
  token: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  id: number | null;
  role: Role | null;
  level: Level | null;
  studyId: number | null;
};

export type userWithToken = {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type userWithoutToken = {
  token: null;
  firstName: string;
  lastName: string;
  email: string;
};

//action types
export const LOG_OUT = "LOG_OUT";
export const LOGIN_SUCCES = "LOGIN_SUCCES";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";

export type loginSucces = {
  type: typeof LOGIN_SUCCES;
  payload: userWithToken;
};

export type tokenStillValid = {
  type: typeof TOKEN_STILL_VALID;
  payload: userWithoutToken;
};

export type logOut = {
  type: typeof LOG_OUT;
};

export type userActionTypes = loginSucces | tokenStillValid | logOut;
