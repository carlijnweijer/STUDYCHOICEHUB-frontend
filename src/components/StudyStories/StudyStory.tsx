import React from "react";
import "./StudyStory.css";
import VideoHeader from "./VideoHeader";

export default function StudyStory(props: any) {
  return (
    <div className="studyVideo">
      <VideoHeader />
      <video
        width="320"
        height="240"
        controls
        loop
        className="studyVideoPlayer"
      >
        <source src={props.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
