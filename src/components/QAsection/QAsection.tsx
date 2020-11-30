import { Card, CardContent, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectQuestions } from "../../store/question/selectors";
import Ask from "./Ask";
import "./QAsection.css";
import moment from "moment";

export default function QAsection() {
  const questionsState = useSelector(selectQuestions);
  const questions = questionsState[0];
  const bull = <span> • </span>;

  return (
    <div className="QAsection">
      <Typography variant="h5">Ask your Questions!</Typography>
      <Ask />
      <div className="questions">
        {questions?.map((question: any) => {
          return (
            <Card key={question.id} className="questionCard">
              <CardContent>
                {/* <Typography variant="h6">{question.content}</Typography> */}
                <Typography>{question.content}</Typography>
                <Typography>
                  <AccountCircle /> {question.user.firstName}
                  {bull}
                  {moment(question.createdAt).format("DD-MM-YYYY")}
                </Typography>
                <Typography></Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
