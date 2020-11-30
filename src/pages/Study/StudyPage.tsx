import React from "react";
import StudyStories from "../../components/StudyStories/StudyStories";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import UploadButton from "../../components/StudyStories/UploadStory/UploadButton";

export default function StudyPage() {
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
