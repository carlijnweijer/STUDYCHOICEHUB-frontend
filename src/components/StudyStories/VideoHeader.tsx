import { Typography } from "@material-ui/core";
import "./VideoHeader.css";
import React from "react";

export default function VideoHeader(props: any) {
  return (
    <div className="videoHeader">
      <Typography>Study with me! {props.header}</Typography>
    </div>
  );
}
