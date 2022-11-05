import React from 'react'
import { Helmet } from 'react-helmet'

import { Blogs, Main, DiscoverDigest, WhatsNew, LandingpageNav } from '../../components'


import './LandingPage.css'

function LandingPage() {
    return (
        <>
        <Helmet>
            <title>Indic Law</title>
        </Helmet>
        <div className="landingPage">
            <LandingpageNav/>
            <div className="landingPage_snapContainer">
                <Main />
                <WhatsNew />
            </div> 
            <DiscoverDigest />
            <Blogs />
        </div>
        </>
    )
}

export default LandingPage
