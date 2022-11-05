import React from 'react'
import { Helmet } from 'react-helmet'

import { LandingpageNav, CommunityMain, CommunityInfo, CommGetStarted} from '../../components'

function CommunityPage() {
    return (
        <>
        <Helmet>
            <title>Indic Law - Community</title>
        </Helmet>
        <div className="communityPage">
            <LandingpageNav />
            <CommunityMain />
            <CommunityInfo />
            <CommGetStarted/>
        </div>
        </>
    )
}

export default CommunityPage
