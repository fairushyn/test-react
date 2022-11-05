import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import './SingleBlog.css'
import { Paper, Button, Tooltip, Grid } from '@material-ui/core'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StorageImage from "../../imageRenderers/StorageImage";
import toDate from '../../../utils/toDate';
import stripHtml from '../../../utils/stripHtml'
import TextTruncate from 'react-text-truncate'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const API_URL = 'https://api.indiclaw.com/blog/';

export default function SingleBlog() {
    const url = window.location.href;
    const blog_id = useParams();

    const [blog, setBlog] = useState([]);
    const [upNext, setUpNext] = useState([]);
    const [font, setFont] = useState(18)

    const increaseFont = (event) => {
        if (font < 28) {
            setFont(font + 2);
        }
    };
    const decreaseFont = (event) => {
        if (font > 10) {
            setFont(font - 2);
        }
    };
    const defaultFont = (event) => {
        setFont(18);
    };

    useEffect(() => {
        async function fetchData() {
            await axios.get(API_URL + blog_id.blogid, {
                params: {
                    id: blog_id.blogid,
                }
            }).then(res => {
                console.log(res.data.blog);
                setBlog(res.data.blog);
            })
                .catch(err => console.log(err))


            await axios.get(API_URL)
                .then(res => {
                    setUpNext(res.data.blog);
                    //console.log(res.data.blog);
                })
                .catch(err => console.log(err))
        }

        fetchData()
    }, [blog_id.blogid])

    const upNextCards = upNext.map((item) => {
        if (item.category === blog.category && item._id !== blog._id) {
            return (
                <div className="upNextCard" key={item._id}>
                    <Link to={"/blog/" + item.category + "/" + item._id}>
                        <Grid container>
                            <Grid item xs={8} className="un_card_content">
                                <Link to="/blog" className="un_header">
                                    {item.title}
                                </Link>
                                <p className="un_text">
                                    <TextTruncate
                                        line={2}
                                        text={stripHtml(item.description)}
                                        truncateText=" ..."
                                    />
                                </p>
                            </Grid>
                            <Grid item xs={4} >
                                <div className="un_image" style={{ height: '100%' }}>
                                    <StorageImage path="blog" imageId={item.imageId} />
                                </div>
                            </Grid>
                        </Grid>
                    </Link>
                </div>
            );
        }
        else return null
    })
    const Cards = upNext.slice(0, 5).map((item) => {
        if (item._id !== blog._id) {
            return (
                <div className="sp_cardBody">
                    <Link to={"/blog/" + item.category + "/" + item._id} >
                        <h3>{item.title}</h3>
                        <Button endIcon={<MdKeyboardArrowRight />} style={{ padding: '0em', margin: '1em 0' }}>
                            Read
                        </Button>
                    </Link>
                </div>
            );
        }
        else return null
    });

    const renderBlogBody = () => {
        if (blog.body != null) {
            var blogBody = blog.body.map((body, index) => {
                if (body.type === "text") {
                    return (
                        <div style={{whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={{__html: body.content}}></div>
                    );
                }
                else if (body.type === "image") {
                    return (
                        <StorageImage path="blog" imageId={body.content} />
                    );
                }
                else {
                    return (<div></div>)
                }

            });
            return blogBody;
        }
        else {
            return (
                <div>hello</div>
            );
        }
    }

    return (
        <div className="singleBlogPage">
            <div className="postHeader">
                <div className="image">
                    <div className="singlepostOverlay"></div>
                    <StorageImage path="blog" imageId={blog.imageId} />
                </div>
                <div className="content">
                    <Link to={"/blog/" + blog.category}>
                        <p>{blog.category}</p>
                    </Link>
                    <h1>{blog.title}</h1>
                    <h6><span><CalendarTodayIcon /></span>{toDate(blog.dateCreated)}</h6>
                </div>
            </div>
            <div className="postContainer">
                <div className="pbLeft">
                    <Paper elevation={3} style={{ boxShadow: '0px 12px 24px rgba(127, 57, 251, 0.08)' }}>
                        <div className="fontButtons">
                            <Button style={{ fontSize: '15px' }} onClick={decreaseFont}>A<sup>-</sup></Button>
                            <Button style={{ fontSize: '20px' }} onClick={defaultFont}>A</Button>
                            <Button style={{ fontSize: '24px' }} onClick={increaseFont}>A<sup>+</sup></Button>
                        </div>
                        <div className="textOne blogBody" style={{ fontSize: `${font}px` }}>
                            {renderBlogBody()}
                        </div>
                    </Paper>
                    <div className="upNext">
                        <div className="un_heading">
                            <h1>Up next</h1>
                            <div className="line"></div>
                        </div>
                        {upNextCards}
                    </div>
                </div>
                <div className="pbRight">
                    <div className="share">
                        <h4>Share it:</h4>
                        <div className="follow_icons">
                            <Tooltip title="copy link to clipboard" className="copybtn">
                                <IoShareSocialSharp
                                    className="icon"
                                />
                            </Tooltip>
                            <FacebookShareButton
                                quote={blog.title}
                                url={url}
                                className="icon"
                            >
                                <FaFacebookF />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={url}
                                title={blog.title}
                                className="icon"
                            >
                                <FaTwitter />
                            </TwitterShareButton>
                            <WhatsappShareButton
                                url={url}
                                title={blog.title}
                                className="icon"
                            >
                                <FaWhatsapp />
                            </WhatsappShareButton>
                        </div>
                    </div>

                    <div className="suggestions">
                        <h4>YOU MIGHT LIKE</h4>
                        <div className="cardsSuggest">
                            {Cards}
                        </div>
                    </div>

                    <div className="post_categories">
                        <div className="post_catHeading">
                            <h4 className="catTitle">Categories</h4>
                            <div className="line"></div>
                        </div>

                        <div>
                            <Link to='/blog/NewUpdates'>
                                <Button variant="contained" className="catBtn">
                                    news updates
                                </Button>
                            </Link>
                            <br />
                            <Link to='/blog/Opportunities'>
                                <Button variant="contained" className="catBtn">
                                    opportunities
                                </Button>
                            </Link>
                            <br />
                            <Link to='/blog/Interviews'>
                                <Button variant="contained" className="catBtn">
                                    interviews
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
