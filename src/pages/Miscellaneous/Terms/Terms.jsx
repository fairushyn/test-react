import React from 'react'
import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom'

import { LandingpageNav } from '../../../components'

import './Terms.css'

function Terms() {
    return (
        <>
        <Helmet>
            <title>Terms & Conditions</title>
        </Helmet>
        <LandingpageNav />
        <div className="terms">
            <div className="terms_header">
                <h2>Terms and Conditions</h2>
            </div>
            <div className="terms_body">
                <h3>Terms of use</h3>

                <p>
                    These Terms shall govern the relationship between Indic Law Private Limited (‘Company/We/Our/Us’) and its users 
                    (‘User/You/Your’), The Indic Law Website (‘Website’), located at www.indiclaw.com and the Indic Law Mobile Applications 
                    (‘App’) are copyrighted works belonging to Indic Law Private Limited.
                </p>
                <br />
                <p>
                    Your use of the Website, App and any associated products and services shall be deemed to be an acceptance of these Terms. 
                    Therefore, you are advised to read this document before using our Website, App, or any associated products and services of 
                    the Company. Our Website, App, and associated products and services are collectively referred to as ‘Products and Services’ 
                    in this document. If you do not agree with the terms contained herein, please do not use our Products and Services. Your use 
                    of our Products and Services constitutes acceptance of this policy, and you shall be legally bound by this policy regardless of 
                    whether you are a registered user or not.
                </p>
                <br />
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of India, and shall constitute an electronic 
                    record in accordance with the provisions of the Information Technology Act, 2000 and the Information Technology 
                    (Intermediaries Guidelines) Rules, 2011 thereunder, as amended from time to time. These Terms shall be subject to the 
                    exclusive jurisdiction of the competent courts located in Kochi and You hereby accede to and accept the jurisdiction of such 
                    courts.
                </p>
                <br />
                <p>
                    Use: Subject to the terms contained hereunder, we grant you a non-transferable, non-exclusive, revocable, limited license to 
                    access the App and Website solely for your own personal, non-commercial use.
                </p>
                <br />
                <p>You shall not:</p> 
                <ol type = "a">
                    <li><h6>Sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the App or Website; </h6></li>
                    <li><h6>Change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the App or Website; </h6></li>
                    <li><h6>Access the App or Website in order to build a similar or competitive website; and</h6></li>
                </ol>
                <br />
                <p>
                    We reserve the right to change, suspend, or cease the App or Website with or without notice to you. You approve that the Company will not be held liable to you or any third-party for any change, interruption, or termination of the App or Website or any part. All prices are subject to change without notice.
                </p>
                <br />
                <p>
                    Certain Products and Services may require the user to register an account for themselves with us. While registering, 
                    you agree that you are competent to contract as per the Indian Contract Act, 1872. If you register an account with us while 
                    not being competent to contract, it is assumed that You have obtained consent from your parent or legal guardian. By using 
                    the products or Services You warrant that all the data provided by You is accurate and complete and that student using the 
                    Application has obtained the consent of parent or legal guardian (in case of minors). We reserve the right to terminate Your 
                    subscription and/or refuse to provide You with access to Our Products and Services if it is discovered that You are under the 
                    age of 18 years and the consent to use the products or Services is not made by Your parent or legal guardian or any information provided by You is inaccurate. 
                </p>
                <br />

                <p>
                    Information provided by You for such use will be subject to our <Link to="/privacy">Privacy Policy</Link>, and you ensure that such information provided 
                    is accurate, complete and latest. You shall be responsible for maintaining the confidentiality of the account information and for all activities that occur under Your account. 
                </p>
                <br />

                <p>
                    The Company will not be responsible for any consequence that arises as a result of misuse of any kind of Our Application or 
                    any of Our products or Services that may occur by virtue of any person including a minor registering for the Services/products provided. 
                </p>

                <br />

                <p>
                    The “Digest” feature, in neither the App, not the Website per se provide any news or content or information, but a summary of content available in the public domain, by aggregating such content, and lets You access the content through an in-app browser. We do not host, display or transmit any content owned by third parties on its servers, unless We either have a license to host, display or transmit over such content or are otherwise permitted under the applicable law, to do the same. When You read a summary, You may be linked to one of the online sources of such duly aggregated summary. We shall not be liable for anything that happens to You on accessing such links. You agree and acknowledge that neither the App nor the Website does not report and/or broadcast any content (including news) of its own accord and We are not responsible or liable for the content or accuracy of the summary of content that may be accessed by You through the App or Website.
                </p>
                <br />
                <p>
                    If there is reason to believe that there is likely to be a breach of security or misuse of Your account, we may request You 
                    to change the password or we may suspend Your account without any liability to the Company, for such period of time as we deem appropriate in the circumstances. We shall not be liable for any loss or damage arising from Your failure to comply with this provision.
                </p>
                <br />

                <p>
                    Certain features of the App or Website may be subject to additional guidelines, terms, or rules, which will be posted on the App or Website in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
                </p>
                <br />

                <p>
                    All the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in our Products and 
                    Services are owned by Us or Our suppliers. Note that these Terms and access to any of our Products and Services do not grant 
                    you any rights, title or interest in or to any intellectual property rights, except for the limited access rights expressed 
                    in the <Link to="/copyright">Copyright Policy</Link>. The Company and its suppliers reserve all rights not granted in these Terms.
                </p>
                <br />

                <p>
                    In the event of Your breach of these Terms, You agree that the Company will be irreparably harmed and may not have an 
                    adequate remedy in money or damages. The Company therefore, shall be entitled in such event to obtain an injunction 
                    against such a breach from any court of competent jurisdiction. The Company's right to obtain such relief shall not 
                    limit its right to obtain other remedies.
                </p>
                <br />

                <p>
                    Any violation by You of the terms of this Clause may result in immediate suspension or termination of Your Accounts apart 
                    from any legal remedy that the Company can avail. You understand that the violation of these Terms could also result in 
                    civil or criminal liability under applicable laws. In such cases, the Company may also disclose Your Account Information, 
                    if required by any Governmental or legal authority.
                </p>
                <br />

                <p>
                    Any future release, update, or other addition to functionality of the App or Website shall be subject to these Terms. 
                    All copyright and other proprietary notices on the App or Website must be retained on all copies thereof.
                </p>

                <h3>Cancellation and Refund Policy</h3>
                <p>
                    All purchases and payments made will be final and non-refundable, except where explicitly provided as part of an ongoing 
                    marketing promotion. Users can evaluate our Products and Services through the free demo provided, and only purchase our 
                    Services if you are satisfied with it. 
                </p> <br />
                <p>
                    All refunds, if eligible, will be processed within 14 (Fourteen) business days of receiving cancellation request.
                </p>

                <h3>Referral – Terms and Conditions</h3>

                <p>
                    Under the “Referral” Promotion of Indic Law, Users who refer (“Referrer”) other Users (“Invitee”) will get receive an offer amount, set from time to time by Us, on successful purchase of “Eligible Courses” by the Invitee, and the Invitee shall receive a discount on their purchase.
                </p> <br />

                <p>
                Both Referrer and Invitee should be a registered User of Indic Law. The Promotion shall be subject to the rest of the Terms and Conditions.
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

                <h3>Cookie Policy</h3>
                <p>
                    Like any other website, we use ‘cookies’. These cookies are used to store information including visitors’ preferences, 
                    and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience 
                    by customizing our web page content based on visitors’ browser type and/or other information.
                </p>

                <h3>Disclaimer</h3>
                <p>
                    The site is provided on an "as-is" and "as available" basis, and company and our suppliers expressly disclaim any and all 
                    warranties and conditions of any kind, whether express, implied, or statutory, including all warranties or conditions of 
                    merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement.  While every effort has been made to offer the most current, correct, and 
                    clearly expressed information possible in our Products and Services, Neither us, nor any of our suppliers make any guarantee that the site will meet your requirements, will be available on an uninterrupted, timely, 
                    secure, or error-free basis, or will be accurate, reliable, free of viruses or other harmful code, complete, legal, or safe.  If applicable law requires any warranties with respect to the site, all such warranties are limited in duration to ninety (90) days from the date of first use. 
                </p>
                <br />
                <p>
                    From time to time, Our Products and Services may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s). You may not create a link to the Website from another website or document without the Company's prior written consent.
                </p>
                <br />
                <p>
                    Our Products and Services may only be compatible with certain devices. We shall not be obligated to provide access to any devices incompatible with the Company's products and Services. The company reserves the right to upgrade the type of compatible devices as required from time to time.
                </p>
                <br />
                <p>
                    Subscription or Purchase of any of our Products and Services or usage of it does not in any manner guarantee admission to any educational institutions or passing of any exams or achievement of any specified percentage of marks in any examinations.
                </p>
                <br />

                <p>
                    We will not be responsible or liable for any content uploaded by Users directly on the Website or Application, irrespective of whether We have certified or verified any such content. We would not be responsible to verify whether such contents placed by any User contain any infringing materials.
                </p>
                <br />

                <p>
                    As part of our Products, and Services we may periodically contact you on your phone number, or email address. We may also make use of your address provided with us for the purposes of communicating with you. This is done for the purposes of reaching out to you about our Products, and Services, or to provide you with information that we think may be useful to you. You may opt out of this by sending a mail to <a href="mailto:support@indiclaw.com">support@indiclaw.com</a>. However, you may not be able to take full advantage of our Products, and Services if you opt out. You shall not hold us liable for any adverse consequence that may arise on account of your opting out.
                </p>

                <h3>Indemnity</h3>
                <p>
                    You hereby agree to defend, indemnify and hold harmless the Company, its officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: 
                </p>
                <br />
                <ol type = "i">
                    <li><h6>Your use of/access of any of our Products and Services;  </h6></li>
                    <li><h6>Your violation of any term of these Terms or any other policy of the Company; </h6></li>
                    <li><h6>Your violation of any third party right, including without limitation, any copyright, property, or privacy right; or</h6></li>
                    <li><h6>Any claim that Your use of our Products or Services has caused damage to a third party. </h6></li>
                </ol>
                <br />

                <p>This defense and indemnification obligation will survive these Terms.</p>
                <br />

                <p>
                    You hereby release and forever discharge the Company and our officers, employees, agents, successors, and assignees from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature, that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, our Products and Services. In no event shall the Company, its officers, directors, employees, partners or agents be liable to You or any third party for any special, incidental, indirect, consequential or punitive damages whatsoever, including those resulting from loss of use, data or profits or any other claim arising out, of or in connection with, Your use of, or access to, the Application.
                </p>
                <br />
                <p><span className="bold_title">Privacy:</span> Please refer to our <Link to="/privacy">Privacy Policy</Link></p> <br />

                <h3>Limitation of Liability:</h3>
                <p>
                    To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or any third-party for any lost profits, lost data, costs of procurement of substitute products, or any indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating to these terms or your use of, or incapability to use the site even if company has been advised of the possibility of such damages.  Access to and use of the site is at your own discretion and risk, and you will be solely responsible for any damage to your device or computer system, or loss of data resulting therefrom.
                </p>

                <h3>Power to revise</h3>
                <p>
                    These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us and/or by prominently posting notice of the changes on our Site.  You are responsible for providing us with your most current e-mail address.  In the event that the last e-mail address that you have provided us is not valid our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice.  Any changes to these Terms will be effective upon the earliest of thirty (30) calendar days following our dispatch of an e-mail notice to you or thirty (30) calendar days following our posting of notice of the changes on our Site.  These changes will be effective immediately for new users of our Site.  Continued use of our App or Website following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes. 
                </p>

                <h3>Contact Information</h3>
                <p><span className="bold_title">Address:</span>H No. 44/3404, E. Marakar Manzil, George Eaden Rd, Kaloor, Kerala 682017</p>
                <p><span className="bold_title">Email:</span><a href="mailto:support@indiclaw.com">support@indiclaw.com</a></p>
            </div>
        </div>
        </>
    )
}

export default Terms
