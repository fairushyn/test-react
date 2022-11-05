import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import { Button, Grid } from "@material-ui/core/";
import { Link } from "react-router-dom";

//import arrowRight from '../../../assets/svg/arrowRight.svg'
//import arrowLeft from '../../../assets/svg/arrowLeft.svg'
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import "./CurrentAffair.css";
import SingleCard from "./SingleCard";
import MobileCard from "./MobileCard";

const API_URL = "https://api.indiclaw.com/digest/search";

function CurrentAffair() {
  const [digest, setDigest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(API_URL, {
          params: {
            types: "CurrentAffairs"
          }
        })
        .then((res) => {
          //console.log(res.data.digest);
          setDigest(res.data.digest);
        })
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);

  const Cards1 = digest.slice(0, 6).map((item) => {
    const IndividualPost_url =
      "/digest/" + item.digestType + "/" + item._id + "/1";

    return (
      <Grid item xs={4} key={item._id}>
        <SingleCard
          text={item.title}
          img={item.imageId}
          IndividualPost_url={IndividualPost_url}
        />
      </Grid>
    );
  });

  const Cards2 = digest.slice(0, 7).map((item) => {
    const IndividualPost_url =
      "/digest/" + item.digestType + "/" + item._id + "/1";

    return (
      <Grid item xs={12} key={item._id}>
        <MobileCard
          text={item.title}
          img={item.imageId}
          IndividualPost_url={IndividualPost_url}
        />
      </Grid>
    );
  });

  const ref = useRef(null);

  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(true);

  const handleRight = () => {
    setRight(true);
    setLeft(false);
    ref.current.scrollLeft += 700;
  };

  const handleLeft = () => {
    setLeft(true);
    setRight(false);
    ref.current.scrollLeft -= 700;
  };

  return (
    <div className="currentAffair">
      <div className="ca_left" style={{ display: right ? "none" : "block" }}>
        <div className="ca_header">
          <h1>
            Current <br /> Affairs
          </h1>
        </div>
        <div className="ca_text">
          <h6>Get to know the latest happening around this field </h6>
        </div>
        <div className="ca_button">
          <Link to="/digest/CurrentAffairs">
            <Button color="primary">View All</Button>
          </Link>
        </div>
      </div>
      <IoIosArrowForward
        className="prevIcon"
        onClick={handleLeft}
        style={{ display: left ? "none" : "block" }}
      />
      <div className="ca_right" ref={ref}>
        <div>{Cards1}</div>
      </div>

      <IoIosArrowForward
        className="nextIcon"
        onClick={handleRight}
        style={{ display: right ? "none" : "block" }}
      />
      <div
        className="right_viewAll"
        style={{ display: left ? "none" : "block" }}
      >
        <Link to="/digest/CurrentAffairs">
          <IoArrowForwardOutline className="viewAll_icon" />
          <h3>View All</h3>
        </Link>
      </div>

      {/* <img src={arrowRight} alt="" className="nextIcon" onClick={handleRight} /> */}

      <div className="mob_header">
        <h3>Current Affairs</h3>
        <hr />
      </div>
      <div className="mob_cards">{Cards2}</div>
      <div className="mob_button">
        <Link to="/digest/CurrentAffairs">
          <Button color="primary">View All</Button>
        </Link>
      </div>
    </div>
  );
}

export default CurrentAffair;
