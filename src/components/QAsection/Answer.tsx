import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Box, Button } from "@material-ui/core";
import moment from "moment";
import { AccountCircle } from "@material-ui/icons";

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
  const answers = props.answers;
  console.log("what is question prop", answers);
  const bull = <span> • </span>;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <CardActions disableSpacing>
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
        {answers.map((answer: any) => {
          return (
            <CardContent>
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
