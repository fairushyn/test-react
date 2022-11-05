import React from "react";
import ReactPlayer from "react-player";

import "./Youtube.css";

function Youtube() {
  return (
    <div className="video-container">
      <h2> Want to see How they Teach? </h2>
      <div className="video">
        <ReactPlayer
          controls
          width={window.innerWidth < 520 ? 350 : 550}
          height={window.innerWidth < 520 ? 200 : 300}
          url="https://www.youtube.com/watch?v=b_V7ZiOuwo8"
        />
      </div>
    </div>
  );
}

export default Youtube;
