import React,{ useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import TextTruncate from 'react-text-truncate';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Grid } from '@material-ui/core/';

import stripHtml from '../../../utils/stripHtml';
import StorageImage from "../../imageRenderers/StorageImage";
import './Cards.css'


const useStyles = makeStyles({
    Cards:{
        background:'#6A6DB4',
        padding:'1em 3em 5em 3em',
    },
    root: {
        maxWidth:'373px',
        background: '#7F81BA',
        bordeRadius: '8px',
        color:'white',
        boxShadow:'none',
        margin:'auto',
        '&:hover, &:focus': {
            background: '#494B90',
            opacity: '0.88'
        }
    },
    actionarea:{
        '&:hover, &:focus': {
            outline: 'none',
            border: 'none'
        }
    },
    media: {
        minHeight: 230,
        borderRadius:'6px',
        '&:hover, &:focus': {
            opacity: '0.88'
        }
    },
    Button:{
        position:'absolute',
        top:'215px',
        left:'55%',
        paddingLeft:'2em',
        paddingRight:'2em',
        paddingTop: '0.5em',
        paddingBottom: '0.5em',
        background: '#80CBC3',
        borderRadius: '34px',
        textTransform:'capitalize',
        boxShadow:'none',
        '&:hover, &:focus': {
            background: '#80CBC3',
        }
    },
    content:{
        padding:'2em',
    },
    heading:{
        color:'white',
        fontSize:'24px',
        fontFamily:'Roboto',
        fontWeight:'500',
    },
    body:{
        color:'white',
        fontSize:'14px',
        fontFamily:'Roboto',
        fontWeight:'300',
        lineHeight:'20px',
        marginBottom:'-1em',
    },
    action:{
        paddingLeft:'1.3em',
        marginBottom:'10px',
    },
    links:{
        fontSize:'14px',
        fontFamily:'Roboto',
        color:'white',
        marginRight:'2em',
        paddingTop:'7px',
        borderTop:'1px solid white'
    }
});

const API_URL = 'https://api.indiclaw.com/digest';

export default function MediaCard() {
    const classes = useStyles();

    const [digestCard, setDigestCard] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            await axios.get(API_URL)
            .then(res => {
                setDigestCard(res.data.digests);
            })
            .catch(err => console.log(err))
        }

        fetchData();
    }, [])

    const individualPost_url = (type, id) => {
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
    const catpage_url = (type) => {
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
    const renderCardAction = (type,id) =>{        
        switch(type){
            case 'CurrentAffairs':
                return(
                    <div className={classes.action}>
                        <Link to={individualPost_url(type,id)+'/1'} className={classes.links} >NEWS</Link>
                        <Link to={individualPost_url(type,id)+'/2'} className={classes.links}>CONTEXT</Link>
                        <Link to={individualPost_url(type,id)+'/3'} className={classes.links}>LEARNINGS</Link>
                    </div>                    
                );

            case 'Bills/Laws':
                return (
                    <div className={classes.action}>
                        <Link to={individualPost_url(type,id)+'/1'} className={classes.links} >NEWS</Link>
                        <Link to={individualPost_url(type,id)+'/2'} className={classes.links}>CONTEXT</Link>
                        <Link to={individualPost_url(type,id)+'/3'} className={classes.links}>FEATURES</Link>
                        <Link to={individualPost_url(type,id)+'/4'} className={classes.links}>DIALOUGE</Link>
                    </div>
                );

            case 'Judgements':
                return (
                    <div className={classes.action}>
                        <Link to={individualPost_url(type,id)+'/1'} className={classes.links} >NEWS</Link>
                        <Link to={individualPost_url(type,id)+'/2'} className={classes.links}>CONTEXT</Link>
                        <Link to={individualPost_url(type,id)+'/3'} className={classes.links}>LAWS</Link>
                        <Link to={individualPost_url(type,id)+'/4'} className={classes.links}>RATIO</Link>
                    </div>
                );

            case 'History':
                return (
                    <div className={classes.action}>
                        <Link to={individualPost_url(type,id)+'/1'} className={classes.links} >NEWS</Link>
                        <Link to={individualPost_url(type,id)+'/2'} className={classes.links}>CONTEXT</Link>
                        <Link to={individualPost_url(type,id)+'/3'} className={classes.links}>LEARNINGS</Link>
                    </div>
                );

            default:
                return;
        }
    }
        
    const RenderCard = digestCard.slice(0, 3).map((item) => {
        return (
            <Grid item xs={4} key={item._id}>
                <Card className={classes.root}>
                    <Link to={individualPost_url(item.digestType, item._id) + '/1'}>
                        <CardActionArea className={classes.actionarea} disableRipple>
                            <CardMedia className="cardmedia">
                                <StorageImage path="digest" imageId={item.imageId} />
                            </CardMedia>
                            <Link to={catpage_url(item.digestType)}>
                                <Button variant="contained" size="small" className={classes.Button}>{item.digestType}</Button>
                            </Link>
                            <CardContent className={classes.content}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
                                        {item.title}
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.body}>
                                    <TextTruncate
                                        line={2}
                                        truncateText=" ..."
                                        text={stripHtml(item.context)}
                                    />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {renderCardAction(item.digestType, item._id)}
                        </CardActions>
                    </Link>
                </Card>
            </Grid>
        );
    })

    return (
        <div className={classes.Cards} id="digest-cards">
            <Grid container spacing={2}>
            { RenderCard }
            </Grid>
        </div>
    );
}

