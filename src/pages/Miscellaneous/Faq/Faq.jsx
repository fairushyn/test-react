import React from 'react'
import { Helmet } from 'react-helmet'

import { LandingpageNav } from '../../../components'

import './Faq.css'

function Faq() {
    return (
        <>
        <Helmet>
            <title>FAQ</title>
        </Helmet>
        <LandingpageNav />
        <div className="faq">
            <div className="faq_header">
                <h2>FAQ</h2>
            </div>

            <div className="faq_body">
                <h3>Account</h3>
                <p>
                    <span className="bold_title">1.	Can I change my mobile number or email address after signing up? </span> – Yes, a user can change their mobile number or email address even after signing up! This will require verification of the new details through an SMS or a confirmation mail.
                </p>
                <br />

                <p>
                    <span className="bold_title">2.	How do I change my account details?</span> – A user can change their account details within the app by visiting the account page, where the edit icon can be found in the profile section.
                </p> <br />

                <p>
                    <span className="bold_title">3.	Can I login on two devices at the same time?</span> – You cannot login on two devices at the same time. However, if you are accidentally logged out of your account while attempting to do so, you may contact our support team and they will assist you further!
                </p> <br />

                <p>
                    <span className="bold_title">4.	I have not received an OTP for mobile number verification, what do I do?</span> – If you have not received an OTP for mobile number verification, please check if you have entered the correct mobile number and try again. In case you do not receive an OTP still, please contact our support team and they will get back to you at the earliest!
                </p> <br/>

                <p>
                    <span className="bold_title">5.	Can I signup using my email address?</span> – Presently, we are only providing signup using mobile number. However, we will be expanding the options soon, so stay tuned!
                </p> <br />

                <p>
                    <span className="bold_title">6.	Who do I contact for help with my account?</span> – For help with your account, please contact our tech support team at '<a href="mailto:support@indiclaw.com">support@indiclaw.com</a>'.
                </p> <br />

                <h3>Digest</h3>
                <p>
                    <span className="bold_title">1.	Is the digest a paid feature?</span> – No, the digest is completely free and is accessible to anyone who has the Indic Law app. You may also visit our website www.indiclaw.com/digest to read the digest!
                </p> <br />

                <p>
                    <span className="bold_title">2.	Where can I find posts that I have bookmarked/saved?</span> – The 'Bookmarks' section contains all your saved posts so you can easily access them at any time!
                </p> <br />

                <h3>Courses</h3>

                <p>
                    <span className="bold_title">1.	What does the free trial include?</span> – The free trial provides access to part of a module within each subject, including video lectures and handouts for the same. 
                </p> <br />

                <p>
                    <span className="bold_title">2.	How long will I have access to a course after I enrol?</span> – Each course is available for one year from the date of enrolment, including the videos and handouts.
                </p> <br />

                <p>
                    <span className="bold_title">3.	Where do I find my enrolled courses?</span> – The 'Courses' section in the app contains all your courses!
                </p> <br />

                <p>
                    <span className="bold_title">4.	How many times can I access the videos in a course?</span> – The videos in a course will be accessible for one year from the date of enrolment in the course.
                </p> <br />

                <p>
                    <span className="bold_title">5.	How do I view my progress in a course?</span> – On opening an enrolled course, you will be able to see how much of the course you have completed in the form of a progress bar.
                </p> <br />

                <p>
                    <span className="bold_title">6.	Can I download the handouts for offline use?</span> – Yes, the handouts will be available for download for one year from the date on enrolment in a particular course.
                </p> <br />

                <p>
                    <span className="bold_title">7.	Will I have access to course content offline?</span> – If you have enrolled in a course, you will have access to all the course content online as well as offline, for one year from the date of enrolment.
                </p> <br />

                <p>
                    <span className="bold_title">8.	Can I share the videos in a course?</span> – The videos and other content in our courses are non-shareable, however you may invite your friends and family to try a course for free!
                </p> <br />

                <p>
                    <span className="bold_title">9.	Where can I go for help?</span> – You may contact <a href="mailto:support@indiclaw.com">support@indiclaw.com</a> for any queries.
                </p> <br />

                <p>
                    <span className="bold_title">10.	Can I access a course on a computer?</span> – We do not provide courses on computers presently; however, we will be expanding our options soon. Stay tuned!    
                </p> <br />

                <p>
                    <span className="bold_title">11.	Where can I see my test results?</span> – Test results are displayed right after attempting a test, along with a detailed report of the time taken for each section and each question.
                </p> <br />

                <p>
                    <span className="bold_title">12.	Can I attempt an exam more than once?</span> – Yes! A test can be attempted more than once, however, your leader board rank will not change after the first attempt.
                </p> <br />

                <p>
                    <span className="bold_title">13.	How are the leader board ranks calculated?</span> – Leader board ranks consider a user’s score in a test on the first attempt, and the score is calculated by comparing the score with that of other users on the first attempt.
                </p> <br />

                <p>
                    <span className="bold_title">14.	Where do I find exams that I have attempted?</span> – The ‘Exams’ section within each course shows the exams that a user has attempted and has yet to attempt.  
                </p> <br />

                <p>
                <span className="bold_title">15.	How do I solve my doubts?</span> – You can make use of our online chat-box feature to reach out to us and help clear all your doubts!
                </p>

                <h3>Payments and Transactions</h3>

                <p>
                    <span className="bold_title">1.	Can I apply for a discount or a scholarship?</span> – We have a 'whatever you can pay' policy, whereby you can apply for financial aid if you belong to certain categories, you need not pay the full fees at the time of enrolment in a course.
                </p> <br />

                <p>
                    <span className="bold_title">2.	How do I know if I am eligible for financial aid?</span> – Please visit our ‘Apply for Financial Aid’ page to see if you are eligible to apply.
                </p> <br />

                <p>
                    <span className="bold_title">3.	How do I apply for financial aid?</span> – Please visit our ‘Apply for Financial Aid’ page.
                </p> <br />

                <p>
                    <span className="bold_title">4.	What is the cancellation/refund policy?</span> - All purchases and payments made will be final and non-refundable, except where explicitly provided as part of an ongoing marketing promotion. Users can evaluate our Products and Services through the free demo provided, and only purchase our Services if you are satisfied with it. All refunds, if eligible, will be processed within 14 (Fourteen) business days of receiving cancellation request. For any queries, please reach out to <a href="mailto:support@indiclaw.com">support@indiclaw.com</a>
                </p>
            </div>
        </div>
        </>

    )
}

export default Faq
