import { AppThunk } from "../types";
import axios from "axios";
import {
  POST_STUDYSTORY,
  studyStoryState,
  postStudyStorySucces,
  videoUrl,
  STUDY_CLICKED,
  USER_STUDYSTORY,
} from "./types";
import { apiUrl } from "../../config/constants";
import { fetchStudy } from "../study/actions";

const studyStorySucces = (videoUrl: videoUrl): postStudyStorySucces => ({
  type: POST_STUDYSTORY,
  payload: videoUrl,
});

export const userStudyStory = (userId: number | null) => ({
  type: USER_STUDYSTORY,
  payload: userId,
});

export const saveStudyStory = (studyId: number) => ({
  type: STUDY_CLICKED,
  payload: studyId,
});

const uploadStory = (videoUrl: any): AppThunk => {
  console.log("did i get to uploadstory");
  return async (dispatch, getState) => {
    const state = getState();
    const userstate = state.userStateReducer;
    const studystate = state.studyStateReducer;
    const currentstudy = studystate.selectedStudy;

    try {
      const response = await axios.post(`${apiUrl}/upload/studystory`, {
        video: videoUrl,
        userId: userstate.id,
        studyId: currentstudy.id,
      });
      dispatch(fetchStudy(currentstudy.id));
      dispatch(studyStorySucces(videoUrl));
    } catch (error) {
      console.log(error);
    }
  };
};

export const postStudyStory = (data: any): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dqxz3kw8u/video/upload",
        {
          method: "POST",
          body: data,
        }
      );

      console.log("what is response fetch", res);
      const video = await res.json();
      const videoUrl = video.secure_url;

      dispatch(uploadStory(videoUrl));
    } catch (error) {
      console.log(error);
    }
  };
};
