import React, { useEffect } from "react";
import StudyStories from "../../components/StudyStories/StudyStories";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import UploadButton from "../../components/StudyStories/UploadStory/UploadButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudy } from "../../store/study/actions";

export default function StudyPage() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string | undefined }>();
  console.log(id, "id is");

  useEffect(() => {
    dispatch(fetchStudy(id));
  }, [id]);

  return (
    <Container style={{ backgroundColor: "#cfe8fc" }}>
      <div>
        <h1>STUDYNAME</h1>
        <UploadButton />
        <StudyStories />
        <div>reviews</div>
        <Reviews />
        <div>Q&A</div>
      </div>
    </Container>
  );
}
