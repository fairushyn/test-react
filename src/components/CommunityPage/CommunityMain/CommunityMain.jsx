import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Button } from '@material-ui/core'

import './CommunityMain.css'

function CommunityMain() {
    return (
        <div className="community">
            <div className="community_body">
                <div className="communityLeft">
                    <h1>Welcome to the <br />Indic Law Community</h1>
                    <p>
                        Our Community consists of Schools, Law Students, Web Developers, Social media influencers, 
                        public personlities and colleges. 
                    </p>
                    
                    <div className="community_buttons">
                        <a href="mailto:team@indiclaw.com">
                            <Button disableElevation className="get_started">Contact us</ Button>
                        </a>
                        
                        <NavLink to="/community/#more" smooth={true} spy="true" duration={4000}>
                            <Button variant="outlined" disableElevation className="learn_more">Learn More</ Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityMain
