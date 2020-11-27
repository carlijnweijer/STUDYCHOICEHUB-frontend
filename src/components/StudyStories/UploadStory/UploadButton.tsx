import { Button } from "@material-ui/core";
import React, { useState } from "react";

export default function UploadButton() {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const hiddenFileInput: any = React.useRef(null);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    hiddenFileInput.current.click();
  };

  const handleFileInputChange = (event: any) => {
    const file: any = event.target.files[0];
    console.log("file is", file);
    setSelectedFile(file);
  };

  console.log("selected file", selectedFile);

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
