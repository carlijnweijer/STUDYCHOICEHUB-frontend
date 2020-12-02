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
          <Typography variant="h3">
            READ REVIEWS, ASK QUESTIONS AND WATCH STUDYSTORIES
          </Typography>
          <Typography>TO MAKE THE STUDY CHOOSING PROCESS EASIER</Typography>
        </div>
        <div className="homeTop_img">
          <img
            src={NotebookSVG}
            className="homeTop_img_image"
            alt="notebook-image"
          />
        </div>
      </Box>
      <Box className="home_studies">
        <Typography variant="h3" display="inline">
          Discover studies
        </Typography>
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
                    to={`/studies/${study.crohoSector}`}
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
