import React from 'react'
import Button from '@material-ui/core/Button';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom'
import StorageImage from "../../imageRenderers/StorageImage";

//import bookmark from '../../../assets/svg/bookmark.svg'

import './CurrentAffair.css'


function SingleCard({ img, text, IndividualPost_url}) {

    return (
        <div style={{marginLeft: '2rem'}}>
            <div className="ca_card" >
                <StorageImage path="digest" imageId={img} />
                <Link to={IndividualPost_url}>
                    <div className="overlay"></div>
                </Link>
                <div className="cardContainer">
                    <h2>{text}</h2>
                    <Link to={IndividualPost_url}>
                        <Button variant="contained" endIcon={<MdKeyboardArrowRight />}>
                            Read
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCard
