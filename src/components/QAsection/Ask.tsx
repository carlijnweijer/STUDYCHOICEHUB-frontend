import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function Ask() {
  const [question, setQuestion] = useState("");

  const handleQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
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
        <Button color="primary" type="submit" variant="contained">
          Ask!
        </Button>
      </div>
    </div>
  );
}
