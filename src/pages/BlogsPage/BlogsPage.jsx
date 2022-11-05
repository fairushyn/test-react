import React from 'react'
import { Helmet } from 'react-helmet'

import { BlogTab, LandingpageNav } from '../../components'

export default function BlogsPage() {
    return (
        <>
        <Helmet>
            <title>Indic Law - Blog</title>
        </Helmet>
        <div>
            <LandingpageNav/>
            <BlogTab />
        </div>
        </>
    )
}
