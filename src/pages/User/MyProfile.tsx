import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchedStudy } from "../../store/study/actions";
import { chosenStudy, selectStudies } from "../../store/study/selectors";
import { study } from "../../store/study/types";
import { editUser } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

export default function MyProfile() {
  const user = useSelector(selectUser);
  const studies = useSelector(chosenStudy);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  //   console.log("who is user", user);
  const userId = user.id;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  const searchForStudy = () => {
    dispatch(fetchSearchedStudy(search));
    setSearch("");
  };

  const handleMyStudyClick = (studyId: number, userId: number | null) => {
    console.log("what is studyID", studyId);
    dispatch(editUser(studyId, userId));
  };

  console.log("studiesarray is ", studies);

  return (
    <div>
      <h1>my profile page</h1>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>Study</p>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Search</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={search}
          onChange={handleSearchChange}
          label="search"
        />
        <Button onClick={searchForStudy}>Search</Button>
      </FormControl>
      {/* study field */}
      {studies?.map((study: study) => {
        return (
          <div>
            <Card key={study.id} variant="outlined">
              <CardContent>
                <Typography>
                  {study.titleEn ? study.titleEn : study.titleNL}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    handleMyStudyClick(study.id, userId);
                  }}
                >
                  This is my Study!
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
      {/* write a review! */}
      {/* reviews */}
    </div>
  );
}
