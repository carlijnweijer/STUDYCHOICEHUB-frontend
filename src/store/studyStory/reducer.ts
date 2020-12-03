import {
  POST_STUDYSTORY,
  studyStoryState,
  STUDY_CLICKED,
  USER_STUDYSTORY,
} from "./types";

const initialState: studyStoryState = {
  videoUrl: "",
  userId: null,
  studyId: null,
};

const studyStoryStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POST_STUDYSTORY:
      return { ...state, videoUrl: action.payload };

    case STUDY_CLICKED:
      return { ...state, studyId: action.payload };

    case USER_STUDYSTORY:
      return { ...state, userId: action.payload };

    default:
      return state;
  }
};

export default studyStoryStateReducer;
