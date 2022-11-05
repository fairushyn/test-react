import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import stripHtml from '../../../utils/stripHtml';
import StorageImage from "../../imageRenderers/StorageImage";
import TextTruncate from 'react-text-truncate';

import './JudgeBill.css'

export default function JudgeBillCards({ type, img, title, text, individualPost_url }) {

    const renderCardAction = (type) => {
        switch (type) {
            case 'Bills/Laws':
                return (
                    <div className="jb_footer">
                        <Link to={individualPost_url+'/1'}>NEWS</Link>
                        <Link to={individualPost_url+'/2'}>CONTEXT</Link>
                        <Link to={individualPost_url+'/3'}>FEATURES</Link>
                        <Link to={individualPost_url+'/4'}>DIALOUGE</Link>
                    </div>
                );

            case 'Judgements':
                return (
                    <div className="jb_footer">
                        <Link to={individualPost_url+'/1'} >NEWS</Link>
                        <Link to={individualPost_url+'/2'}>CONTEXT</Link>
                        <Link to={individualPost_url+'/3'}>LAWS</Link>
                        <Link to={individualPost_url+'/4'}>RATIO</Link>
                    </div>
                );

            default:
                return;
        }
    }
    return (
        <div>
            <div className="jb_Card">
                <Link to={individualPost_url + '/1'}>
                    <Grid container>
                        <Grid item xs={12} className="card-mobile-img" >
                            <div className="card-mobile-img">
                                <StorageImage path="digest" imageId={img} />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={8} className="jb_card_content">
                            <Link to={individualPost_url + '/1'} className="jb_cardHeader">
                                {title}
                            </Link>
                            <p className="jb_text">
                                <TextTruncate
                                    line={3}
                                    text={stripHtml(text)}
                                    truncateText=" ..."
                                />
                            </p>
                            {renderCardAction(type)}
                        </Grid>
                        <Grid item md={4} className="card-laptop-img" >
                            <div className="card-laptop-img" style={{ height: '100%' }}>
                                <StorageImage path="digest" imageId={img} />
                            </div>
                        </Grid>
                    </Grid>
                </Link>
            </div>
        </div>
    )
}
