import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import StorageImage from "../../imageRenderers/StorageImage";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import { VscCircleOutline, VscCircleFilled } from "react-icons/vsc";
import stripHtml from '../../../utils/stripHtml';
import TextTruncate from 'react-text-truncate';


import './Slideshow.css'

const API_URL = 'https://api.indiclaw.com/digest/';

function Slideshow() {

  const [digest, setDigest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get(API_URL)
      .then(res => {
        setDigest(res.data.digests);
      })
      .catch(err => console.log(err))
    }

    fetchData();    
  }, [])

  const [current, setCurrent] = useState(0);
  const length = digest.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(digest) || digest.length <= 0) {
    return null;
  }

  const url = (type, id) => {
    if (type === 'Bills/Laws') {
      return (
        '/digest/BillsLaws/' + id 
      );
    }
    else {
      return (
        '/digest/' + type + '/' + id 
      )
    }
  }
  const renderSliderFooter = (type,id) => {

    switch (type) {
      case 'CurrentAffairs':
        return (
          <div className="slider_footer">
            <Link to={url(type,id) + '/1'}><h5>NEWS</h5></Link>
            <Link to={url(type,id) + '/2'}><h5>CONTEXT</h5></Link>
            <Link to={url(type,id) + '/3'}><h5>LEARNINGS</h5></Link>
          </div>
        );

      case 'Bills/Laws':
        return (
          <div className="slider_footer">
            <Link to={url(type,id) + '/1'}><h5 >NEWS</h5></Link>
            <Link to={url(type,id) + '/2'}><h5>CONTEXT</h5></Link>
            <Link to={url(type,id) + '/3'}><h5>FEATURES</h5></Link>
            <Link to={url(type,id) + '/4'}><h5>DIALOGUE</h5></Link>
          </div>
        );

      case 'Judgements':
        return (
          <div className="slider_footer">
            <Link to={url(type,id) + '/1'}><h5 >NEWS</h5></Link>
            <Link to={url(type,id) + '/2'}><h5>CONTEXT</h5></Link>
            <Link to={url(type,id) + '/3'}><h5>LAWS</h5></Link>
            <Link to={url(type,id) + '/4'}><h5>RATIO</h5></Link>
          </div>
        );

      case 'History':
        return (
          <div className="slider_footer">
            <Link to={url(type,id) + '/1'}><h5 >NEWS</h5></Link>
            <Link to={url(type,id) + '/2'}><h5>CONTEXT</h5></Link>
            <Link to={url(type,id) + '/3'}><h5>LEARNINGS</h5></Link>
          </div>
        );

      default:
        return;
    }
  }

  return (
    <div className='slideshow'>
      <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} />
      <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />
      {digest.map((slide, index) => {
        return (
            <div className={index === current ? 'slide active' : 'slide'} >
              {index === current && (
                <Link to={url(slide.digestType, slide._id) + '/1'} >
                  <div className="slider">
                    <div className="sliderLeft">
                      <div className="overlay_slideshow"></div>
                      <StorageImage path="digest" imageId={slide.imageId}/>
                      <h4>{slide.title}</h4>
                    </div>
                    <div className="sliderRight">
                      <div className="slider_header">
                        <h1>{slide.title}</h1>
                      </div>
                      <div className="slider_text">
                        <p>
                          <TextTruncate
                            line={4}
                            text={stripHtml(slide.description)}
                            truncateText=" ..."             
                          />           
                        </p>
                      </div>
                      {renderSliderFooter(slide.digestType, slide._id)}
                    </div>
                  </div>
                </Link>

              )}
            </div>

        );
      })}

    </div>
  );
};


export default Slideshow
