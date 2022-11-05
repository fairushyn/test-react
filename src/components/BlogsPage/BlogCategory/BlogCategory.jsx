import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import category_white from '../../../assets/svg/category_white.svg'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import clock from '../../../assets/svg/clock.svg'
import blogCategory from '../../../assets/svg/blogCategory.svg'
import StorageImage from "../../imageRenderers/StorageImage";
import toDate from '../../../utils/toDate';
import stripHtml from '../../../utils/stripHtml';
import TextTruncate from 'react-text-truncate';


import './BlogCategory.css'
import { Grid } from '@material-ui/core'

const delay = 4500;

const API_URL = 'https://api.indiclaw.com/';

export default function BlogCategory({Category}) {

    const [current, setCurrent] = useState(0);
    const timeoutRef = React.useRef(null);
    const [blogs, setBlogs] = useState([]);
    
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(()=>{
        async function fetchData() {
            await axios.get(API_URL + 'blog')
                .then(res => {
                    setBlogs(res.data.blog);
                })
                .catch(err => console.log(err))
        }

        fetchData();

    },[Category])

    let categoryBlog = blogs.filter(blog => blog.category === Category);

    useEffect(() => {
        resetTimeout();

        timeoutRef.current = setTimeout(() =>
            setCurrent((prevCurrent) =>
                prevCurrent === length - 1 ? 0 : prevCurrent + 1
            ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [current])

    const length = categoryBlog.length;

    const dots = categoryBlog.map((slide, index) => {
            return (
                <div className={`circle${index === current ? " activeCircle" : ""}`} onClick={() => setCurrent(index)} key={slide._id}></div>
            );
    })

    const Slider = categoryBlog.map((slide, index) => {
            return (
                <div className={index === current ? 'blogslide blogactive' : 'blogslide'} key={slide._id}>
                    { index === current &&
                            (<div className="slide_body">
                                <div className="slide_image">
                                    <StorageImage path="blog" imageId={slide.imageId} />
                                    <div className="slide_overlay"></div>
                                </div>
                                <div className="slide_text">
                                    <div className="" style={{ display: 'flex', marginBottom: '1em' }}>
                                        {dots}
                                    </div>
                                    <Link to={"/blog/" + slide.category + "/" + slide._id}>
                                        <h3>{slide.title}</h3>
                                        <div className="slide_bottom">
                                            <img src={category_white} alt="" style={{ height: '15px', marginTop: '3px' }} /> <p>{slide.category}</p>
                                            <p className="blog_divider">|</p>
                                            <CalendarTodayIcon style={{ height: '20px',color:'white' }} /><p>{toDate(slide.dateCreated)}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )   
                    }
                </div>
            );
    })

    const blogPosts = categoryBlog.map((blog) => {
            return (
                <Link to={"/blog/" + blog.category + "/" + blog._id}>
                    <Grid xs={12} className="blogcategory" key={blog._id}>
                        <StorageImage path="blog" imageId={blog.imageId} />
                        <div className="bc_rightside">
                            <h4>{blog.title}</h4>
                            <p>
                                <TextTruncate
                                    line={2}
                                    text={stripHtml(blog.description)}
                                    truncateText=" ..."
                                />
                            </p>
                            <div className="row_bottom">
                                <img src={blogCategory} alt="category" style={{ height: '12px', marginTop: '3px', marginRight:'5px' }} /> <p>{blog.category}</p>
                                <p className="blog_divider">|</p>
                                <img src={clock} alt="clock" style={{ height: '16px', marginRight: '5px' }} /><p>{toDate(blog.dateCreated)}</p>
                            </div>
                        </div>
                    </Grid>
                </Link>
            );
    })

    return (
        <div className="BlogBody">
            <div className="Slider">
                {Slider}
            </div>
            <div className="BlogPosts">
                <div className="bc_Header">
                    <h3>Latest {Category} posts</h3>
                    <div className="bc_heading_underline"></div>
                </div>
                {blogPosts}
            </div>
        </div>
    )
}

