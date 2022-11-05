import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";

import './DiscoverDigest.css'

import history from '../../../assets/svg/history.svg'
import currentaffairs from '../../../assets/svg/currentaffairs.svg'
import judgements from '../../../assets/svg/judgements.svg'

function DiscoverDigest() {
    return (
        <div className="discoverDigest">
            <div className="discoverDigestLeft">
                <h1 style={{color: '#2F315D'}}>Discover</h1>
                <h1>The Digest</h1>
                <p>The ultimate wiki for everything on law — available for free</p>
                <Link to="/digest">
                    <Button endIcon={<MdKeyboardArrowRight />}>
                        Go to digest
                    </Button>
                </Link>
            </div>
            <div className="discoverDigestRight">
                <a href="/digest/History">
                    <div className="card1">
                        <img src={history} alt="" />
                        <h2>History</h2>
                    </div>
                </a>
                <a href="/digest/Judgements">
                    <div className="card2">
                        <img src={judgements} alt="" />
                        <h2>Judgements</h2>
                    </div>
                </a>
                <a href="/digest/CurrentAffairs">
                    <div className="card3">
                        <img src={currentaffairs} alt="" />
                        <h2>Current Affairs</h2>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default DiscoverDigest
