import React from 'react'
import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom'

import { LandingpageNav } from '../../../components'

import './Referral.css'

function Referral() {
    return (
        <>
        <Helmet>
            <title>Referral – Terms and Conditions</title>
        </Helmet>
        <LandingpageNav />
        <div className="referral">
        <div className="referral_header">
                <h2>Referral – Terms and Conditions</h2>
            </div>
            <div className="referral_body">
                <p>
                    Under the “Referral” Promotion of Indic Law, Users who refer (“Referrer”) other Users (“Invitee”) will get receive an offer amount, set from time to time by Us, on successful purchase of “Eligible Courses” by the Invitee, and the Invitee shall receive a discount on their purchase.
                </p> <br />

                <p>
                Both Referrer and Invitee should be a registered User of Indic Law. The Promotion shall be subject to the rest of the <Link to="/terms">Terms and Conditions</Link>.
                </p> <br />

                <p>
                You must be a resident of India, and over the year of 18 and competent to contract, or should have the consent of Your Parent or Guardian to participate in this promotion.
                </p> <br />

                <p>
                We reserve the right to modify or end this Promotion at any time, with or without prior notice to the Users.
                </p> <br />

                <p>
                Each Indic Law User will be provided with a unique referral code (“Referral Code”), which they can share with Invitees. If an Invitee enters the Code on the purchase of their first Eligible Course, the Invitee shall receive a “Discount” of ₹500 only and their Referrer will receive a “Referral Reward” of ₹500 only.
                </p> <br />

                <p>
                A Referrer can only receive a Referral Reward from the first Eligible Course purchase of each User they invite. An Invitee is eligible to receive a maximum of 1 Discount, which shall be on their first purchase of an Eligible Course. A User cannot use more than one Referral Code.
                </p> <br />

                <p>
                Eligible Course includes all Courses available on Indic Law.
                </p> <br />

                <p>
                To Redeem a Referral Reward, the Referrer can submit their Bank Account details or UPI ID. The Users shall submit the correct Bank Account details or UPI ID, and We shall not be liable for any mistakes in such details submitted.
                </p> <br />

                <p>
                Such details submitted shall be stored by Razorpay, and it will be processed in accordance to Razorpay’s Terms and Conditions available <a href="https://razorpay.com/terms/" target="_blank" rel="noreferrer">here</a>. Indic Law shall not be liable for any data loss associated with such data.
                </p> <br />

                <p>
                Redemption of Referral Rewards shall be processed by Razorpay. A Referee can only Redeem one Referral Reward at a time. Such Redemption shall be processed in accordance to Razorpay’s Terms and Conditions available <a href="https://razorpay.com/terms/" target="_blank" rel="noreferrer">here</a>.
                </p> <br />

            </div>
        </div>
        </>

    )
}

export default Referral
