import React from 'react'
import { Button } from '@material-ui/core'
import  { Link } from 'react-router-dom'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import landingPage from '../../../assets/svg/landingPage.svg'

import './Main.css'

function Main() {
    return (
        <div className="main_body">
            <div className="mainLeft">
                <h1>Law is for <br /> everyone.</h1>
                <p>
                    We are taking law to the people. We help you prepare for law entrance exams, 
                    we help you understand the law even if you are not a lawyer. 
                </p>
                <div className="main_buttons">
                    <Link to="/community">
                        <Button disableElevation className="join_community" endIcon={<ArrowForwardIcon />} >join our community</ Button>
                    </Link>
                    <Link to="/clat-online-coaching">
                        <Button variant="outlined" disableElevation className="download_app">download the app</ Button>
                    </Link>
                </div>
            </div>
            <div className="mainRight">
                <img src={landingPage} alt="illustration" />
            </div>
        </div>
    )
}

export default Main
