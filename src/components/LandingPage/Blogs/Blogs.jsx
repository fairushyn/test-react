import React, { useState, useEffect } from 'react'
import { Button, Grid } from '@material-ui/core';
import axios from 'axios'

import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import './Blogs.css'

import StorageImage from "../../imageRenderers/StorageImage";
import toDate from '../../../utils/toDate';
import stripHtml from '../../../utils/stripHtml';
import TextTruncate from 'react-text-truncate';

import blogCategory from '../../../assets/svg/blogCategory.svg'
import clock from '../../../assets/svg/clock.svg'

const API_URL = 'https://api.indiclaw.com/';

function Blogs() {

    const [currentCategory, setCurrentCategory] = useState('all');
    const [blogs, setBlogs] = useState([]);
    const [digest, setDigest] = useState([])

    useEffect(() => {
        async function fetchData() {
            await axios.get(API_URL + 'blog')
                .then(res => {
                    setBlogs(res.data.blog);
                })
                .catch(err => console.log(err))
        }

        async function fetchDigests() {
            axios.get(API_URL+'digest')
                .then(res => {
                    setDigest(res.data.digests)
                })
                .catch(err => console.log(err))
        }

        fetchData();
        fetchDigests();
    }, []);

    var i=0;

    const BlogCards = category => blogs.map((item) => {
        if ((item.category === category || category === 'all') && i<5) {
            i=i+1;
            return (
                <Link to={"/blog/" + item.category + "/" + item._id}>
                <div className="blogCard" key={item._id}>
                    <div className="blog_image">
                        <StorageImage path="blog" imageId={item.imageId} />
                    </div>
                    <div className="blog_content">
                        <h1>{item.title}</h1>
                        <p className="CategoryCard_text">
                            <TextTruncate
                                line={3}
                                text={stripHtml(item.description)}
                                truncateText=" ..."
                            />
                        </p>
                        <div className="blog_footer">
                            <img src={clock} alt="" /> <span>{toDate(item.dateCreated)}</span>
                            <span className="blog_divider">|</span>
                            <img src={blogCategory} style={{height:'9px'}} alt="" /> <span>{item.category}</span>
                        </div>
                    </div>
                    <div className="blog_image_mobile">
                        <StorageImage path="blog" imageId={item.imageId} />
                    </div>
                </div>
                </Link>
            );
        }
        else return null
    });

    const IndividualPosturl = (type, id) => {
        if (type === 'Bills/Laws') {
            return (
                '/digest/BillsLaws/' + id + "/1"
            );
        }
        else {
            return (
                '/digest/' + type + '/' + id + "/1"
            )
        }
    }

    const AnnouncementCards = digest.slice(0,5).map((item) => {
        return (
            <Link to={IndividualPosturl(item.digestType, item._id)}>
            <div className="announceCard">
                <div className="announce_image">
                    <StorageImage path="digest" imageId={item.imageId} />
                </div>
                <div className="announce_content">
                    <h1>{item.title}</h1>
                    <Button endIcon={<MdKeyboardArrowRight />}>
                        Learn More
                </Button>
                </div>
            </div>
            </Link>
        );
    });

    const chooseTabStyle = (t) => {
        return {
            borderBottom: currentCategory === t ? '3px solid #2F315D' : 'none',
            opacity: currentCategory === t ? '1' : '0.7',
            paddingBottom: currentCategory === t ? '0.3rem' : '0',
            fontWeight: currentCategory === t ? 'bolder' : '500'
        }
    }

    return (
        <Grid container className="blogs">
            <Grid item xs ={12} sm={8} className="blogsLeft">
                <div className="blog_categories">
                    <h3 
                        onClick={() => setCurrentCategory('all')} 
                        style={chooseTabStyle('all')}
                    >
                            All
                    </h3>
                    <h3 
                        onClick={() => setCurrentCategory('NewUpdates')} 
                        style={chooseTabStyle('NewUpdates')}
                    >
                            news updates
                    </h3>
                    <h3 
                        onClick={() => setCurrentCategory('Opportunities')} 
                        style={chooseTabStyle('Opportunities')}
                    >
                            oppurtunities
                    </h3>
                    <h3 
                        onClick={() => setCurrentCategory('Interviews')} 
                        style={chooseTabStyle('Interviews')}
                    >
                            interviews
                    </h3>
                </div>
                <div className="blog_cards">
                    {BlogCards(currentCategory)}
                </div>
                <div className="blog_button">
                    <Link to={"/blog/"+currentCategory}>
                        <Button color="primary">
                            Load More
                        </Button>
                    </Link>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} className="blogsRight">
                <div className="blogs_subscribe">
                    <h4>Stay updated with the law. Subscribe to our Newsletter.</h4>
                    <input type="email" placeholder="Enter your email" />
                </div>                
                <div className="blogs_follow">
                    <h4>Follow us on:</h4>
                    <div className="follow_icons">
                        <a href="https://www.facebook.com/indiclawproject" target="_blank" rel="noreferrer"><FaFacebookF className="icon" /></a>
                        <a href="https://twitter.com/indiclawproject" target="_blank" rel="noreferrer"><FaTwitter className="icon"/></a>
                        <a href="https://instagram.com/indiclawproject" target="_blank" rel="noreferrer"><FaInstagram className="icon" /></a>
                    </div> 
                </div>
                <div className="announcements">
                    <div className="ann_heading">
                        <h4 className="catTitle">DIGESTS</h4>
                        <div className="line"></div>
                    </div>
                    <div className="ann_cards">
                        {AnnouncementCards}
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Blogs
