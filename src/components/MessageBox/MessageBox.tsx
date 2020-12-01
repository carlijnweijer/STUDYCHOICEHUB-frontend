import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default function MessageBox() {
  const classes = useStyles();
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    <div className={classes.root}>
      <Alert variant="filled" severity={message.severity}>
        {message.message}
      </Alert>
    </div>
  );
}
