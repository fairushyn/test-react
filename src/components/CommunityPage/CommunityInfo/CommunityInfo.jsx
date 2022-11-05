import React from 'react'


import './CommunityInfo.css'

import schools from '../../../assets/svg/community/schools.svg'
import law from '../../../assets/svg/community/law.svg'
import publicimg from '../../../assets/svg/community/publicimg.svg'
import webdev from '../../../assets/svg/community/webdev.svg'
import college from '../../../assets/svg/community/college.svg'

function CommunityInfo() {
    return (
        <div className="communityInfo" id="more">
            <div className="ciOne col-rev">
                <div className="ci_oneLeft">
                    <hr />
                    <h2 className="ci_info_title">Schools</h2>
                    <p className="ci_info_body">
                        The Indic Law project aims to spread awareness on opportunities in the legal domain, with a view to attract 
                        talented students to the community. Teachers or authorized persons from schools may get in touch with us, to have 
                        our mentors or volunteers come and interact with your students.
                    </p>
                </div>
                <div className="ci_oneRight d-flex">
                    <img src={schools} alt="" />
                </div>
            </div>

            <div className="ciTwo">
                <div className="ci_twoLeft d-flex">
                    <img src={law} alt="" />
                </div>
                <div className="ci_twoRight">
                    <hr />
                    <h2 className="ci_info_title">Law Students</h2>
                    <p className="ci_info_body">
                        <span className="bold_title">i. Intern:</span> We at The Indic Law Project have Internship Opportunities for Law Students ranging from a time duration of 
                        3 weeks to 3 months. The students can opt for one that suits their timeline the best, further there is also an option 
                        to choose between a convenient Online Internship or an exciting In-House Internship. 
                    <br />
                        <span className="bold_title">ii. Volunteer:</span> It is open for the Law Students to also have a time fluid Volunteering experience with us wherein you 
                        get to interact and work directly with the team on the various projects running. 
 
                    </p>
                </div>
            </div>

            <div className="ciTwo col-rev">
                <div className="ci_oneLeft">
                    <hr />
                        <h2 className="ci_info_title">Web Developers</h2>
                        <p className="ci_info_body">
                            We offer internships as well as volunteering opportunities to engineering students or graduates who are into web 
                            development technologies. Reach out to us for more information. 
                        </p>
                    </div>
                <div className="ci_oneRight d-flex">
                    <img src={webdev} alt="" />
                </div>
            </div>
            
            <div className="ciTwo">
                <div className="ci_twoLeft d-flex">
                    <img src={publicimg} alt="" />
                </div>
                <div className="ci_twoRight">
                    <hr />
                    <h2 className="ci_info_title">Public Personalities or Social Media influencers</h2>
                    <p className="ci_info_body">
                        We are on a mission to educate the public about the laws that governs them. Get in touch with us if you can help us 
                        in this mission.
                    </p>
                </div>
            </div>
            
            <div className="ciTwo col-rev">
                <div className="ci_oneLeft">
                    <hr />
                    <h2 className="ci_info_title">Colleges</h2>
                    <p className="ci_info_body">
                        The objective of spreading awareness regarding the opportunities in the legal domain is not limited to school students. 
                        Professors or Authorized persons from Degree Colleges can reach out to us to have mentors or volunteers from 
                        The Indic Law Project to come and interact with your students. 
                    </p>
                </div>
                <div className="ci_oneRight d-flex">
                    <img src={college} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CommunityInfo
