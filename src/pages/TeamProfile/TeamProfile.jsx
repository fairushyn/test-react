import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {useParams} from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { GrLinkedinOption, GrInstagram } from "react-icons/gr";
import { BiPen } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { LandingpageNav } from '../../components'
import StorageImage from "../../components/imageRenderers/StorageImage";

import './TeamProfile.css'

import image from '../../assets/img2.jpg'

const API_URL = 'https://api.indiclaw.com/team/';

function TeamProfile() {

    const profile = useParams();
    const [team, setTeam] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            axios.get(API_URL+profile.team_id,{
                param:{
                    id:profile.team_id
                }
            }).then(res=>{
                setTeam(res.data.team)
                //console.log(res.data.team)
            }).catch(err=>console.log(err))
        }

        fetchData()
    },[profile.team_id])

    return (
        <>
        <Helmet>
            <title>{`${team.name} - Indic Law `}</title>
        </Helmet>
        <LandingpageNav />
        <div className="teamProfile">
            <div className="teamProfile_header">
                <div className="tp_info_back">
                    <Link to="/people">
                        <IoIosArrowBack className="tp_back_icon"/>
                    </Link>
                </div>
                <div className="tp_info">
                    <div className="tp_info_Left">
                        <h2>{team.name}</h2>
                        <h6>{team.role}</h6>
                        <StorageImage path="team" imageId={team.imageId} />
                    </div>
                    <div className="tp_info_Right">
                        <h2>{team.name}</h2>
                        <h6>{team.role}</h6>
                        <div className="tp_icon_container">
                            {team.linkedIn && 
                            <a href={team.linkedIn} target="_blank" rel="noopener noreferrer">
                                <GrLinkedinOption className="tp_icons"/>
                            </a>}
                            {team.instagram && 
                            <a href={team.instagram} target="_blank" rel="noopener noreferrer">
                                <GrInstagram className="tp_icons"/>
                            </a>}
                            {team.blog && 
                            <a href={team.blog} target="_blank" rel="noopener noreferrer">
                                <BiPen className="tp_icons"/>
                            </a>}

                        </div>
                    </div>
                </div>
                
            </div>
            <div className="teamProfile_desc">
                <p style={{whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={{ __html: team.description }}></p>
            </div>
            <div className="teamProfile_body">
                <p style={{whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={{ __html: team.bio }}></p>
            </div>
        </div>
        </>
    )
}

export default TeamProfile
