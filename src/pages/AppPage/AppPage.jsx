import React from "react";
import { Helmet } from "react-helmet";

import {
  Home,
  KnowMore,
  GetStarted,
  Youtube,
  Features,
  Mentors,
  Courses,
  ExpertInstructors,
  Form,
  LandingpageNav
} from "../../components";

function AppPage() {
  return (
    <>
      <Helmet>
        <title>Indic Law - App</title>
      </Helmet>
      <div className="AppPage">
        <LandingpageNav />
        <Home />
        <KnowMore />
        <Features />
        <ExpertInstructors />
        <Courses />
        <Mentors />
        <Youtube />
        <Form />
        <GetStarted />
      </div>
    </>
  );
}

export default AppPage;
