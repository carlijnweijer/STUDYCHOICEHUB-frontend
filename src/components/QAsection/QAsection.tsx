import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import Ask from "./Ask";
import Answer from "./Answer";
import "./QAsection.css";
import moment from "moment";
import { selectedStudy } from "../../store/study/selectors";
import { selectUser } from "../../store/user/selectors";
import { Link as RouterLink } from "react-router-dom";

export default function QAsection() {
  const user = useSelector(selectUser);
  // const questionsState = useSelector(selectQuestions);
  const study = useSelector(selectedStudy);
  // const questions = questionsState;
  const bull = <span> • </span>;

  const askQuestion =
    user.token === null ? (
      <Button component={RouterLink} to="/login">
        Login to ask a question
      </Button>
    ) : (
      <Ask />
    );

  return (
    <div className="QAsection">
      <Typography variant="h5">Ask your Questions!</Typography>
      {askQuestion}
      <div className="questions">
        {study?.questions.map((question: any) => {
          return (
            <Card key={question.id} className="questionCard">
              <CardContent>
                <Typography>{question.content}</Typography>
                <Typography>
                  <AccountCircle /> {question.user?.firstName}
                  {bull}
                  {moment(question.createdAt).format("DD-MM-YYYY")}
                </Typography>
              </CardContent>
              <Answer question={question} />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
