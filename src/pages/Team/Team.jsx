import React, { useState, useRef,useEffect } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { IoIosArrowForward } from "react-icons/io";

import { LandingpageNav } from '../../components'
import TeamCard from './TeamCard'

import './Team.css'


import hand from '../../assets/svg/hand.svg'

const API_URL = 'https://api.indiclaw.com/team';

function Team() {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    const ref9 = useRef(null);
    const ref10 = useRef(null);
    const ref11 = useRef(null);
    const ref12 = useRef(null);
    const ref13 = useRef(null);
    const ref14 = useRef(null);

    const [teams, setTeams]=useState([]);
    const [right1, setRight1] = useState(false);
    const [right2, setRight2] = useState(false);
    const [right3, setRight3] = useState(false);
    const [right4, setRight4] = useState(false);
    const [right5, setRight5] = useState(false);
    const [right6, setRight6] = useState(false);
    const [right7, setRight7] = useState(false);
    const [right8, setRight8] = useState(false);
    const [right9, setRight9] = useState(false);
    const [right10, setRight10] = useState(false);
    const [right11, setRight11] = useState(false);
    const [right12, setRight12]= useState(false);
    const [right13, setRight13] = useState(false);
    const [right14, setRight14] = useState(false);
    
    const [left1, setLeft1] = useState(true);
    const [left2, setLeft2] = useState(true);
    const [left3, setLeft3] = useState(true);
    const [left4, setLeft4] = useState(true);
    const [left5, setLeft5] = useState(true);
    const [left6, setLeft6] = useState(true);
    const [left7, setLeft7] = useState(true);
    const [left8, setLeft8] = useState(true);
    const [left9, setLeft9] = useState(true);
    const [left10, setLeft10] = useState(true);
    const [left11, setLeft11] = useState(true);
    const [left12, setLeft12] = useState(true);
    const [left13, setLeft13] = useState(true);
    const [left14, setLeft14] = useState(true);

    const handleRight1 = () => {
        setLeft1(false);
        ref1.current.scrollLeft += 700;
    }

    const handleLeft1 = () => {
        setRight1(false);
        ref1.current.scrollLeft -= 700;
    }

    const handleRight2 = () => {
        setLeft2(false);
        ref2.current.scrollLeft += 700;
    }

    const handleLeft2 = () => {
        setRight2(false);
        ref2.current.scrollLeft -= 700;
    }

    const handleRight3 = () => {
        setLeft3(false);
        ref3.current.scrollLeft += 700;
    }

    const handleLeft3 = () => {
        setRight3(false);
        ref3.current.scrollLeft -= 700;
    }

    const handleRight4 = () => {
        setLeft4(false);
        ref4.current.scrollLeft += 700;
    }

    const handleLeft4 = () => {
        setRight4(false);
        ref4.current.scrollLeft -= 700;
    }

    const handleRight5 = () => {
        setLeft5(false);
        ref5.current.scrollLeft += 700;
    }

    const handleLeft5 = () => {
        setRight5(false);
        ref5.current.scrollLeft -= 700;
    }

    const handleRight6 = () => {
        setLeft6(false);
        ref6.current.scrollLeft += 700;
    }

    const handleLeft6 = () => {
        setRight6(false);
        ref6.current.scrollLeft -= 700;
    }

    const handleRight7 = () => {
        setLeft7(false);
        ref7.current.scrollLeft += 700;
    }

    const handleLeft7 = () => {
        setRight7(false);
        ref7.current.scrollLeft -= 700;
    }

    const handleRight8 = () => {
        setLeft8(false);
        ref8.current.scrollLeft += 700;
    }

    const handleLeft8 = () => {
        setRight8(false);
        ref8.current.scrollLeft -= 700;
    }

    const handleRight9 = () => {
        setLeft9(false);
        ref9.current.scrollLeft += 700;
    }

    const handleLeft9 = () => {
        setRight9(false);
        ref9.current.scrollLeft -= 700;
    }

    const handleRight10 = () => {
        setLeft10(false);
        ref10.current.scrollLeft += 700;
    }

    const handleLeft10 = () => {
        setRight10(false);
        ref10.current.scrollLeft -= 700;
    }

    const handleRight11 = () => {
        setLeft11(false);
        ref11.current.scrollLeft += 700;
    }

    const handleLeft11 = () => {
        setRight11(false);
        ref11.current.scrollLeft -= 700;
    }

    const handleRight12 = () => {
        setLeft12(false);
        ref12.current.scrollLeft += 700;
    }

    const handleLeft12 = () => {
        setRight12(false);
        ref12.current.scrollLeft -= 700;
    }

    const handleRight13 = () => {
        setLeft13(false);
        ref13.current.scrollLeft += 700;
    }

    const handleLeft13 = () => {
        setRight13(false);
        ref13.current.scrollLeft -= 700;
    }

    const handleRight14 = () => {
        setLeft14(false);
        ref14.current.scrollLeft += 700;
    }

    const handleLeft14 = () => {
        setRight14(false);
        ref14.current.scrollLeft -= 700;
    }

    useEffect(() => {
        async function fetchData(){
            axios.get(API_URL)
            .then(res=>{
                setTeams(res.data.team)
            })
            .catch(err=>console.log(err))
        }
        fetchData()

    }, []);

    teams.map(team=>{
        console.log(team.teamType)
    })

    return (
        <>
        <Helmet>
            <title>People</title>
        </Helmet>
        <LandingpageNav />
        <div className="team">
            <div className="team_header">
                <h2>People</h2>
            </div>
            <div className="team_body">
                <div className="team_content">
                    <div className="teamBody_left">
                        <h1>You</h1>
                    </div>
                    <div className="teamBody_right">
                            <div className="teamCard higher">
                                <img src={hand} alt=""/>
                                <h2>You</h2>
                                <h6>The Change Maker</h6>
                                <p>
                                    Your support drives us to pursue our mission in making law accessible for everyone. Our Team is incomplete without You!
                                </p>
                            </div>
                    </div>
                </div>

                <div className="team_content grey-bg">
                    <div className="teamBody_left">
                        <h1>The Leads</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft14} style={{display: left14? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref14}>
                        {teams.filter(team=>team.teamType==="The leads").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight14} style={{display: right14? 'none' : 'block'}}/>
                </div>

                <div className="team_content">
                    <div className="teamBody_left">
                        <h1>Operations Team</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft1} style={{display: left1? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref1}>
                        {teams.filter(team=>team.teamType==="Operations Team").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight1} style={{display: right1? 'none' : 'block'}}/>
                </div>                

                <div className="team_content grey-bg">
                    <div className="teamBody_left">
                        <h1>Mentors</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft2} style={{display: left2? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref2}>
                        {teams.filter(team=>team.teamType==="Mentors").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight2} style={{display: right2? 'none' : 'block'}}/>
                </div>


                <div className="team_content">
                    <div className="teamBody_left">
                        <h1>Accounts Team</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft3} style={{display: left3? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref3}>
                        {teams.filter(team=>team.teamType==="Accounts Team").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight3} style={{display: right3? 'none' : 'block'}}/>
                </div>


                <div className="team_content grey-bg">
                    <div className="teamBody_left">
                        <h1>HR Team</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft4} style={{display: left4? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref4}>
                        {teams.filter(team=>team.teamType==="HR Team").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight4} style={{display: right4? 'none' : 'block'}}/>
                </div>


                <div className="team_content ">
                    <div className="teamBody_left">
                        <h1>Academics Team</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft5} style={{display: left5? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref5}>
                        {teams.filter(team=>team.teamType==="Academics Team").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight5} style={{display: right5? 'none' : 'block'}}/>
                </div>


                <div className="team_content grey-bg">
                    <div className="teamBody_left">
                        <h1>Coaches</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft6} style={{display: left6? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref6}>
                        {teams.filter(team=>team.teamType==="Coaches").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight6} style={{display: right6? 'none' : 'block'}}/>
                </div>


                <div className="team_content">
                    <div className="teamBody_left">
                        <h1>Engineering Team</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft7} style={{display: left7? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref7}>
                        {teams.filter(team=>team.teamType==="Engineering Team").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight7} style={{display: right7? 'none' : 'block'}}/>
                </div>


                <div className="team_content grey-bg">
                    <div className="teamBody_left">
                        <h1>Outreach Team</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft8} style={{display: left8? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref8}>
                        {teams.filter(team=>team.teamType==="Outreach Team").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight8} style={{display: right8? 'none' : 'block'}}/>
                </div>

                <div className="team_content">
                    <div className="teamBody_left">
                        <h1>Social Media Team</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft9} style={{display: left9? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref9}>
                        {teams.filter(team=>team.teamType==="Social Media Team").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight9} style={{display: right9? 'none' : 'block'}}/>
                </div>


                <div className="team_content grey-bg">
                    <div className="teamBody_left">
                        <h1>Design Team</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft10} style={{display: left10? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref10}>
                        {teams.filter(team=>team.teamType==="Design Team").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight10} style={{display: right10? 'none' : 'block'}}/>
                </div>


                {/*<div className="team_content">
                    <div className="teamBody_left">
                        <h1>Administration Team</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft11} style={{display: left11? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref11}>
                        {teams.filter(team=>team.teamType==="Administration Team").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight11} style={{display: right11? 'none' : 'block'}}/>
                    </div>*/}

                <div className="team_content">
                    <div className="teamBody_left">
                        <h1>Multimedia Team</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft12} style={{display: left12? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref12}>
                        {teams.filter(team=>team.teamType==="Multimedia Team").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight12} style={{display: right12? 'none' : 'block'}}/>
                </div>


                
                <div className="team_content grey-bg">
                    <div className="teamBody_left">
                        <h1>Research Team</h1>
                    </div>
                    <IoIosArrowForward className="teams_scroll_prev" onClick={handleLeft13} style={{display: left13? 'none' : 'block'}}/>
                    <div className="teamBody_right" ref={ref13}>
                        {teams.filter(team=>team.teamType==="Research Team").map((team)=>{
                            return(
                                <TeamCard id={team._id} img={team.imageId} name={team.name} role={team.role} description={team.description} />
                            );
                        })}
                    </div>
                    <IoIosArrowForward className="teams_scroll_next" onClick={handleRight13} style={{display: right13? 'none' : 'block'}}/>
                </div>


            </div>
        </div>
        </>
    )
}

export default Team
