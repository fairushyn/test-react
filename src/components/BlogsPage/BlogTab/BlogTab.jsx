import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { InputBase } from '@material-ui/core'
import search from '../../../assets/svg/search.svg'
import './BlogTab.css'

import BlogAll from '../BlogAll/BlogAll'
import BlogCategory from '../BlogCategory/BlogCategory'
import BlogSidebar from '../BlogSidebar/BlogSidebar'

export default function BlogTab() {

    const path = useParams();
    const history = useHistory();

    const MapIndexToTab = {
        0: "all",
        1: "NewUpdates",
        2: "Opportunities",
        3: "Interviews",
    };

    const MapTabToIndex = {
        all: 0,
        NewUpdates: 1,
        Opportunities: 2,
        Interviews: 3,
    };

    const [currentTab, setCurrentTab] = useState(MapTabToIndex[path.blog_category]);

    const chooseTabStyle = (t) => {
        return {
            borderBottom: currentTab === t ? '2px solid white' : 'none'
        }
    }

    return (
        <>
            <div className="blogsTab">
                <div className="tabs">
                    <h3 style={chooseTabStyle(0)} onClick={() => {
                            history.push(`/blog/${MapIndexToTab[0]}`)
                            setCurrentTab(0)}
                    }>
                        All
                    </h3>
                    <h3 style={chooseTabStyle(1)} onClick={() => {
                        history.push(`/blog/${MapIndexToTab[1]}`)
                        setCurrentTab(1)}
                    }>
                        news updates
                    </h3>
                    <h3 style={chooseTabStyle(2)} onClick={() => {
                        history.push(`/blog/${MapIndexToTab[2]}`)
                        setCurrentTab(2)}
                    }>
                        opportunities
                    </h3>
                    <h3 style={chooseTabStyle(3)} onClick={() => {
                        history.push(`/blog/${MapIndexToTab[3]}`)
                        setCurrentTab(3)}
                    }>
                        interviews
                    </h3>
                </div>
                <div className="searchBar">
                    <form >
                        <InputBase
                            placeholder="Search the Indic Law Blog"
                            style={{width:'100%',color:'white'}}
                        />
                    </form>
                    <img src={search} alt="" style={{ marginTop: '2px',height:'1.2em',margin:"auto" }}/>
                </div>
            </div>
            <div className="blogtabBody" >
                <div className="blogtabLeft">
                    {currentTab === 0 && <BlogAll />}
                    {currentTab === 1 && <BlogCategory Category="NewUpdates" />}
                    {currentTab === 2 && <BlogCategory Category="Opportunities" />}
                    {currentTab === 3 && <BlogCategory Category="Interviews" />}
                </div>
                <BlogSidebar/>
            </div>
        </>
    )
}
