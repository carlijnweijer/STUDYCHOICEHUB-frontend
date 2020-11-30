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

export default function Homepage() {
  const dispatch = useDispatch();
  const studies = useSelector(selectStudies);

  useEffect(() => {
    dispatch(fetchStudies());
  }, [dispatch]);

  return (
    <div className="page">
      <Typography variant="h3">HomePage</Typography>
      <Box className="home__container">
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
      </Box>
    </div>
  );
}
