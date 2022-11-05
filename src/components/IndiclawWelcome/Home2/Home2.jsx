import { Button } from "@material-ui/core";
import React from "react";

import "./Home2.css";

import coaches from "../../../assets/png/coaches.png";
import whatsapp from "../../../assets/svg/IndiclawWelcome/whatsapp.svg";

function Home2() {
  return (
    <>
      <div className="home">
        <div className="home_body">
          <div className="bodyText">
            <h1>
              Preparing For Law? <br /> Here is a better way.
            </h1>
            <p>
              We are a bunch of alumni of National Law Universities teaming up
              with a few amazing teachers to build the best platform to prepare
              for CLAT.
            </p>
            <div className="home_buttons">
              <a
                href="https://play.google.com/store/apps/details?id=com.indiclaw.learn"
                target="_blank"
                rel="noreferrer"
              >
                <Button disableElevation className="get_started">
                  download the app
                </Button>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=918089720126&text=Hello%20IndicLaw.%20I'm%20interested%20in%20learning%20Law."
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  disableElevation
                  className="learn_more"
                >
                  <img src={whatsapp} alt="" />
                  <span>Learn More</span>
                </Button>
              </a>
            </div>
          </div>
          <div className="bodyImage">
            <img src={coaches} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2;
