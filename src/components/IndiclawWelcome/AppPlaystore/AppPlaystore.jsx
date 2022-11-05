import React from "react";

import "./AppPlaystore.css";

import courseApp from "../../../assets/png/courseApp.png";
import playstoreDownloadNow from "../../../assets/png/playstoreDownloadNow.png";

function AppPlaystore() {
  const scrollToForm = () => {
    var elmnt = document.getElementById("form-registration");
    elmnt.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  };

  return (
    <>
      <div className="download-now-container">
        <div className="course-app-image-container">
          <img src={courseApp} alt="" />
        </div>
        <div className="details">
          <h2>Try us, before you waste time elsewhere.</h2>
          <p>
            Conceived and built by a team of alumni of various National Law
            Universities, the Indic Law app is an exclusive platform offering
            the best quality resources for Law Entrance Preparation. Unlike most
            products out there in the market, Indic Law is exclusive to law.
            It's built by people who have been through the same journey once,
            and they hold your hand throughout your journey to CLAT, and beyond.
          </p>
          <div className="download-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.indiclaw.learn"
              target="_blank"
              rel="noreferrer"
            >
              <img src={playstoreDownloadNow} alt="" />
            </a>
            <button onClick={scrollToForm} className="get_started">
              FREE DEMO
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppPlaystore;
