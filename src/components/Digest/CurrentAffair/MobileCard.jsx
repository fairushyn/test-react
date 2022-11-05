import React from 'react'
import Button from '@material-ui/core/Button';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom'
import StorageImage from "../../imageRenderers/StorageImage";


function MobileCard({ img, text, IndividualPost_url}) {
    return (
        <div className="m_card">
            <div className="m_cardLeft">
                <Link to={IndividualPost_url}>
                    <h6>{text}</h6>
                </Link>                

                <Link to={IndividualPost_url}>
                    <Button endIcon={<MdKeyboardArrowRight />}>
                        Read
                    </Button>
                </Link>                
            </div>
            <div className="m_cardRight">
                <Link to={IndividualPost_url}>
                    <StorageImage path="digest" imageId={img} />
                </Link>                
            </div>
        </div>
    )
}

export default MobileCard
