import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStudiesSector } from "../../store/study/actions";
import { selectStudies } from "../../store/study/selectors";
import { study } from "../../store/study/types";
import { Link as RouterLink } from "react-router-dom";
import { saveStudyStory, userStudyStory } from "../../store/studyStory/actions";
import { selectUserId } from "../../store/user/selectors";
import "./StudySectorStyles.css";
import StudyImg from "../../styles/images/study.svg";
import TeacherImg from "../../styles/images/teacher.svg";
import SchoolImg from "../../styles/images/school.svg";

export default function SectorPage() {
  const { sector } = useParams<{ sector: string }>();
  const regex = /_/gi;
  const dispatch = useDispatch();
  const studies = useSelector(selectStudies);
  // console.log("wat is studies", studies);
  const userId = useSelector(selectUserId);

  const images = [StudyImg, TeacherImg, SchoolImg];
  const imgIndex = Math.floor(Math.random() * images.length);

  const clickedStudy = (studyId: number, userId: number | null) => {
    console.log("what got clicked", studyId);
    dispatch(saveStudyStory(studyId));
    dispatch(userStudyStory(userId));
  };

  useEffect(() => {
    dispatch(fetchStudiesSector(sector));
  }, [sector, dispatch]);

  return (
    <div className="sectorPage">
      <div className="sectorPageTop">
        <div className="sectorPageHeader">
          <h4>{sector.replace(regex, " ")}</h4>
        </div>
        <div className="sectorPageImg">
          <img src={images[imgIndex]} alt="studyingperson" />
        </div>
      </div>
      <div>
        {studies.map((study: study) => {
          return (
            <Card key={study.id} variant="outlined">
              <CardContent>
                <Typography>
                  {study.titleEn ? study.titleEn : study.titleNL}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={RouterLink}
                  to={`/study/${study.id}`}
                  onClick={() => {
                    clickedStudy(study.id, userId);
                  }}
                >
                  Learn More!
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
