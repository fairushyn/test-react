import { Helmet } from 'react-helmet'

import { LandingpageNav } from '../../../components'

import './Cancellation.css'

function Cancellation() {
    return (
        <>
        <Helmet>
            <title>Cancellation and Refund</title>
        </Helmet>
        <LandingpageNav />
        <div className="cancellation">
            <div className="cancellation_header">
                <h2>Cancellation and Refund</h2>
            </div>
            <div className="cancellation_body">
                <h3>Cancellation and Refund Policy</h3>
                <p>
                    All purchases and payments made will be final and non-refundable, except where explicitly provided as part of an ongoing 
                    marketing promotion. Users can evaluate our Products and Services through the free demo provided, and only purchase our 
                    Services if you are satisfied with it. 
                </p> <br />
                <p>
                    All refunds, if eligible, will be processed within 14 (Fourteen) business days of receiving cancellation request.
                </p> <br />
                <p>For any queries, reach out to, </p> <br />
                <p><b>Indic Law Private Limited</b></p>
                <p><span className="bold_title">Address : </span>H No. 44/3404, E. Marakar Manzil, George Eaden Rd, Kaloor, Kerala 682017</p>
                <p><span className="bold_title">Email : </span><a href="mailto:support@indiclaw.com">support@indiclaw.com</a></p>
                <p><span className="bold_title">Phone: </span><a href="tel:917907268636">+91 79072 68636</a></p>
            </div>
        </div>
        </>
    )
}

export default Cancellation
