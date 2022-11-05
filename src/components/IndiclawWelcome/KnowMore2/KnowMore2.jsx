import React from "react";

import guidedCourse from "../../../assets/png/guided-course.png";
import selfPaced from "../../../assets/png/self-paced.png";

import "./KnowMore2.css";

function KnowMore2() {
  const scrollToForm = () => {
    var elmnt = document.getElementById("form-registration");
    elmnt.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  };

  return (
    <div id="know-more-container">
      <div className="know-more-card know-more-card1">
        <div className="img-container">
          <img src={selfPaced} alt="" />
        </div>
        <div className="know-more-details">
          <div className="know-more-heading-container">
            <h2 className="know-more-heading main">Self-paced</h2>
            <h2 className="know-more-heading">Courses</h2>
          </div>
          <p>
            With high definition recorded lectures and extensive mock exams,
            learn at your convenience and pace.
          </p>
          <button onClick={scrollToForm} className="know-more-button">
            Know More
          </button>
        </div>
      </div>
      <div className="know-more-card know-more-card2">
        <div className="img-container">
          <img src={guidedCourse} alt="" />
        </div>
        <div className="know-more-details">
          <div className="know-more-heading-container">
            <h2 className="know-more-heading main">Guided</h2>
            <h2 className="know-more-heading">Courses</h2>
          </div>
          <p>
            Let’s simulate a classroom with the best people who have cracked
            this exam before. Classes happen on Zoom/Google Meet.
          </p>
          <button className="know-more-button" onClick={scrollToForm}>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default KnowMore2;
