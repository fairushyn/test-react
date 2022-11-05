import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import img4 from '../../../assets/img4.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from '@material-ui/core';
import StorageImage from "../../imageRenderers/StorageImage";

import './BlogSidebar.css'

const API_URL = 'https://api.indiclaw.com/digest';


export default function BlogSidebar() {

    const announcements = [
        {
            title: 'Working conditions in India: Safer, less and less',
            img: img4
        },
        {
            title: 'Working conditions in India: Safer, less and less',
            img: img4
        },
        {
            title: 'Working conditions in India: Safer, less and less',
            img: img4
        },
        {
            title: 'Working conditions in India: Safer, less and less',
            img: img4
        }
    ]

    const [digest, setDigest] = useState([])

    useEffect(() => {
        async function fetchData(){
            axios.get(API_URL)
            .then(res => {
                setDigest(res.data.digests)
            })
            .catch(err=>console.log(err))
        }

        fetchData()
    }, []);

    const AnnouncementCards = digest.slice(0,6).map((item) => {
        return (
            <Link to={"/digest/"+item.digestType+"/"+item._id+"/1"}>
            <div className="bs_Card" key={item._id}>
                <div className="bs_image">
                    <StorageImage path="digest" imageId={item.imageId} />
                </div>
                <div className="bs_content">
                    <h1>{item.title}</h1>
                    <Button endIcon={<MdKeyboardArrowRight />}>
                        Learn More
                </Button>
                </div>
            </div>
            </Link>
        );
    });

    return (
        <div className="blogSidebar">
            <div className="bs_digest">
                <div className="bs_heading">
                    <h4>Latest Digests</h4>
                    <div className="bottom_line"></div>
                </div>
                <div className="bs_cards_container">
                    {AnnouncementCards}
                </div>
            </div>
            <div className="blogs_subscribe" style={{marginTop:'2em'}}>
                <h4>Stay updated with the law. Subscribe to our Newsletter.</h4>
                <input type="email" placeholder="Enter your email" />
            </div>    
        </div>
    )
}
