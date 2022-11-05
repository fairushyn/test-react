import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Footer } from "./components";
import {
  Digest,
  FourNotFour,
  Terms,
  About,
  BlogsPage,
  AppPage,
  LandingPage,
  Privacy,
  CommunityPage,
  Copyright,
  Cancellation,
  Team,
  TeamProfile,
  Faq,
  Contact,
  Referral,
  IndiclawWelcome
} from "./pages";
import {
  NavigationBar,
  Category,
  SinglePost,
  LandingpageNav,
  SingleBlog,
  OtpVerification
} from "./components/index";
import history from "./utils/history";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  return (
    <Router history={history}>
      <div className="app">
        <ScrollToTop />

        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/otp-verification/:phone">
            <LandingpageNav />
            <OtpVerification />
          </Route>
          <Route exact path="/digest" component={Digest} />
          <Route exact path="/digest/:category">
            <NavigationBar />
            <Category />
          </Route>
          <Route exact path="/digest/:category/:post_id/:content_no">
            <NavigationBar />
            <SinglePost />
          </Route>

          <Route exact path="/clat-online-coaching">
            <AppPage />
          </Route>

          <Redirect exact from="/blog" to="/blog/all" />
          <Route exact path="/blog/:blog_category">
            <BlogsPage />
          </Route>
          <Route exact path="/blog/:blog_category/:blogid">
            <LandingpageNav />
            <SingleBlog />
          </Route>

          <Route exact path="/community">
            <CommunityPage />
          </Route>

          <Route exact path="/people">
            <Team />
          </Route>

          <Route exact path="/people/:team_id">
            <TeamProfile />
          </Route>

          <Route exact path="/terms" component={Terms} />

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/copyright">
            <Copyright />
          </Route>

          <Route exact path="/refunds">
            <Cancellation />
          </Route>

          <Route exact path="/faq">
            <Faq />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/referral-terms">
            <Referral />
          </Route>

          <Route exact path="/privacy" component={Privacy} />

          {/* <Route exact path="/search"  component={SearchPage} />  */}

          {/* <Route exact path="/contact"  component={Contact} />  */}

          {/* <Route exact path="/signup" component={SignUp} />
            <Routeexact path="/login" component={Login} /> */}

          <Route exact path="/welcome-to-indicLaw">
            <IndiclawWelcome />
          </Route>

          <Route component={FourNotFour} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
