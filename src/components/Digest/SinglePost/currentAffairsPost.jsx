import React, { useState } from 'react'
import './SinglePost.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { Button } from '@material-ui/core'
import stripPTag from '../../../utils/stripPTag';
import parse from 'html-react-parser';

function CurrentAffairPost({ slide, font, currentTab}){
    const length = slide.length;
    const [current, setCurrent] = useState(currentTab-1);
    const [tab, setTab] = useState(currentTab-1)

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setTab(tab === length - 1 ? 0 : tab + 1);
        window.scrollTo({top:1000, behavior: 'smooth'});
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setTab(tab === 0 ? length - 1 : tab - 1);
        window.scrollTo({top:1000, behavior: 'smooth'});
    };

    const handleNews = () => {
        setCurrent(0)
        setTab(0)
    }

    const handleContext = () => {
        setCurrent(1)
        setTab(1)
    }

    const handleLearnings = () => {
        setCurrent(2)
        setTab(2)
    }

    const chooseTab = {
        0 : 'NEWS' ,
        1: 'CONTEXT',
        2: 'LEARNINGS'
    }


    const chooseTabStyle = (t) => {
        return {
            borderBottom: tab === t ? '3px solid #2F315D' : 'none',
            opacity: tab  === t ? '1' : '0.7',
            paddingBottom: tab  === t ? '0.3rem' : '0',
            fontWeight: tab  === t ? 'bolder' : '500'
        }
    }

    return(
        <div className="postBody">
            <div className="postBodyNav">
                <h6>
                    <IoIosArrowBack onClick={prevSlide} style={{ fontSize: '2rem' }} className="postBodyHeader_icon"/>
                </h6>
                <h6 onClick={handleNews} style={chooseTabStyle(0)}>NEWS</h6>
                <h6 onClick={handleContext} style={chooseTabStyle(1)}>CONTEXT</h6>
                <h6 onClick={handleLearnings} style={chooseTabStyle(2)}>LEARNINGS</h6>
                <h6>
                    <IoIosArrowForward onClick={nextSlide} style={{ fontSize: '2rem' }} className="postBodyHeader_icon"/>
                </h6>
            </div>
            <div className="postBodyContent" >
                {slide.map((slide, index) => {
                    return (
                        <>
                            {index === current && (
                                <p className="textTwo" style={{ fontSize: `${font}px` }} key={current}>
                                    {parse(stripPTag(slide.text))}
                                </p>
                            )}

                        </>

                    );
                })}

            </div>
            <div className="postBodyFooter">
                <IoIosArrowBack className="postBodyFooter_icon" onClick={prevSlide} style={{ fontSize: '2rem', margin: '2rem' }} />
                <IoIosArrowForward className="postBodyFooter_icon" onClick={nextSlide} style={{ fontSize: '2rem', margin: '2rem' }} />
                
                <div className="postBodyFooter_left">
                    <Button
                        startIcon={<MdArrowBack />}
                        onClick={prevSlide}
                    >
                        {chooseTab[tab === 0 ? length - 1 : tab - 1]}
                    </Button>
                </div>
                <div className="postBodyFooter_right">
                    <Button
                        endIcon={<MdArrowForward />}
                        onClick={nextSlide}
                    >
                        {chooseTab[tab === length - 1 ? 0 : tab + 1]}
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default CurrentAffairPost;