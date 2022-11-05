import React from 'react'
import { Helmet } from 'react-helmet'

import { LandingpageNav } from '../../../components'

import './Copyright.css'

function Copyright() {
    return (
        <>
            <Helmet>
                <title>Copyright Policy</title>
            </Helmet>
            <LandingpageNav />
            <div className="copyright">
                <div className="copyright_header">
                    <h2>Copyright Policy</h2>
                </div>
                <div className="copyright_body">
                    <h3>Copyright Policy: © 2021 Indic Law</h3> <br />
                    <p>
                        Except as provided, all information, content, material, trademarks, services marks, trade names, and trade secrets i
                        ncluding but not limited to the software, text, images, graphics, video, script and audio, contained in any of our Products and Services 
                        are proprietary property of the Company (“Proprietary Information”).  No such Proprietary Information may be copied, downloaded, reproduced, modified, republished, uploaded, posted, transmitted or distributed in any way without obtaining prior written permission from the Company. Nothing on this Application or Website or Services shall be, or products, deemed to confer a license of, or any other right, interest or title to or in any of the intellectual property rights belonging to the Company, to the User. 
                    </p>
                    <br />

                    <p>
                        You may own the medium on which the information, content or materials resides, but the Company shall at all times retain 
                        full and complete title to the information, content or materials and all intellectual property rights inserted by the Company on such medium. 
                    </p> <br />

                    <p>
                        Certain contents on the Website may belong to third parties. Such contents have been reproduced after taking prior consent 
                        from said party, or used under fair dealing exceptions, or licensed under Creative Commons. All rights relating to such content will 
                        remain with such third party.
                    </p> <br />

                    <p>
                        Further, you recognize and acknowledge that the ownership of all trademarks, copyright, logos, service marks and other 
                        intellectual property owned by any third party shall continue to vest with such party and You are not permitted to use the same without the 
                        consent of the respective third party.
                    </p> <br />
                </div>
            </div>
        </>
    )
}

export default Copyright
