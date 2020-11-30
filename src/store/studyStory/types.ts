export type studyStoryState = {
  videoUrl: string;
  userId: number | null;
  studyId: number | null;
};

export const POST_STUDYSTORY = "POST_STUDYSTORY";
export const STUDY_CLICKED = "STUDY_CLICKED";
export const USER_STUDYSTORY = "USER_STUDYSTORY";

export type videoUrl = string;

export type postStudyStorySucces = {
  type: typeof POST_STUDYSTORY;
  payload: string;
};

export type studyClick = {
  type: typeof STUDY_CLICKED;
  payload: number;
};
