import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchedStudy } from "../../store/study/actions";
import { chosenStudy } from "../../store/study/selectors";
import { study } from "../../store/study/types";
import { editUser } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./MyReviews.css";
import { fetchReviews, postReview } from "../../store/studyReview/actions";
import { selectReviews } from "../../store/studyReview/selectors";

export default function MyReviews() {
  const user = useSelector(selectUser);
  const studies = useSelector(chosenStudy);
  const allReviews = useSelector(selectReviews);
  const [search, setSearch] = useState("");
  const [review, setReview] = useState(
    "Try and be as helpful as possible! Tell us about: Why have you chosen this study? What are you expecting to be when you finish? If you have finished this study, what is your current job? Were all you expectations met? Which were and which weren't?"
  );
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  console.log("who is user", user);
  const userId = user.id;

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handlePostReview = (content: string, title: string) => {
    dispatch(postReview(content, title));
    setReview("");
    setTitle("");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const searchForStudy = () => {
    dispatch(fetchSearchedStudy(search));
    setSearch("");
  };

  const handleMyStudyClick = (studyId: number, userId: number | null) => {
    dispatch(editUser(studyId, userId));
  };

  const userReviews = allReviews.find((review: any) => {
    return review.userId === user.id;
  });

  const studentcontrols =
    user.role === "student" && user.studyId === null ? (
      <div className="studyChoosingDiv">
        <Typography>What are you studying or what did you study?</Typography>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Search</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={search}
            onChange={handleSearchChange}
            label="search"
          />
          <Button onClick={searchForStudy}>Search</Button>
        </FormControl>
        {/* study field */}
        {studies?.map((study: study) => {
          return (
            <div key={study.id}>
              <Card key={study.id} variant="outlined">
                <CardContent>
                  <Typography>
                    {study.titleEn ? study.titleEn : study.titleNL}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      handleMyStudyClick(study.id, userId);
                    }}
                  >
                    This is my Study!
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    ) : null;

  //if user.role === student && user.studyId !== null
  const studentCanWriteReview =
    user.role === "student" && user.studyId !== null ? (
      <div className="writeReview">
        <div className="writeReviewTop">
          <Typography variant="h5" align="center">
            Write a review about your study!
          </Typography>
        </div>
        <div className="writeReviewForm">
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Title</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={title}
              onChange={handleTitleChange}
              label="Title"
            />
          </FormControl>
          <FormControl>
            <TextareaAutosize
              rowsMin={10}
              aria-label="maximum height"
              defaultValue={review}
              onChange={handleReviewChange}
            />
          </FormControl>
        </div>
        <Button
          onClick={() => {
            handlePostReview(review, title);
          }}
        >
          Post Review
        </Button>
      </div>
    ) : null;

  const reviewsOfThisUser = userReviews ? (
    <div>
      <Typography variant="h5">{userReviews.title}</Typography>
      <Typography>{userReviews.content}</Typography>
    </div>
  ) : (
    studentCanWriteReview
  );
  return (
    <div className="writeReviewPage">
      <div className="writeReviewPageBox">
        <div className="writeReviewPageTop">
          <Typography variant="h3">Your Review</Typography>
          <Typography variant="h4">
            {user.firstName} {user.lastName}
          </Typography>
        </div>
        {studentcontrols}

        {reviewsOfThisUser}
      </div>
    </div>
  );
}
