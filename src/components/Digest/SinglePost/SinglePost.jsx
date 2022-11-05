import React, { useState,useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import CurrentAffairPost from './currentAffairsPost'
import JudgementPost from './JudgementPost'
import BillsPost from './BillsPost'
import HistoryPost from './HistoryPost'
import toDate from '../../../utils/toDate';
import StorageImage from "../../imageRenderers/StorageImage";

import { Paper, Button, Tooltip,Grid } from '@material-ui/core/';
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { MdKeyboardArrowRight } from "react-icons/md";

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import billslaws from '../../../assets/svg/billslaws.svg'
import currentaffairs from '../../../assets/svg/currentaffairs.svg'
import history from '../../../assets/svg/history.svg'
import judgements from '../../../assets/svg/judgements.svg'
import stripHtml from '../../../utils/stripHtml'
import TextTruncate from 'react-text-truncate'

import './SinglePost.css'

const API_URL = 'https://api.indiclaw.com/digest/';

function SinglePost() {

    const url = window.location.href;
    const post = useParams();

    const [digest, setDigest] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [upNext, setUpNext] = useState([]);

    const returnType = () =>{
        if(post.category === 'BillsLaws')
        {
            return 'Bills/Laws';
        }
        else{
            return post.category
        }
    }

    const catType = returnType();

    useEffect(() => {
        async function fetchData() {
            await axios.get(API_URL + post.post_id, {
                params: {
                    id: post.post_id,
                }
            }).then(res => {
                setDigest(res.data.digest)
            })
                .catch(err => console.log(err))


            axios.get(API_URL)
                .then(res => {
                    setSuggestions(res.data.digests);
                })
                .catch(err => console.log(err))                        
        }
        async function fetchUpNext() {
            await axios.get(API_URL+'/search', {
                params: {
                    types: catType,
                }
            })
                .then(res => {
                    setUpNext(res.data.digest);
                })
                .catch(err => console.log(err))
        }

        fetchData()
        fetchUpNext()
    }, [post.post_id])

    const IndividualPosturl = (type, id) => {
        if (type === 'Bills/Laws') {
            return (
                '/digest/BillsLaws/' + id
            );
        }
        else {
            return (
                '/digest/' + type + '/' + id
            )
        }
    }

    const Cards = suggestions.slice(0, 4).map((item) => {
        if (item._id !== digest._id) {
            return (
                <div className="sp_cardBody" key={item._id}>
                    <Link to={IndividualPosturl(item.digestType, item._id)+'/1'} >
                        <h3>{item.title}</h3>
                        <Button endIcon={<MdKeyboardArrowRight />} style={{ padding: '0em', margin: '1em 0' }}>
                            Read
                        </Button>
                    </Link>
                </div>
            );
        }
        else return null;
    });
    
    const renderCardAction = (type, id) => {
        switch (type) {
            case 'CurrentAffairs':
                return (
                    <div className="un_footer">
                        <Link to={IndividualPosturl(type, id) + '/1'} >NEWS</Link>
                        <Link to={IndividualPosturl(type, id) + '/2'}>CONTEXT</Link>
                        <Link to={IndividualPosturl(type, id) + '/3'}>LEARNINGS</Link>
                    </div>
                );

            case 'Bills/Laws':
                return (
                    <div className="un_footer">
                        <Link to={IndividualPosturl(type, id) + '/1'} >NEWS</Link>
                        <Link to={IndividualPosturl(type, id) + '/2'}>CONTEXT</Link>
                        <Link to={IndividualPosturl(type, id) + '/3'}>FEATURES</Link>
                        <Link to={IndividualPosturl(type, id) + '/4'}>DIALOUGE</Link>
                    </div>
                );

            case 'Judgements':
                return (
                    <div className="un_footer">
                        <Link to={IndividualPosturl(type, id) + '/1'} >NEWS</Link>
                        <Link to={IndividualPosturl(type, id) + '/2'}>CONTEXT</Link>
                        <Link to={IndividualPosturl(type, id) + '/3'}>LAWS</Link>
                        <Link to={IndividualPosturl(type, id) + '/4'}>RATIO</Link>
                    </div>
                );

            case 'History':
                return (
                    <div className="un_footer">
                        <Link to={IndividualPosturl(type, id) + '/1'} >NEWS</Link>
                        <Link to={IndividualPosturl(type, id) + '/2'}>CONTEXT</Link>
                        <Link to={IndividualPosturl(type, id) + '/3'}>LEARNINGS</Link>
                    </div>
                );

            default:
                return;
        }
    }

    const upNextCards = upNext.map((item)=>{
        if (item._id !== digest._id) {
        return(
            <div className="upNextCard" key={item._id}>
                <Link to={IndividualPosturl(item.digestType, item._id) + '/1'}>
                    <Grid container>
                        <Grid item xs={8} className="un_card_content">
                            <Link to={IndividualPosturl(item.digestType, item._id) + '/1'} className="un_header">
                                {item.title}
                            </Link>
                            <p className="un_text">
                                <TextTruncate
                                    line={2}
                                    text={stripHtml(item.description)}
                                    truncateText=" ..."
                                />
                            </p>
                            <div>
                                {renderCardAction(item.digestType,item._id)}
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="un_image" style={{ height: '100%'}}>
                                <StorageImage path="digest" imageId={item.imageId} />
                            </div>
                        </Grid>
                    </Grid>
                </Link>
            </div>
        );
        }
        else return null
    })

    const ca_hist_Slides = [
        {
            text: digest.news
        },
        {
            text: digest.context
        },
        {
            text: digest.learnings
        },
    ];
    var JudgeSlides = [];
    if (digest.laws) {
        if (typeof digest.laws === 'string') {
            JudgeSlides = [
                {
                    text: digest.news
                },
                {
                    text: digest.context
                },
                {
                    text: digest.laws
                },
                {
                    text: digest.ratio
                },
            ];
        } else {
            JudgeSlides = [
                {
                    text: digest.news
                },
                {
                    text: digest.context
                },
                {
                    text: digest.laws[0]
                },
                {
                    text: digest.ratio
                },
            ];
        }
    }

    const billsSlides = [
        {
            text: digest.news
        },
        {
            text: digest.context
        },
        {
            text: digest.features
        },
        {
            text: digest.dialogue
        },
    ];

    const [font, setFont] = useState(18)

    const increaseFont = (event) => {
        if (font < 28) {
            setFont(font + 2);
        }
    };
    const decreaseFont = (event) => {
        if (font > 10) {
            setFont(font - 2);
        }
    };
    const defaultFont = (event) => {
        setFont(18);
    };

    const renderPostBody = (catType) => {
        switch (catType) {
            case 'CurrentAffairs':
                return (
                    <CurrentAffairPost slide={ca_hist_Slides} font={font} currentTab={post.content_no}/>
                );

            case 'Bills/Laws':
                return (
                    <BillsPost slide={billsSlides} font={font} currentTab={post.content_no}/>
                );
            case 'Judgements':
                return (
                    <JudgementPost slide={JudgeSlides} font={font} currentTab={post.content_no}/>
                );
            case 'History':
                return (
                    <HistoryPost slide={ca_hist_Slides} font={font} currentTab={post.content_no}/>
                );

            default: return;
        }
    }

    const shareButton = () => {
        if (navigator.share) {
            navigator.share({
                title: digest.title,
                text: digest.description,
                url: url,
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        }
        else {
            navigator.clipboard.writeText(url)
        }
    }

    const categoryUrl = (type) => {
        if (type === 'Bills/Laws') {
            return (
                '/digest/BillsLaws/'
            );
        }
        else {
            return (
                '/digest/' + type + '/'
            )
        }
    }
    return (
        <div className="singlePost">
            <Helmet>
                <title>{`Indic Law - ${digest.title}`}</title>
                <meta name="description" content={digest.title ? digest.title : 'Indic Law'} />
                <meta property="og:description" content={digest.title} />
                <meta property="og:title" content={digest.title} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={'https://storage.indiclaw.com/digest/' + digest.imageId} />
                <meta name="twitter:description" content={digest.title} />
                <meta name="twitter:title" content={digest.title} />
                <meta name="twitter:image" content={'https://storage.indiclaw.com/digest/' + digest.imageId} />
            </Helmet>


            <div className="postHeader">
                <div className="image">
                    <div className="singlepostOverlay"></div>
                    <StorageImage path="digest" imageId={digest.imageId} />
                </div>
                <div className="content">
                    <Link to={categoryUrl(digest.digestType)}>
                        <p>{digest.digestType}</p>
                    </Link>
                    <h1>{digest.title}</h1>
                    <h6><span><CalendarTodayIcon/></span>{toDate(digest.dateCreated)}</h6>
                </div>

            </div>
            <div className="postContainer">
                <div className="pbLeft">
                    <Paper elevation={3} style={{ boxShadow: '0px 12px 24px rgba(127, 57, 251, 0.08)' }}>
                        <div className="fontButtons">
                            <Button style={{ fontSize: '15px' }} onClick={decreaseFont}>A<sup>-</sup></Button>
                            <Button style={{ fontSize: '20px' }} onClick={defaultFont}>A</Button>
                            <Button style={{ fontSize: '24px' }} onClick={increaseFont}>A<sup>+</sup></Button>
                        </div>
                        <p className="textOne" style={{ fontSize: `${font}px` }}>
                            {digest.description}
                        </p>
                    </Paper>
                    {renderPostBody(digest.digestType)}
                    <div className="upNext">
                        <div className="un_heading">
                            <h1>Up next</h1>
                            <div className="line"></div>
                        </div>
                        {upNextCards}
                    </div>
                </div>

                <div className="pbRight">
                    <div className="share">
                        <h4>Share it:</h4>
                        <div className="follow_icons">
                            <Tooltip title="copy link to clipboard" className="copybtn">
                                <IoShareSocialSharp
                                    className="icon"
                                    onClick={shareButton}
                                />
                            </Tooltip>
                            <FacebookShareButton
                                quote={digest.title}
                                url={url}
                                className="icon"
                            >
                                <FaFacebookF />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={url}
                                title={digest.title}
                                className="icon"
                            >
                                <FaTwitter />
                            </TwitterShareButton>
                            <WhatsappShareButton
                                url={url}
                                title={digest.title}
                                className="icon"
                            >
                                <FaWhatsapp />
                            </WhatsappShareButton>
                        </div>
                    </div>

                    <div className="suggestions">
                        <h4>YOU MIGHT LIKE</h4>
                        <div className="cardsSuggest">
                            {Cards}
                        </div>
                    </div>

                    <div className="post_categories">
                        <div className="post_catHeading">
                            <h4 className="catTitle">Categories</h4>
                            <div className="line"></div>
                        </div>
                        
                        <div>
                            <Link to='/digest/BillsLaws'>
                                <Button variant="contained" className="catBtn">
                                    <img src={billslaws} alt="" className="btn_svg"/>    
                                    bills / laws
                                </Button>
                            </Link>
                            <br/>
                            <Link to='/digest/Judgements'>
                                <Button variant="contained" className="catBtn">
                                    <img src={judgements} alt="" className="btn_svg"/> 
                                    judgement
                                </Button>
                            </Link>
                            <br />
                            <Link to='/digest/CurrentAffairs'>
                                <Button variant="contained" className="catBtn">
                                    <img src={currentaffairs} alt="" className="btn_svg"/> 
                                    current affairs
                                </Button>
                            </Link>
                            <br />
                            <Link to='/digest/History'>
                                <Button variant="contained" className="catBtn">
                                    <img src={history} alt="" className="btn_svg"/> 
                                    history
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SinglePost
