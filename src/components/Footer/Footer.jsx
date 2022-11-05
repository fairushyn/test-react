import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import { Grid, IconButton} from '@material-ui/core/';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { GrTwitter, GrLinkedinOption, GrFacebookOption } from "react-icons/gr";

var year = new Date().getFullYear();
export class Footer extends Component {

    render() {
        return (
            <div className="footer">                    
                <div className="row1">
                    <Grid container>
                        <Grid item xs={10} sm={7} lg={6} className="col1">
                            <h5>Stay updated with the law.<br/>Subscribe to our Newsletter.</h5>
                            <div 
                                style={{display:'flex', marginTop:'2em'}}
                            >
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="Email address" 
                                    size="28" 
                                    className="input"
                                />
                                <IconButton aria-label="subscribe-btn" className="IconButton">
                                    <ArrowForwardIosIcon className="subscribe-btn" />
                                </IconButton>
                            </div>                                    
                        </Grid>
                        <Grid item xs={6} sm={3} lg={3} className="pc_view">
                            <ul className="footerCol">
                                <Link to="/about"><li>About</li></Link>
                                <Link to="/people"><li>People</li></Link>
                                <Link to="#"><li>Careers</li></Link> 
                                <Link to="/contact"><li>Contact us</li></Link>
                                {/*<Link to="#"><li>Help</li></Link>*/}
                                <div className="footer_line"></div>
                            </ul>
                        </Grid>
                        <Grid item xs={6} sm={2} lg={3} className="pc_view">
                            <ul className="footerCol" style={{paddingLeft:'0'}}>
                                <Link to="/faq"><li>FAQs</li></Link>
                                <Link to="/copyright"><li>Copyright policy</li></Link>
                                <Link to="/refunds"><li>Cancellation and Refund</li></Link>
                                <Link to="/privacy"><li>Privacy Policy</li></Link>
                                <Link to="/terms"><li>Terms & Conditions</li></Link>
                            </ul>
                        </Grid>
                        <Grid item xs={8} className="mobile_view">
                            <ul className="footerCol">
                                <Link to="/about"><li>About</li></Link>
                                {/*<Link to="#"><li>Our Story</li></Link>*/}
                                <Link to="/refunds"><li>Cancellation and Refund</li></Link>
                                <Link to="/copyright"><li>Copyright policy</li></Link>
                                <Link to="/terms"><li>Terms & Conditions</li></Link>
                            </ul>
                        </Grid>
                        <Grid item xs={4} className="mobile_view">
                            <ul className="footerCol">
                                <Link to="/people"><li>People</li></Link>
                                <Link to="/privacy"><li>Privacy Policy</li></Link>
                                {/*<Link to="/about"><li>Help</li></Link>*/}
                                <Link to="/faq"><li>FAQs</li></Link>
                                <Link to="/contact"><li>Contact us</li></Link>
                            </ul>
                        </Grid>
                    </Grid>
                </div>
                <div className="mobile_view_copyright">
                    <p>&copy; {year} Indic Law</p>
                </div>
                <div className="row2">
                    <div className="footer-social">
                        <a href="https://www.facebook.com/indiclawproject" target="_blank" rel="noreferrer"><GrFacebookOption className="socialmediaicon" /></a>
                        <a href="https://twitter.com/indiclawproject" target="_blank" rel="noreferrer"><GrTwitter className="socialmediaicon" /></a>
                        <a href="https://www.linkedin.com/company/indiclaw/" target="_blank" rel="noreferrer"><GrLinkedinOption className="socialmediaicon" /></a>
                    </div>
                </div>
                <div className="row3">
                    <p>&copy; {year} Indic Law</p>
                </div>
            </div>
        )
    }
}

export default Footer
