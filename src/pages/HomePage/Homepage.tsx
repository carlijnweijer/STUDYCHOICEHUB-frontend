import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudies } from "../../store/study/actions";
import { selectStudies } from "../../store/study/selectors";
import { study } from "../../store/study/types";
import { Link as RouterLink } from "react-router-dom";
import "./Homepage.css";
import NotebookSVG from "../../styles/images/Notebook-cuate.svg";

export default function Homepage() {
  const dispatch = useDispatch();
  const studies = useSelector(selectStudies);

  useEffect(() => {
    dispatch(fetchStudies());
  }, [dispatch]);

  return (
    <div className="page">
      <Box className="homeTop">
        <div className="homeTop_header">
          <h3>READ REVIEWS, ASK QUESTIONS AND WATCH STUDYSTORIES</h3>
          {/* <Typography variant="h3">
            READ REVIEWS, ASK QUESTIONS AND WATCH STUDYSTORIES
          </Typography> */}
          <Typography>TO MAKE THE STUDY CHOOSING PROCESS EASIER</Typography>
        </div>
        <div className="homeTop_img">
          <img src={NotebookSVG} className="homeTop_img_image" alt="notebook" />
        </div>
      </Box>
      <div className="about">
        <h5>
          Are you in your exam year and do you not yet know what you want to
          study? Or have you already started a course at a college or university
          and dropped out prematurely? It can be difficult to find a study that
          really suits you. How do you discover which study program is the best
          choice for you?
        </h5>
        <h6>
          On this platform you can ask students about their experience with
          their study, watch them study and get tips! Everything to make the
          study choosing process easier for you!
        </h6>
      </div>
      <Box className="home_studies">
        <h4>Discover studies</h4>
        {/* <Typography variant="h3" display="inline">
          Discover studies
        </Typography> */}
        <div className="home_studies_cards">
          {studies.map((study: study) => {
            return (
              <Card
                key={study.id}
                variant="outlined"
                className="home__container__card"
              >
                <CardContent>
                  <Typography>
                    {study.titleEn ? study.titleEn : study.titleNL}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className="home__card__button"
                    size="small"
                    component={RouterLink}
                    to={`/study/${study.id}`}
                  >
                    See Study!
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </Box>
    </div>
  );
}
