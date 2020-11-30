import React, { useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import UploadButton from "../../components/StudyStories/UploadStory/UploadButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudy } from "../../store/study/actions";
import { selectedStudy } from "../../store/study/selectors";
import StudyStory from "../../components/StudyStories/StudyStory";

export default function StudyPage() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string | undefined }>();
  console.log(id, "id is");
  const study = useSelector(selectedStudy);

  useEffect(() => {
    dispatch(fetchStudy(id));
  }, [id, dispatch]);

  return (
    <div className="page">
      <Container>
        <div className="studyPage__top">
          <Typography variant="h3" className="studyPage__title">
            {study?.titleEn}
          </Typography>
          <UploadButton />
        </div>
        <div className="studyStories">
          {study?.studyStories.map((story: any) => {
            return <StudyStory videoUrl={story.video} />;
          })}
        </div>
        <div>reviews</div>
        <div>Q&A</div>
      </Container>
    </div>
  );
}
