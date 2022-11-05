import React, { useEffect, useState } from "react";
import axios from "axios";

import arrowLeft from "../../../assets/svg/arrowLeft.svg";
import arrowRight from "../../../assets/svg/arrowRight.svg";

import StorageImage from "../../imageRenderers/StorageImage";

import "./Mentors2.css";
const API_URL = "https://api.indiclaw.com/mentor/mentor";

function Mentors2() {
  const [currentMentor, setCurrentMentor] = useState({
    back: 0,
    current: 1,
    next: 2
  });

  const [mentors, setMentors] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(API_URL, {})
        .then((res) => {
          console.log(res.data.mentors);
          setMentors(res.data.mentors);
        })
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);

  const ImageSwipper = (adder) => {
    let mentorsLength = mentors.length;
    if (adder == -1) {
      switch (currentMentor.back) {
        case 0:
          setCurrentMentor({ back: mentorsLength - 1, current: 0, next: 1 });
          break;
        case mentorsLength - 1:
          setCurrentMentor({
            back: mentorsLength - 2,
            current: mentorsLength - 1,
            next: 0
          });
          break;
        case mentorsLength - 2:
          setCurrentMentor({
            back: mentorsLength - 3,
            current: mentorsLength - 2,
            next: mentorsLength - 1
          });
          break;
        default:
          setCurrentMentor({
            back: currentMentor.back - 1,
            current: currentMentor.current - 1,
            next: currentMentor.next - 1
          });
      }
    } else if (adder == 1) {
      switch (currentMentor.next) {
        case 0:
          setCurrentMentor({ back: mentorsLength - 1, current: 0, next: 1 });
          break;
        case mentorsLength - 1:
          setCurrentMentor({
            back: mentorsLength - 2,
            current: mentorsLength - 1,
            next: 0
          });
          break;
        case mentorsLength - 2:
          setCurrentMentor({
            back: 0,
            current: 1,
            next: 2
          });
          break;
        default:
          setCurrentMentor({
            back: currentMentor.back + 1,
            current: currentMentor.current + 1,
            next: currentMentor.next + 1
          });
      }
    }
  };

  return (
    <div className="mentor-container">
      <h2 className="mobile-mentor-heading">Mentors</h2>
      <div className="mentor-swiper">
        <img
          className="mentor-swipe-button mentor-back"
          src={arrowLeft}
          onClick={() => ImageSwipper(-1)}
        />
        <div className="mentor-images">
          <div className="mentor-image-container mentor-left-image">
            {mentors ? (
              <StorageImage
                path="mentor"
                imageId={mentors[currentMentor.back].imageId}
              />
            ) : null}
          </div>
          <div className="mentor-image-container mentor-center-image">
            {mentors ? (
              <StorageImage
                path="mentor"
                imageId={mentors[currentMentor.current].imageId}
              />
            ) : null}
          </div>
          <div className="mentor-image-container mentor-right-image">
            {mentors ? (
              <StorageImage
                path="mentor"
                imageId={mentors[currentMentor.next].imageId}
              />
            ) : null}
          </div>
        </div>
        <img
          className="mentor-swipe-button mentor-next"
          src={arrowRight}
          onClick={() => ImageSwipper(1)}
        />
      </div>
      <div className="mentor-description">
        <h2>Mentors</h2>
        <div className="mentor">
          <h3 className="mentor-name">
            {mentors ? mentors[currentMentor.current].name : null}
          </h3>
          <p className="mentor-role">
            {mentors ? mentors[currentMentor.current].designation : null}
          </p>
        </div>
        <div className="mentor-bio">
          {mentors ? mentors[currentMentor.current].description : null}
        </div>
      </div>
    </div>
  );
}

export default Mentors2;
