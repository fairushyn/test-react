import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import {Grid, Button } from '@material-ui/core/'
import { MdKeyboardArrowRight } from "react-icons/md";
import axios from 'axios'
import TextTruncate from 'react-text-truncate';

import FourNotFour from '../../../pages/Miscellaneous/FourNotFour/FourNotFour';
import stripHtml from '../../../utils/stripHtml';
import StorageImage from "../../imageRenderers/StorageImage";

import './Category.css'

const categories = ['CurrentAffairs', 'Judgements', 'History', 'BillsLaws']


const API_URL = 'https://api.indiclaw.com/digest/search';

function Category() {
    const cat = useParams();

    const returnType = () =>{
        if(cat.category === 'BillsLaws')
        {
            return 'Bills/Laws';
        }
        else{
            return cat.category
        }
    }

    const catType = returnType();

    const [digest, setDigest] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get(API_URL, {
                params: {
                    types: catType,
                }
            })
                .then(res => {
                    setDigest(res.data.digest);
                })
                .catch(err => console.log(err))
        }

        fetchData()
    }, [cat.category])


    const url = (type, id) => {
        if (type === 'Bills/Laws') {
            return (
                '/digest/BillsLaws/' + id + '/1'
            );
        }
        else {
            return(
                '/digest/' + type + '/' + id + '/1'
            )
        }
    }

    const Cards = digest.map((item) => {
        return (
            <div className="CategoryCard" key={item._id}>
                <Link to={url(item.digestType, item._id)} >
                    <Grid container>
                        <Grid item xs={8} className="cat_card_content">
                            <h6>{item.title}</h6>
                            <p className="CategoryCard_text">
                                <TextTruncate
                                    line={3}
                                    text={stripHtml(item.context)}
                                    truncateText=" ..."
                                />
                            </p>
                            <div className="read_mobile">
                                <Button endIcon={<MdKeyboardArrowRight />}>
                                    Read
                                </Button>                           
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="cardImg" style={{height:'100%'}}>
                                <Link to={url(item.digestType, item._id)}>
                                    <StorageImage path="digest" imageId={item.imageId} />
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Link>
            </div>
        );
    });

    function renderCategoryName(category) {
        if (category === 'BillsLaws')
            return 'Bills & Laws';
        else if (category === 'CurrentAffairs')
            return 'Current Affairs';
        else
            return category;
        
    }


    return (
        <>
            {categories.includes(cat.category) ? (
                <div className="Category">
                    <div className="cat_container">
                        <div className="cat_header">
                            <h4>{renderCategoryName(cat.category)}</h4>
                            <div className="line"></div>
                        </div>
                        <div className="cat_body">
                            {Cards}
                        </div>
                    </div>
                </div>
            ) : (
                    <FourNotFour />
                )}
        </>
    );
}
export default Category;