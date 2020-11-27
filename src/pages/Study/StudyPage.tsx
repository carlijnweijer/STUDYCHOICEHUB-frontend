import React from "react";
import StudyStories from "../../components/StudyStories/StudyStories";
import { Container } from "@material-ui/core";

export default function StudyPage() {
  return (
    <Container style={{ backgroundColor: "#cfe8fc" }}>
      <div>
        <h1>STUDYNAME</h1>
        <StudyStories />
        <div>reviews</div>
        <div>Q&A</div>
      </div>
    </Container>
  );
}
