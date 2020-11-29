import { Button } from "@material-ui/core";

import React, { useState } from "react";

export default function UploadButton() {
  const [selectedFile, setSelectedFile] = useState("");

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

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqxz3kw8u/video/upload",
      {
        method: "POST",
        body: data,
      }
    );

    console.log("what is response fetch", res);

    const video = await res.json();

    setSelectedFile(video.secure_url);
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
