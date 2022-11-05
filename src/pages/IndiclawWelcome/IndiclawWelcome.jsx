import React, { useState } from "react";
import { Helmet } from "react-helmet";

import {
  Home2,
  KnowMore2,
  GetStarted,
  Youtube2,
  AppPlaystore,
  Mentors2,
  Courses2,
  ExpertInstructors2,
  Form2,
  LandingpageNav
} from "../../components";

import "./IndiclawWelcome.css";

import coaches from "../../assets/png/coaches.png";
import whatsapp from "../../assets/svg/IndiclawWelcome/whatsapp.svg";
import logo from "./img/logoAsset-1.svg";
import test from "./img/images/test.png";
import notepad from "./img/images/notepad.png";
import hired from "./img/images/hired.png";
import mobileMock from "./img/images/mobile-mock.png";
import googlePlayIcon from "./img/images/google-play-icon.png";

// {/* <Home2 />
// <KnowMore2 />
// <AppPlaystore />
// <ExpertInstructors2 />
// <Courses2 />
// <Mentors2 />
// <Youtube2 />
// <Form2 />
// <GetStarted /> */}

//  <div className="popActive">
//           <nav className="">
//             <div className="container">
//               <div className="brand">
//                 <img src={logo} />
//               </div>
//               <div className="menu">
//                 <a href="#">Digest</a>
//                 <a href="#">CLAT</a>
//                 <a href="#">Blog</a>
//                 <a href="#">About Us</a>
//                 <a href="#">Join Us</a>
//                 <a href="#">People</a>

//                 <span
//                   id="hamburger"
//                   style={{ fontSize: "30px", cursor: "pointer" }}
//                   onclick="openNav()"
//                 >
//                   &#9776;
//                 </span>
//               </div>
//             </div>
//           </nav>

//         </div>
// {/* <section className="mograph-form">
//           <div className="container">
//             <div className="div2">
//               {/*  */}
//               <iframe
//                 width="100%"
//                 src="https://www.youtube.com/embed/rRJ0ZGlecO0"
//                 title="YouTube video player"
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowfullscreen
//               ></iframe>
//             </div>
//             <div className="div2">
//               <div className="form">
//                 <h2>Register Now</h2>
//                 <form>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Enter your name"
//                   />
//                   <br />
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Enter your email"
//                   />
//                   <br />
//                   <input
//                     type="tel"
//                     id="tel"
//                     name="tel"
//                     placeholder="Enter mobile no."
//                   />
//                   <br />
//                   <select name="state" id="state" className="form-control">
//                     <option value="Andhra Pradesh">Andhra Pradesh</option>
//                     <option value="Andaman and Nicobar Islands">
//                       Andaman and Nicobar Islands
//                     </option>
//                     <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//                     <option value="Assam">Assam</option>
//                     <option value="Bihar">Bihar</option>
//                     <option value="Chandigarh">Chandigarh</option>
//                     <option value="Chhattisgarh">Chhattisgarh</option>
//                     <option value="Dadar and Nagar Haveli">
//                       Dadar and Nagar Haveli
//                     </option>
//                     <option value="Daman and Diu">Daman and Diu</option>
//                     <option value="Delhi">Delhi</option>
//                     <option value="Lakshadweep">Lakshadweep</option>
//                     <option value="Puducherry">Puducherry</option>
//                     <option value="Goa">Goa</option>
//                     <option value="Gujarat">Gujarat</option>
//                     <option value="Haryana">Haryana</option>
//                     <option value="Himachal Pradesh">Himachal Pradesh</option>
//                     <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//                     <option value="Jharkhand">Jharkhand</option>
//                     <option value="Karnataka">Karnataka</option>
//                     <option value="Kerala">Kerala</option>
//                     <option value="Madhya Pradesh">Madhya Pradesh</option>
//                     <option value="Maharashtra">Maharashtra</option>
//                     <option value="Manipur">Manipur</option>
//                     <option value="Meghalaya">Meghalaya</option>
//                     <option value="Mizoram">Mizoram</option>
//                     <option value="Nagaland">Nagaland</option>
//                     <option value="Odisha">Odisha</option>
//                     <option value="Punjab">Punjab</option>
//                     <option value="Rajasthan">Rajasthan</option>
//                     <option value="Sikkim">Sikkim</option>
//                     <option value="Tamil Nadu">Tamil Nadu</option>
//                     <option value="Telangana">Telangana</option>
//                     <option value="Tripura">Tripura</option>
//                     <option value="Uttar Pradesh">Uttar Pradesh</option>
//                     <option value="Uttarakhand">Uttarakhand</option>
//                     <option value="West Bengal">West Bengal</option>
//                   </select>
//                   <br />
//                   <input type="submit" value="Register now" />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section> */}

