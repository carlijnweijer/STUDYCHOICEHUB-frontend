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
import { useParams } from "react-router-dom";
import { fetchStudiesSector } from "../../store/study/actions";
import { selectStudies } from "../../store/study/selectors";
import { study } from "../../store/study/types";
import { Link as RouterLink } from "react-router-dom";

export default function SectorPage() {
  const { sector } = useParams<{ sector: string }>();
  console.log("what is sector", sector);
  const regex = /_/gi;
  const dispatch = useDispatch();
  const studies = useSelector(selectStudies);
  console.log("wat is studies", studies);

  useEffect(() => {
    dispatch(fetchStudiesSector(sector));
  }, []);

  return (
    <div>
      <h1>im {sector.replace(regex, " ")}</h1>
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
                <Button component={RouterLink} to={`/study/${study.id}`}>
                  Learn More!
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}
