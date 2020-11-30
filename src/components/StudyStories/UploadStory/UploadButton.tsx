import { Button } from "@material-ui/core";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postStudyStory } from "../../../store/studyStory/actions";
import { selectUser } from "../../../store/user/selectors";

export default function UploadButton() {
  const dispatch = useDispatch();

  const hiddenFileInput: any = React.useRef(null);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    hiddenFileInput.current.click();
  };

  const handleFileInputChange = async (event: any) => {
    const file: any = event.target.files[0];
    console.log("file is", file);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "studychoicehub");

    dispatch(postStudyStory(data));
  };

  return (
    <form>
      <input
        accept="video/*"
        ref={hiddenFileInput}
        // id="contained-button-file"
        multiple
        type="file"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="secondary"
          component="span"
          onClick={handleClick}
        >
          Upload
        </Button>
      </label>
    </form>
  );
}
