import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudies } from "../../store/study/actions";
import { selectStudies } from "../../store/study/selectors";
import { study } from "../../store/study/types";

export default function Homepage() {
  const dispatch = useDispatch();
  const studies = useSelector(selectStudies);

  useEffect(() => {
    dispatch(fetchStudies());
  }, [dispatch]);

  return (
    <div>
      <h3>hi im home</h3>
      <Container>
        {studies.map((study: study) => {
          return (
            <Card key={study.id} variant="outlined">
              <CardContent>
                <Typography>
                  {study.titleEn ? study.titleEn : study.titleNL}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More!</Button>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}
