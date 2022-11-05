import React from 'react'
import { Helmet } from 'react-helmet'

import { LandingpageNav } from '../../../components'

import './About.css'

function About() {
    return (
        <>
        <Helmet>
            <title>About Us</title>
        </Helmet>
        <LandingpageNav />
        <div className="about">
            <div className="about_header">
                <h2>About Us</h2>
            </div>
            <div className="about_body">
                <h4>
                    The Indic Law project aims to foster a better democratic environment in India by addressing the inequity in access to law and justice. 
                </h4>
                <br/>
                <h3>We work on the following fronts :</h3>

                <h3>Knowledge</h3>
                <p>                We passionately believe in Ambedkar’s call to ‘educate, agitate, organise’ to better our society, 
                and wish to do our part in the first and and the most fundamental part - education. 
                We aim to spread knowledge about law, but not in a vacuum. We examine the real-world impact it has, 
                and most importantly, can have - if the masses simply knew more about them. We do this by exploring laws 
                by situating them in their socio-political context - apart from, of course, in their doctrinal form. We also strive to 
                make formal legal education accessible and affordable to historically marginalized communities. </p>

                <h3>Accessibility</h3> 
                <p> At Indic Law, we believe that knowledge does not possess value unless it is accessible to everyone in society. In fact, we believe knowledge is a tool of evil when it is available only to the people with power - which is why we strive to make all our content accessible. 
                We do this through a strict policy of</p><br/>
                <ul>
                    <li><h6>Assuming the reader has no knowledge of the subject matter and therefore providing the necessary context </h6></li>
                    <li><h6>Using only simple words to explain the issue/law (if we are forced to use a not-so-simple word, we make sure to provide the meaning)</h6></li>
                    <li><h6>Making our content available in as many regional languages as we can (we’re starting with Tamil, Malayalam, Kannada, Bengali and Hindi!)</h6></li>
                </ul>
              
                
                

                <h3>Technology</h3>    
                <p>
                We are massive fans of technology, and we vehemently believe it can be an enormous source of good if used for the right things. 
                We believe knowledge and accessibility are some of these right things, and thus we build products that are publicly available 
                and would help reduce the undeniable gaps in knowledge and accessibility to law.
                </p>
            </div>
        </div>
        </>
    )
}

export default About
