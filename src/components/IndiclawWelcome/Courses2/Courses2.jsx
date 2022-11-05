import React from "react";

import "./Courses2.css";
import courseCoachAmrita from "../../../assets/png/courseCoachAmrita.png";

function Courses2() {
  return (
    <div className="courses-container">
      <h2>Course Details</h2>
      <div className="indicLaw-course-details">
        <div className="indicLaw-course-contents course-content1">
          <div className="indicLaw-course-content">
            <h3>Indic Law Ultimate:</h3>
            <p>
              Your guide to tackling reading comprehension and passage based
              questions for CLAT and other law entrance exams.
            </p>
          </div>
          <div className="indicLaw-course-content">
            <h3>Pro Reader:</h3>
            <p>
              A programme that makes you a 'pro' at tackling passage-based
              questions for CLAT and all law entrance exams
            </p>
          </div>
          <div className="indicLaw-course-content">
            <h3>Know your facts:</h3>
            <p>
              The newspaper doesn't make sense, and you don't know where to
              start from? We've got you covered.
            </p>
          </div>
          <div className="indicLaw-course-content">
            <h3>The Logic:</h3>
            <p>
              We mined the previous years' questions and studied the new CLAT
              pattern to develop the best course to equip you well for the
              ‘Logical Reasoning’ part of the test.
            </p>
          </div>
          <div className="indicLaw-course-content">
            <h3>Math Wiz:</h3>
            <p>
              Here at Indic Law, we understand your troubles with maths and have
              developed a course to make you ace it.
            </p>
          </div>
        </div>

        <div className="coaches-image-container">
          <img src={courseCoachAmrita} alt="Coach Image Not Found" />
        </div>

        <div className="indicLaw-course-contents course-content2">
          <div className="indicLaw-course-content">
            <h3>Mind Your Language:</h3>
            <p>
              Speak to impress with our ultimate language course, practice your
              skills with our esteemed Coaches.
            </p>
          </div>
          <div className="indicLaw-course-content">
            <h3>The Legal Mind:</h3>
            <p>
              Comprehensive course to sharpen your legal aptitude and knowledge!
            </p>
          </div>
          <div className="indicLaw-course-content">
            <h3>Indic Law Ultimate Mock Series:</h3>
            <p>
              The Ultimate Mock Series brings you topic-specific tests on each
              of the 5 law entrance subjects, along with exclusive mock tests
              for CLAT and other Law entrance exams
            </p>
          </div>
          <div className="indicLaw-course-content">
            <h3>Indic Law CLAT Mock Series:</h3>
            <p>
              CLAT Mock Series brings Mock tests based on CLAT pattern to the
              determined and focused group of law aspirants.
            </p>
          </div>
          <div className="indicLaw-course-content">
            <h3>Indic Law Ultimate Test Series:</h3>
            <p>
              The Ultimate Test Series, for those who wish to practice their
              skills for CLAT and other Law Entrances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses2;
