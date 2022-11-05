import { Button } from '@material-ui/core'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import React from 'react'

import './Home.css'

import coaches from '../../../assets/png/coaches.png'

function Home() {
    return (
        <div className="home">
            <div className="home_body">
                <div className="bodyText">
                    <h1>Preparing For CLAT ?<br/>Trust Us, We have done this before </h1>
                    <p>Looking for a career in law? Look no further. Not only do we help you identify<br/> various prospects in the legal field, but we also prepare you for it.</p>
                    <div className="home_buttons">
                        <a href="https://play.google.com/store/apps/details?id=com.indiclaw.learn" target="_blank" rel="noreferrer">
                            <Button disableElevation className="get_started">download the app</ Button>
                        </a>

                        <NavLink to="/clat-online-coaching/#info" smooth={true} spy="true" duration={4000}>
                            <Button variant="outlined" disableElevation className="learn_more">Learn More</ Button>
                        </NavLink>
                    </div>
                </div>
                <div className="bodyImage">
                    <img src={coaches} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
