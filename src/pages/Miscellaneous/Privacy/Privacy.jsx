import React from 'react'
import { Helmet } from 'react-helmet'
import { LandingpageNav } from '../../../components'

import './Privacy.css'

function Privacy() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy</title>
            </Helmet>
            <LandingpageNav />
            <div className="privacy">
                <div className="privacy_header">
                    <h2>Privacy Policy</h2>
                </div>
                <div className="privacy_body">
                    <p>
                        Indic Law Private Limited (‘Company/We/Our/Us’) takes your privacy seriously. This privacy policy (‘Policy’) explains the data, 
                        and information we collect from you. Your use of indiclaw.com (‘Website’), Indic Law application (‘App’) and associated products 
                        and services signifies your acceptance of this policy. Therefore, you are requested carefully peruse this policy before using our 
                        website, app, or any associated products and services of the Company.
                    </p>
                    <br />
                    <p>
                        Our website, app, and associated products and services are collectively referred to as ‘Products and Services’ in this policy.
                    </p>
                    <br />
                    <p>
                        If you do not agree with the terms of this policy, please do not use our Products and Services.
                        Your use of our Products and Services constitute acceptance of this policy, and you shall be legally bound by 
                        this policy regardless of whether you are a registered user or not.
                    </p>

                    <h3>Information</h3>

                    <p>On your registration with us, we collect information pertaining to the following from you:</p>
                    <p>1.	Name</p>
                    <p>2.	Phone Number</p>
                    <p>3.	Email Address</p>
                    <p>4.	Domicile</p>
                    <p>5.	Address and</p>
                    <p>6.	Educational Qualification</p>
                    <br />

                    <p>
                        In addition to the above, we may collect any information you provide by way biography feature in our products 
                        and services. The ‘biography feature’ allows users to share their biography, and details pertaining to educational 
                        institution, and year of study. The information you provide by way of biography feature may be publicly visible. 
                        The use of biography feature is entirely optional, and your use of the biography feature signifies acceptance of any 
                        risk associated with public disclosure of the information therein provided. You also agree that we shall not be responsible in
                        any manner for any adverse consequence arising from the use of the biography feature.
                    </p>
                    <br />

                    <p>
                        When you access our website, and app, our servers automatically log information that your browser, and phone sends 
                        whenever you visit a website , or use an app(‘Server Log). The information collected as server log comprises information 
                        relating to web request, Internet Protocol address, browser type, browser language, mobile device you use, your mobile devices 
                        unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, 
                        the date and time of your request, location, and one or more cookies that may uniquely identify your browser.
                        We may also collect information pertaining your score, progress, average reading speed, time spent on the Products, 
                        and Services, and other information that you may generate on account of your use of our Products, and Services (‘Progress Statistics’).
                    </p>
                    <br />

                    <p>
                        The information so collected, including Personal Information, Sensitive Personal Information, Server Log, and Progress Statistics constitute ‘Information’.
                    </p>
                    <br />

                    <h3>Use of Information</h3>

                    <p>
                        The information that we collect from you may be used to provide you tailored experience with our Products, 
                        and Services. Consequently, in addition to collection of these information, you understand, and agree that it may 
                        be used by us for providing you access to our Products, and Services, to track your progress, to make recommendations and suggestions, 
                        to market our Products, and Services, to personalise content, and for internal purposes, including research and development of products, and services.
                        In order to improve our Products, and Services, we may transmit Information to third party services providers 
                        as required by their agreement with us. The information shared in this regard shall be minimal, and as per the 
                        requirements of the third-party services we use. The information so shared shall at no time vest in the third-party services providers any independent right over the information shared.
                    </p>
                    <br />
                    <p>
                        We may also use your information in anonymised, or aggregate form internally, and externally. <br />
                        We do not sell, or license in any form the information we collect from you.
                    </p>

                    <h3>Disclosure</h3>

                    <p>
                        We do not normally disclose any information you provide us with except by way of biography feature, which may be 
                        publicly accessible. However, where there is a legal requirement to disclose any information collected, we may 
                        disclose your information as per the applicable law in that regard.
                        We may disclose information collected as progress statistics for the purpose of our publicly visible leader board 
                        feature. The ‘leader board feature’ ranks our users as per their performance on the various parameters of the app. In addition to the progress statistics, we may also disclose your name. However, you may opt out of the leader board feature by contacting <a href="mailto:support@indiclaw.com">support@indiclaw.com</a>.
                    </p>

                    <h3>Mobile Number Verification</h3>

                    <p>
                        We use Truecaller SDK to verify mobile numbers of users. For users already using Truecaller, an automatic verification will occur. For users who do not use Truecaller, a drop call will be sent to the User’s phone to verify their phone number. 
                    </p> <br />

                    <p>In order to allow this, we request the following permissions: </p>
                    <p>
                        “READ_PHONE_STATE” <br />
                        “READ_CALL_LOG” <br />
                        “ANSWER_PHONE_CALLS” <br />
                        “CALL_PHONE” <br />
                    </p> <br />

                    <p>
                        We use these permissions only for the purpose of verifying a User’s phone number. The data collected is used by Truecaller, in accordance with their terms found <a href="https://www.truecaller.com/terms-of-service" target="_blank" rel="noreferrer">here</a>.
                    </p>

                    <h3>Alert and Correspondence</h3>

                    <p>
                        As part of our Products, and Services we may periodically contact you on your phone number, or email address. 
                        We may also make use of your address provided with us for the purposes of communicating with you. 
                        This is done for the purposes of reaching out to you about our Products, and Services, for transactional services like 
                        sending OTPs for registration, or to provide you with information that we think may be useful to you.
                        You may opt out of this by sending a mail to <a href="mailto:support@indiclaw.com">support@indiclaw.com</a>. 
                        However, you may not be able to take full advantage of our Products, and Services if you opt out. You shall not hold us liable for any adverse consequence that may arise on account of your opting out.
                    </p>

                    <h3>Data Retention</h3>

                    <p>
                        We retain your data in personally identifiable form for a period of one (1) year for internal purposes. We may also retain your data in aggregate, and anonymised form for a period of three (3) years. In case any law requires us to retain your information in whole or part for longer, we shall retain your data to that extent prescribed by the applicable law.
                    </p>

                    <h3>Cookies</h3>

                    <p>
                        Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
                        Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse allcookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you maynot be able to use some portions of our Site
                    </p>

                    <h3>Security</h3>

                    <p>
                        We shall take all reasonable measures, and care to protect the information you provide to us. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                        Consequently, by using our Products, and Services, you understand, and accept the risks associated with providing us information. We shall not be responsible for any adverse consequences that may arise, including any damage, or harm, legal, pecuniary, physical, or mental, on account of the information that you provide to us.
                    </p>

                    <h3>Acceptance</h3>

                    <p>
                        By using our Products, and Services, you signify your acceptance to the terms of this policy, and you shall be legally bound by the letter, and spirit of this policy.
                    </p>

                    <h3>Changes in Policy</h3>

                    <p>
                        We reserve the right to add, modify, or delete any terms in this policy. In case we effect to changes in this policy, the same shall be communicated to you by reasonable methods.
                    </p>

                </div>
            </div>
        </>
    )
}

export default Privacy
