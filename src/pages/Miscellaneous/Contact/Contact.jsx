import React from 'react'
import { Helmet } from 'react-helmet'
import { LandingpageNav } from '../../../components'

import './Contact.css'

function Contact() {
    return (
        <>
        <Helmet>
            <title>Indic Law - Contact</title>
        </Helmet>
        <LandingpageNav/>
        <div className="contact">            
            <div className="contact_header">
                <h2>Contact Information</h2>
            </div>
            <div className="contact_body">
                <h3>Indic Law Private Limited</h3>
                <p><span className="bold_title">Address : </span>H No. 44/3404, E. Marakar Manzil, George Eaden Rd, Kaloor, Kerala 682017</p>
                <p><span className="bold_title">Email : </span><a href="mailto:support@indiclaw.com">support@indiclaw.com</a></p>
                <p><span className="bold_title">Phone: </span><a href="tel:917907268636">+91 79072 68636</a></p>
                
            </div>
        </div>
        </>
    )
}

export default Contact
