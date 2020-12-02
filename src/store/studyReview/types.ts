export type ReviewState = {
  all: Review[];
};

export type Review = {
  title: string;
  content: string;
  studyId: number;
  userId: number;
};

export const FETCH_REVIEWS_SUCCES = "FETCH_REVIEWS_SUCCES";
