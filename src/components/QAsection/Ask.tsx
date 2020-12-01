import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postQuestion } from "../../store/question/actions";

export default function Ask() {
  const { id } = useParams<{ id: string | undefined }>();
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();

  console.log("what is id on ask com", id);

  const handleQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleClickAsk = (event: any) => {
    dispatch(postQuestion(question, id));
    setQuestion("");
  };

  return (
    <div className="ask">
      <TextField
        id="outlined-full-width"
        value={question}
        onChange={handleQuestion}
        label="Question"
        fullWidth
        variant="outlined"
      />
      <div className="AskBtn">
        <Button color="primary" variant="contained" onClick={handleClickAsk}>
          Ask!
        </Button>
      </div>
    </div>
  );
}
