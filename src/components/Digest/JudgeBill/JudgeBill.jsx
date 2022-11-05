import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import billslaws from '../../../assets/svg/billslaws.svg'
import currentaffairs from '../../../assets/svg/currentaffairs.svg'
import history from '../../../assets/svg/history.svg'
import judgements from '../../../assets/svg/judgements.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import JudgeBillCards from './JudgeBillCards';
import './JudgeBill.css'

const API_URL = 'https://api.indiclaw.com/digest/search';

function JudgeBill(){

    const [judgement, setJudgement] = useState([]);
    const [billsLaws, setBillsLaws] = useState([]);


    useEffect(() => {
        async function fetchJudge() {
            await axios.get(API_URL,{
                params:{
                    types:'Judgements'
                }
            })
            .then(res => {
                setJudgement(res.data.digest);
            })
            .catch(err => console.log(err))
        }

        async function fetchBill() {
            await axios.get(API_URL,{
                params: {
                    types: 'Bills/Laws'
                }
            })
            .then(res => {
                setBillsLaws(res.data.digest);
            })
            .catch(err => console.log(err))
        }

        fetchJudge();
        fetchBill();
    }, [])


    const JCards = judgement.slice(0,5).map((item) => {
        const individualPost_url = '/digest/Judgements/' + item._id;
        return (
            <JudgeBillCards type={'Bills/Laws'} img={item.imageId} title={item.title} text={item.context} individualPost_url={individualPost_url} key={item._id} />
        );
    });

    const BCards = billsLaws.slice(0, 5).map((item) => {
        const individualPost_url = '/digest/BillsLaws/' + item._id;
        return (
            <JudgeBillCards type={'Judgements'} img={item.imageId} title={item.title} text={item.context} individualPost_url={individualPost_url} key={item._id} />
        );
    });

    return (
        <div className="JudgeBill">
            <div className="leftside">
                <div className="jb_category">
                    <div className="jb_header">
                        <h1>JUDGEMENTS</h1>
                        <div className="line"></div>
                    </div>
                    {JCards}
                    <div className="view_button">
                        <Link to='/digest/Judgements'><Button color="primary">View All</Button></Link>
                    </div> 
                </div> 

                <div className="jb_category" style={{marginTop:'4em'}}>
                    <div className="jb_header">
                        <h1>bills & laws</h1>
                        <div className="line"></div>
                    </div>
                    {BCards}
                    <div className="view_button">
                        <Link to='/digest/BillsLaws'><Button color="primary">View All</Button></Link>
                    </div>
                </div>
            </div>
            <div className="rightside">
                <div className="Sidebar">
                    <div className="subscribe">
                        <h4>Subscribe to our newsletter:</h4>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="follow">
                        <h4>Follow us on:</h4>
                        <div className="follow_icons">
                            <a href="https://www.facebook.com/indiclawproject" target="_blank" rel="noreferrer"><FaFacebookF className="icon" /></a>
                            <a href="https://twitter.com/indiclawproject" target="_blank" rel="noreferrer"><FaTwitter className="icon" /></a>
                            <a href="https://instagram.com/indiclawproject" target="_blank" rel="noreferrer"><FaInstagram className="icon" /></a>
                        </div>
                    </div>
                    <div className="categories">
                        <div className="catHeading">
                            <h4 className="catTitle">Categories</h4>
                            <div className="line"></div>
                        </div>
                        <div>
                            <Link to='/digest/BillsLaws'>
                                <Button variant="contained" className="catBtn">
                                    <img src={billslaws} alt="" className="btn_svg" />
                                bills / laws
                            </Button>
                            </Link>
                            <br />
                            <Link to='/digest/Judgements'>
                                <Button variant="contained" className="catBtn">
                                    <img src={judgements} alt="" className="btn_svg" />
                                judgement
                            </Button>
                            </Link>
                            <br />
                            <Link to='/digest/CurrentAffairs'>
                                <Button variant="contained" className="catBtn">
                                    <img src={currentaffairs} alt="" className="btn_svg" />
                                current affairs
                            </Button>
                            </Link>
                            <br />
                            <Link to='/digest/History'>
                                <Button variant="contained" className="catBtn">
                                    <img src={history} alt="" className="btn_svg" />
                                history
                            </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JudgeBill;
