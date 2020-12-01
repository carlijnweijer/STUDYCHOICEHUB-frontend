export type questionState = question[];

export type question = {
  id: number;
  content: string;
};

//actions
//fetch questions
//put questions in store
//post question
//add new question to store

//post answer
//add answer to store

export const FETCHED_QUESTIONS = "FETCH_QUESTIONS";
export const POST_QUESTION = "POST_QUESTION";
export const POST_ANSWER = "POST_ANSWER";

// export type fetchedQuestions = {
//   type: typeof FETCHED_QUESTIONS;
//   payload: question[];
// };

export type postQuestionAction = {
  type: typeof POST_QUESTION;
  payload: question;
};
