import React from "react";

import "./Features.css";

import handout from "../../../assets/svg/clat/handout.svg";
import idea from "../../../assets/svg/clat/idea.svg";
import progress from "../../../assets/svg/clat/progress.svg";
import videoLectures from "../../../assets/svg/clat/video_lectures.svg";
import doubtClearing from "../../../assets/svg/clat/doubt_clearing.svg";
import mockTest from "../../../assets/svg/clat/mock_test.svg";

import courseApp from "../../../assets/png/courseApp.png";
import iosDownloadNow from "../../../assets/png/iosDownloadNow.png";
import playstoreDownloadNow from "../../../assets/png/playstoreDownloadNow.png";

function Features() {
  return (
    <>
      <div className="features-grid">
        <div className="features-container">
          <div className="feature">
            <img src={videoLectures} alt="" />
            <p>Video Lectures</p>
          </div>
          <div className="feature">
            <img src={handout} alt="" />
            <p>Descriptive Hand-outs</p>
          </div>
          <div className="feature">
            <img src={progress} alt="" />
            <p>Progress Tracker</p>
          </div>
          <div className="feature">
            <img src={idea} alt="" />
            <p>AT pattern - Tips</p>
          </div>
          <div className="feature">
            <img src={mockTest} alt="" />
            <p>Weekly Mock Tests</p>
          </div>
          <div className="feature">
            <img src={doubtClearing} alt="" />
            <p>Doubt clearing sessions</p>
          </div>
        </div>
      </div>
      <div className="download-now-container">
        <div className="course-app-image-container">
          <img src={courseApp} alt="" />
        </div>
        <div className="details">
          <h2>Best place for CLAT Entrance Coaching</h2>
          <p>
            Conceived and built by a team of alumni of various National Law
            Universities, the Indic Law app is an exclusive platform offering
            the best quality resources for Law Entrance Preparation. Unlike most
            products out there in the market, Indic Law is exclusive to law.
            It's built by people who have been through the same journey once,
            and they hold your hand throughout your journey to CLAT, and beyond
          </p>
          <div className="download-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.indiclaw.learn"
              target="_blank"
              rel="noreferrer"
            >
              <img src={playstoreDownloadNow} alt="" />
            </a>
            {/* <a
              href="https://play.google.com/store/apps/details?id=com.indiclaw.learn"
              target="_blank"
              rel="noreferrer"
            >
              <img src={iosDownloadNow} alt="" />
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
