import React, { useEffect } from "react";
import "./StudySectorStyles.css";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import UploadButton from "../../components/StudyStories/UploadStory/UploadButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudy } from "../../store/study/actions";
import { selectedStudy } from "../../store/study/selectors";
import StudyStory from "../../components/StudyStories/StudyStory";
import QAsection from "../../components/QAsection/QAsection";
import { selectUser } from "../../store/user/selectors";
import ReviewSection from "../../components/reviewsSection/ReviewSection";

export default function StudyPage() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string | undefined }>();
  // console.log(id, "id is");
  const study = useSelector(selectedStudy);
  const user = useSelector(selectUser);

  const uploadControls =
    user.role === "student" ? (
      <div className="uploadBtn">
        <UploadButton />{" "}
      </div>
    ) : null;

  useEffect(() => {
    dispatch(fetchStudy(id));
  }, [id, dispatch]);

  return (
    <div className="studyPage">
      <div className="studyPage__stories">
        <h4>{study?.titleEn ? study?.titleEn : study?.titleNL}</h4>
      </div>
      {uploadControls}
      <div className="studyStories">
        {study?.studyStories.map((story: any) => {
          return (
            <StudyStory
              key={story.id}
              videoUrl={story.video}
              header={study?.titleEn ? study?.titleEn : study?.titleNL}
            />
          );
        })}
      </div>

      <QAsection />
      <ReviewSection />
    </div>
  );
}
