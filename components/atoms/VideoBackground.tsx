import React from "react";

const VideoBackground = () => (
  <video
    autoPlay
    muted
    loop
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/videos/park-intro.mp4"
  />
);

export default VideoBackground;
