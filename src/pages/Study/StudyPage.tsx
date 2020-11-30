import React, { useEffect } from "react";
import "./styles.css";
import { Box, Container, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import UploadButton from "../../components/StudyStories/UploadStory/UploadButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudy } from "../../store/study/actions";
import { selectedStudy } from "../../store/study/selectors";
import StudyStory from "../../components/StudyStories/StudyStory";
import QAsection from "../../components/QAsection/QAsection";
import { selectUser } from "../../store/user/selectors";

export default function StudyPage() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string | undefined }>();
  console.log(id, "id is");
  const study = useSelector(selectedStudy);
  const user = useSelector(selectUser);

  const uploadControls = user.role === "student" ? <UploadButton /> : null;

  useEffect(() => {
    dispatch(fetchStudy(id));
  }, [id, dispatch]);

  return (
    <div className="page">
      <Box>
        <div className="studyPage__top">
          <Typography variant="h3" className="studyPage__title">
            {study?.titleEn ? study?.titleEn : study?.titleNL}
          </Typography>
          {uploadControls}
        </div>
        <div className="studyStories">
          {study?.studyStories.map((story: any) => {
            return <StudyStory videoUrl={story.video} />;
          })}
        </div>
      </Box>
      <QAsection />
    </div>
  );
}
