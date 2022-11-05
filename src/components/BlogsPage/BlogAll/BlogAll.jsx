import React, { useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'

import blogCategory from '../../../assets/svg/blogCategory.svg'
import category_white from '../../../assets/svg/category_white.svg'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import clock from '../../../assets/svg/clock.svg'
import StorageImage from "../../imageRenderers/StorageImage";
import toDate from '../../../utils/toDate';

import './BlogAll.css'
import { Grid } from '@material-ui/core'

const delay=4500; 

const API_URL = 'https://api.indiclaw.com/';

export default function BlogBody() {

    const [current, setCurrent] = useState(0);
    const timeoutRef = React.useRef(null); 
    const [blogs, setBlogs] = useState([]);

    const route =useParams();

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        async function fetchData() {
            await axios.get(API_URL + 'blog')
                .then(res => {
                    setBlogs(res.data.blog);
                    console.log(res.data.blog);
                })
                .catch(err => console.log(err))
        }

        fetchData();
    }, [route.blog_category]);

    useEffect(() => {
        resetTimeout();

        timeoutRef.current = setTimeout(()=>
            setCurrent((prevCurrent) => 
                prevCurrent === 5 ? 0 : prevCurrent + 1
            ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [current])


    const dots = blogs.slice(0,6).map((_, index)=>{
        return(
            <div className={`circle${index === current ? " activeCircle" : ""}`} onClick={()=>setCurrent(index)}></div>
        );
    })

    const Slider = blogs.slice(0,6).map((slide, index) => {
        return(
            <div className={index === current ? 'blogslide blogactive' : 'blogslide'} key={slide._id}>                
                { index===current &&                                     
                    (   <div className="slide_body">
                            <div className="slide_image">
                                <StorageImage path="blog" imageId={slide.imageId} />
                                <div className="slide_overlay"></div>
                            </div>
                            <div className="slide_text">
                                <div className="" style={{ display: 'flex',marginBottom:'1em'}}>
                                    {dots}
                                </div>
                                <Link to={"/blog/" + slide.category + "/" + slide._id}>
                                    <h3>{slide.title}</h3>
                                    <div className="slide_bottom">
                                        <img src={category_white} alt="" style={{height:'15px',marginTop:'3px'}} /> <p>{slide.category}</p>
                                        <p className="blog_divider">|</p>
                                        <CalendarTodayIcon style={{ height: '20px',color:'white' }} /><p>{toDate(slide.dateCreated)}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    })

    const AllBoxes = (category) =>{
        const blogcatUrl = "/blog/" + category;
        return(
            <div className="Box">
                <div className="boxHeader">
                    <div className="_container">
                        <h3>{category}</h3>
                        <div className="boxheading_underline"></div>
                    </div>
                    <Link to={blogcatUrl}><p>More</p></Link>                    
                </div>
                {category !== 'Interviews' && (
                    <Grid container>
                        {blogs.filter(x => x.category===category).slice(0,2).map((slide, index) => {
                            return (
                                <Grid xs={12} lg={5} className={index === 0 ? 'big_blog even' : 'big_blog odd'} key={slide._id}>
                                    <Link to={"/blog/"+slide.category+"/"+slide._id}>
                                            <StorageImage path="blog" imageId={slide.imageId} />
                                            <h4>{slide.title}</h4>
                                            <h6>{slide.description}</h6>
                                            <div className="row_bottom">
                                                <img src={blogCategory} alt="blog page" style={{ height: '14px', margin: '1px 5px 0 0' }} /> <p>{slide.category}</p>
                                                <p className="blog_divider">|</p>
                                                <img src={clock} alt="blog page" style={{ height: '16px', marginRight: '5px' }} /><p>{toDate(slide.dateCreated)}</p>
                                            </div>
                                    </Link>
                                </Grid>
                            );
                        })}
                    </Grid>
                )}
                <Grid container>
                {blogs.filter(x => x.category===category).slice(2,6).map((slide)=>{
                        return(
                            <Grid xs={12} sm={6} className="small_blog" key={slide._id} >
                                <Link to={"/blog/" + slide.category + "/" + slide._id}>
                                    <StorageImage path="blog" imageId={slide.imageId} />
                                    <div className="blog_rightside">
                                        <h4>{slide.title}</h4>
                                        <div className="row_bottom">
                                            <img src={clock} alt="blog page" style={{ height: '15px', marginRight: '3px' }} /><p>{toDate(slide.dateCreated)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </Grid>
                        );
                })}
                </Grid>
            </div>
        );
    }

    return (
        <div className="BlogBody">
            <div className="Slider">
                {Slider}
            </div>
            <div className="">
                {AllBoxes('NewUpdates')}
                {AllBoxes('Opportunities')}
                {AllBoxes('Interviews')}
            </div>
        </div>
    )
}