{
  /* <section className="banner">
          <h1>
            Preparing for Law?
            <br />
            Here is a better way!
          </h1>
          <p>
            We are a bunch of alumni of National Law Universities teaming up
            with a few amazing teachers to build the best platform to prepare
            for CLAT.{" "}
          </p>

          <div className="mainBtn-parent">
            <div className="mainBtn-wrap">
              <a href="#" className="mainBtn green borderless">
                Download the App
              </a>
            </div>
            <div className="mainBtn-wrap">
              <a href="#" className="mainBtn">
                <img src="img/whatsAppAsset-2.svg" alt="whatsApp-icon" />
                Free Demo
              </a>
            </div>
          </div>

          <img
            className="faculty-photos"
            src="img/faculty-img.png"
            alt="indic-law-faculty-photo"
          />
        </section>

        <section className="coaching container">
          <h2>
            Coaching for CLAT
            <br />
            <span className="h2-child">and other Law entrance Exam</span>
          </h2>
          <p>
            We are trying to fix what’s wrong with most coaching platforms. With
            limited time at hand, what’s more important is what you don’t study.
            With the new CLAT pattern, what’s important is how fast you read. We
            kept this in mind while we developed our platform.
          </p>

          <div className="course-images">
            <a href="#" className="course-wrap">
              <div className="course self">
                <h3>
                  Self Paced
                  <br />
                  Course
                </h3>
              </div>
            </a>
            <a href="#" className="course-wrap">
              <div className="course guided">
                <h3>
                  Guided
                  <br />
                  Course
                </h3>
              </div>
            </a>
          </div>

          <div className="mainBtn-parent">
            <a href="#" className="btns green">
              Download Now
            </a>
            <a href="#" className="btns">
              Learn More
            </a>
          </div>
        </section>

        <h2>Why Indic Law?</h2>
        <p>
          Are you worried? Anxious? Trust us, we’ve been there. People at Indic
          Law are the products of National Law Universities and they have aced
          this test already. We are there to handhold you in every step.
        </p>
        <div className="container icon-wrapper">
          <div className="icon-set">
            <div className="icon">
              <img src="img/images/notepad.png" />
            </div>
            <div className="icon-description">
              <p className="icon-heading">Premium Handouts</p>
              <p>Exam oriented concise handouts from experts.</p>
            </div>
          </div>

          <div className="icon-set">
            <div className="icon">
              <img src="img/images/hired.png" />
            </div>
            <div className="icon-description">
              <p className="icon-heading">Expert Coaches</p>
              <p>Coaches from legal backround with expertise.</p>
            </div>
          </div>

          <div className="icon-set">
            <div className="icon">
              <img src="img/images/test.png" />
            </div>
            <div className="icon-description">
              <p className="icon-heading">30+ Mock Exams</p>
              <p>Exam oriented concise handouts from experts</p>
            </div>
          </div>
        </div>

        <section className="mobile-mockup-wrap">
          <div className="container mobile-mock">
            <div className="mockup-side">
              <h2>
                Best Place for Law
                <br />
                Entrance Coaching
              </h2>
              <p>
                Conceived and built by a team of alumni of various National Law
                Universities, the Indic Law app is an exclusive platform
                offering the best quality resources for Law Entrance
                Preparation. Unlike most products out there in the market, Indic
                Law is exclusive to law. It's built by people who have been
                through the same journey once, and they hold your hand
                throughout your journey to CLAT, and beyond
              </p>

              <div className="btn-wrap">
                <div className="btn-parent">
                  <a href="#" className="btn">
                    <img src="img/images/google-play-icon.png" />
                  </a>
                </div>
                <div className="btn-parent">
                  <a href="#" className="btn learn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="mockup">
              <img src="img/images/mobile-mock.png" alt="indic-law-app-mock" />
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2>Testimonials</h2>
          <p>
            We are taking law to the people. We help you prepare for law
            entrance exams, we help you understand the law even if you are not a
            lawyer.
          </p>

          <div style={{ position: "relative", height: "500px", width: "100%" }}>
            <section id="testim" className="testim">
              <div className="wrap">
                <span
                  id="right-arrow"
                  className="arrow right fa fa-chevron-right"
                ></span>
                <span
                  id="left-arrow"
                  className="arrow left fa fa-chevron-left "
                ></span>
                <ul id="testim-dots" className="dots">
                  <li className="dot active"></li>
                  <li className="dot"></li>
                  <li className="dot"></li>
                  <li className="dot"></li>
                  <li className="dot"></li>
                </ul>
                <div id="testim-content" className="cont">
                  <div className="active">
                    <div className="img">
                      <img src="img/images/student.png" alt="" />
                    </div>
                    <h2>Lorem P. Ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>

                  <div>
                    <div className="img">
                      <img src="img/images/student.png" alt="" />
                    </div>
                    <h2>Mr. Lorem Ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>

                  <div>
                    <div className="img">
                      <img src="img/images/student.png" alt="" />
                    </div>
                    <h2>Lorem Ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>

                  <div>
                    <div className="img">
                      <img src="img/images/student.png" alt="" />
                    </div>
                    <h2>Lorem De Ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>

                  <div>
                    <div className="img">
                      <img src="img/images/student.png" alt="" />
                    </div>
                    <h2>Ms. Lorem R. Ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <script src="https://use.fontawesome.com/1744f3f671.js"></script>
          </div>
        </section>

        <section className="mograph-form">
          <div className="container">
            <div className="div2">
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/rRJ0ZGlecO0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="div2">
              <div className="form">
                <h2>Register Now</h2>
                <form>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <br />
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="Enter mobile no."
                  />
                  <br />
                  <select name="state" id="state" className="form-control">
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                  <br />
                  <input type="submit" value="Register now" />
                </form>
              </div>
            </div>
          </div>
        </section> */
}

function AppPage() {
  const [popActive, setPopActive] = useState(false);

  return (
    <>
      <Helmet>
        <title>CLAT 2021 Coaching | Indic Law</title>
      </Helmet>
      <div className="AppPage">
        <LandingpageNav />

        {popActive ? <div>form </div> : null}
      </div>

      <script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=3868d631-6b25-4ea3-afbe-dde06bb2e672"
      >
        {" "}
      </script>
    </>
  );
}

export default AppPage;
