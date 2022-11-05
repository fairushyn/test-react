import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import './CommGetStarted.css'
import { Button } from '@material-ui/core/';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
//import { GrAndroid, GrApple } from "react-icons/gr";
//import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class CommGetStarted extends Component {
    render() {
        return (
            <div>
                <div className="comm_getstarted">
                    <h1>Join Our Community</h1>
                    <h5>The World of Law awaits you!</h5>
                    <div className="cgs-Container">                        
                        <Button
                            variant="contained"
                            style={{ background: '#00B3A6'}}
                            endIcon={<ArrowForwardIcon style={{fontSize:25, marginLeft:'10px' }}/>}
                        >
                            create an account
                        </Button>
                        {/*<Button
                            variant="contained"
                            startIcon={<GrApple className="icons" />}
                            style={{ background: '#26284C' }}
                        >
                            DOWNLOAD FOR IPHONE
                        </Button>
                        <Grid item xs={1}>
                            <p className="divider"></p>
                        </Grid>
                        <Grid item xs={3} className="cgs-Grid">
                            <Grid item xs={11} className="btnContainer" style={{border:'3.4px solid white'}}>
                                <Link to="/digest">
                                    <Button
                                        variant="outlined"
                                        className="cgs-Btn"
                                        style={{ border: 'none',height:'68px'}}
                                    >
                                        GO TO OUR WEB PORTAL
                                </Button>
                                </Link>     
                            </Grid>                       
                        </Grid>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default CommGetStarted;