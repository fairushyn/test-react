import React, { Component } from "react";
//import { Link } from 'react-router-dom'
import "./GetStarted.css";
import { Button } from "@material-ui/core/";
import { GrAndroid, GrApple } from "react-icons/gr";
//import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class GetStarted extends Component {
  render() {
    return (
      <div>
        <div className="getstarted" id="download">
          <h1>Get Started Now</h1>
          <h5>What's stopping you? It's free!</h5>
          <div className="gs-Container">
            <a
              href="https://play.google.com/store/apps/details?id=com.indiclaw.learn"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="contained"
                startIcon={<GrAndroid className="icons" />}
                style={{ background: "#00B3A6" }}
              >
                DOWNLOAD FOR ANDROID
              </Button>
            </a>

            <a href="">
              <Button
                variant="contained"
                startIcon={<GrApple className="icons" />}
                style={{ background: "#26284C" }}
                disabled
              >
                DOWNLOAD FOR IPHONE
              </Button>
            </a>

            {/*<Grid item xs={1}>
                            <p className="divider"></p>
                        </Grid>
                        <Grid item xs={3} className="gs-Grid">
                            <Grid item xs={11} className="btnContainer" style={{border:'3.4px solid white'}}>
                                <Link to="/digest">
                                    <Button
                                        variant="outlined"
                                        className="gs-Btn"
                                        style={{ border: 'none',height:'68px'}}
                                    >
                                        GO TO OUR WEB PORTAL
                                </Button>
                                </Link>     
                            </Grid>                       
                        </Grid>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;
