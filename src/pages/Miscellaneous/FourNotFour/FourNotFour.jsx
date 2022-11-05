import React from 'react'
import { Helmet } from 'react-helmet'

import './FourNotFour.css'

function FourNotFour() {
    return (
        <div className="fourNotFour">
            <Helmet>
                <title>Error</title>
                <meta property="og:description" content="Error" />
            </Helmet>
            <h1>OOPS...</h1>
            <h6>404</h6> <h5> Page Not Found</h5>
        </div>
    )
}

export default FourNotFour
