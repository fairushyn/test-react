import React, { useEffect, useState } from "react";
import axios from "axios";

import arrowLeft from "../../../assets/svg/arrowLeft.svg";
import arrowRight from "../../../assets/svg/arrowRight.svg";

import StorageImage from "../../imageRenderers/StorageImage";

import "./ExpertInstructors.css";

const API_URL = "https://api.indiclaw.com/mentor/coach";


function ExpertInstructors() {
  const [currentCoach, setCurrentCoach] = useState({
    back: 0,
    current: 1,
    next: 2
  });

  const [coaches, setCoaches] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(API_URL, {})
        .then((res) => {
          setCoaches(res.data.coaches);
        })
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);

  const ImageSwipper = (adder) => {
    let coachesLength = coaches.length;
    if (adder == -1) {
      switch (currentCoach.back) {
        case 0:
          setCurrentCoach({ back: coachesLength - 1, current: 0, next: 1 });
          break;
        case coachesLength - 1:
          setCurrentCoach({
            back: coachesLength - 2,
            current: coachesLength - 1,
            next: 0
          });
          break;
        case coachesLength - 2:
          setCurrentCoach({
            back: coachesLength - 3,
            current: coachesLength - 2,
            next: coachesLength - 1
          });
          break;
        default:
          setCurrentCoach({
            back: currentCoach.back - 1,
            current: currentCoach.current - 1,
            next: currentCoach.next - 1
          });
      }
    } else if (adder == 1) {
      switch (currentCoach.next) {
        case 0:
          setCurrentCoach({ back: coachesLength - 1, current: 0, next: 1 });
          break;
        case coachesLength - 1:
          setCurrentCoach({
            back: coachesLength - 2,
            current: coachesLength - 1,
            next: 0
          });
          break;
        case coachesLength - 2:
          setCurrentCoach({
            back: 0,
            current: 1,
            next: 2
          });
          break;
        default:
          setCurrentCoach({
            back: currentCoach.back + 1,
            current: currentCoach.current + 1,
            next: currentCoach.next + 1
          });
      }
    }
  };

  return (
    <div className="coach-container">
      <h2 className="coach-heading">Expert Instructors</h2>
      <div className="coach-swiper">
        <img
          className="coach-swipe-button coach-back"
          src={arrowLeft}
          onClick={() => ImageSwipper(-1)}
        />
        <div className="coach-images">
          <div className="coach-description mentor1">
            <div className="coach-image-container ">
              {coaches ? (
                <StorageImage
                  path="mentor"
                  imageId={coaches[currentCoach.back].imageId}
                />
              ) : null}
            </div>
            <div className="coach">
              <h3 className="coach-name">
                {coaches ? coaches[currentCoach.back].name : null}
              </h3>
              <p className="coach-role">
                {coaches ? coaches[currentCoach.back].designation : null}
              </p>
            </div>
            <div className="coach-bio">
              {coaches ? coaches[currentCoach.back].description : null}
            </div>
          </div>

          <div className="coach-description mentor2">
            <div className="coach-image-container ">
              {coaches ? (
                <StorageImage
                  path="mentor"
                  imageId={coaches[currentCoach.current].imageId}
                />
              ) : null}
            </div>
            <div className="coach">
              <h3 className="coach-name">
                {coaches ? coaches[currentCoach.current].name : null}
              </h3>
              <p className="coach-role">
                {coaches ? coaches[currentCoach.current].designation : null}
              </p>
            </div>
            <div className="coach-bio">
              {coaches ? coaches[currentCoach.current].description : null}
            </div>
          </div>

          <div className="coach-description mentor3">
            <div className="coach-image-container ">
              {coaches ? (
                <StorageImage
                  path="mentor"
                  imageId={coaches[currentCoach.next].imageId}
                />
              ) : null}
            </div>
            <div className="coach">
              <h3 className="coach-name">
                {coaches ? coaches[currentCoach.next].name : null}
              </h3>
              <p className="coach-role">
                {coaches ? coaches[currentCoach.next].designation : null}
              </p>
            </div>
            <div className="coach-bio">
              {coaches ? coaches[currentCoach.next].description : null}
            </div>
          </div>
        </div>
        <img
          className="coach-swipe-button coach-next"
          src={arrowRight}
          onClick={() => ImageSwipper(1)}
        />
      </div>
    </div>
  );
}

export default ExpertInstructors;
