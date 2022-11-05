import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { IconButton, Grid } from '@material-ui/core/';
import StorageImage from "../../imageRenderers/StorageImage";

import { IoIosArrowForward } from "react-icons/io";

import './WhatsNew.css'
import stripHtml from '../../../utils/stripHtml';
import TextTruncate from 'react-text-truncate';
import img from '../../../assets/img4.jpg'



const API_URL = 'https://api.indiclaw.com/';

    
function WhatsNew() {

    const [whatsNew, setWhatsNew] = useState([])

    useEffect(() => {
        async function fetchData() {
            await axios.get(API_URL+'blog')
                .then(res => {
                    console.log(res.data.blog);
                    setWhatsNew(res.data.blog);
                })
                .catch(err => console.log(err))
        }

        fetchData()
        
    }, [])

    const WhatsNewCards = whatsNew.filter(blog => blog.category === "NewUpdates").map((blog) => {
        return (
            <Link to={"/blog/NewUpdates/" + blog._id}>
            <div key={blog._id} className="whatsNewCard">
                <div className="whatsNewCardImg">
                    <StorageImage path="blog" imageId={blog.imageId} />
                </div>
                <div className="whatsNewCardBody">
                    <h1>{blog.title}</h1>
                    <h6 className="CategoryCard_text">
                        <TextTruncate
                            line={3}
                            text={stripHtml(blog.description)}
                            truncateText=" ..."
                        />
                    </h6>
                    <div className="learnmore">
                        <p>Learn more</p>
                        <IoIosArrowForward className="arrow" />
                    </div>
                </div>
            </div>
            </Link>
        );
    });

    return (
        <div className="whatsNew">
            <h2>News and Updates:</h2>

            <div className="wnCardContaner" >
                {WhatsNewCards}
            </div>
        </div>
    )
}

export default WhatsNew
