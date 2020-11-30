import React, { useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
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
        <div>
          <Typography variant="h3">{study?.titleEn}</Typography>
          <UploadButton />
          <div className="studyStories">
            {study?.studyStories.map((story: any) => {
              return <StudyStory videoUrl={story.video} />;
            })}
          </div>
          <div>reviews</div>
          <Reviews />
          <div>Q&A</div>
        </div>
      </Container>
    </div>
  );
}
