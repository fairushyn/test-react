import React from 'react'
import { Helmet } from 'react-helmet'
import { Cards, CurrentAffair,JudgeBill, Slideshow, NavigationBar } from '../../components/index'

function Digest() {
    return (
        <div className="digest">
            <Helmet>
                <title>Indic Law - Digest</title>
                <meta name="description" content='Indic Law - Digest' />
                <meta property="og:description" content='Indic Law - Digest' />
                <meta property="og:title" content='Indic Law - Digest' />
                {/* <meta property="og:url" content={url} /> */}
                {/* <meta property="og:image" content="" /> */}
                <meta name="twitter:description" content='Indic Law - Digest' />
                <meta name="twitter:title" content='Indic Law - Digest' />
                {/* <meta name="twitter:image" content="" /> */}
            </Helmet>
            <NavigationBar/>
            <Slideshow />
            <Cards />
            <CurrentAffair />
            <JudgeBill />
        </div>
    )
}

export default Digest
