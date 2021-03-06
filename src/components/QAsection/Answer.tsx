import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Box, Button, TextField } from "@material-ui/core";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postAnswer } from "../../store/question/actions";
import { fetchStudy } from "../../store/study/actions";
import { selectUser } from "../../store/user/selectors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      //   transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      //   transform: "rotate(180deg)",
    },
    avatar: {
      //   backgroundColor: red[500],
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginLeft: 5,
      marginRight: 5,
    },
  })
);

export default function Answer(props: any) {
  const { id } = useParams<{ id: string | undefined }>();
  const dispatch = useDispatch();
  const question = props.question;
  const answers = question.answers;
  const bull = <span> • </span>;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [expandedAnswer, setExpandedAnswer] = useState(false);
  const [answer, setAnswer] = useState("");

  const user = useSelector(selectUser);

  const noAnswer =
    !Array.isArray(answers) || !answers.length ? (
      <Typography>This question has no answers yet.. </Typography>
    ) : null;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClickAnswer = () => {
    setExpandedAnswer(!expandedAnswer);
  };

  const handleAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleClickAnswer = (event: any) => {
    dispatch(postAnswer(answer, id, question.id));
    dispatch(fetchStudy(id));
    setAnswer("");
  };

  const canAnswer =
    user.token === null || user.role === "scholar" ? null : (
      <div>
        <Button
          className={clsx(classes.expand, {
            [classes.expandOpen]: expandedAnswer,
          })}
          onClick={handleExpandClickAnswer}
          aria-expanded={expandedAnswer}
          aria-label="show more"
        >
          Answer this Question
        </Button>
        <Collapse in={expandedAnswer} timeout="auto" unmountOnExit>
          <div className="answer">
            <TextField
              value={answer}
              onChange={handleAnswer}
              label="Answer"
              fullWidth
              variant="outlined"
            />
            <div className="answerBtn">
              <Button
                color="primary"
                variant="contained"
                onClick={handleClickAnswer}
              >
                Answer!
              </Button>
            </div>
          </div>
        </Collapse>
      </div>
    );

  return (
    <Box>
      <CardActions disableSpacing>
        {canAnswer}
        <Button
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          See Answers
        </Button>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {noAnswer}
        {answers.map((answer: any) => {
          return (
            <CardContent key={answer.id}>
              {noAnswer}
              <Typography>{answer.content}</Typography>
              <Typography>
                {moment(answer.createdAt).format("DD-MM-YYYY")}
                {bull}
                <span>
                  <Avatar className={classes.avatar}>
                    {answer.user.firstName[0]}
                  </Avatar>
                </span>
                {answer.user.firstName}
              </Typography>
            </CardContent>
          );
        })}
      </Collapse>
    </Box>
  );
}
