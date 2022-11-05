import React from 'react'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate';

import './Team.css'
import StorageImage from "../../components/imageRenderers/StorageImage";


function TeamCard({ id, img, name, role, description }) {
    return (
        <Link to={"/people/"+id}>
            <div className="teamCard">
                <StorageImage path="team" imageId={img}/>
                <h2>{name}</h2>
                <h6>{role}</h6>
                
                <p>
                    <TextTruncate
                        line={2}
                        text={description}
                        truncateText=" ..."
                    />
                </p>
            </div>
        </Link>
    )
}

export default TeamCard
