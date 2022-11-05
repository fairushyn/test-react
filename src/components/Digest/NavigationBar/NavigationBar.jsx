import React, { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';

import { IconButton, ListItem, ListItemText, Drawer, Divider, List, Collapse,Menu, MenuItem } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Search from '../Search/Search';
import SigninLogin from '../../SigninLogin/SigninLogin'
import './NavigationBar.css'

import menu from '../../../assets/svg/menu.svg'
import new_logo_white from '../../../assets/svg/new_logo_white.svg'
//import search from '../../../assets/svg/search.svg'
//import bookmark from '../../../assets/svg/bookmark.svg'
import { GrTwitter, GrLinkedinOption, GrFacebookOption } from "react-icons/gr";


const useStyles = makeStyles({
    MuiDrawer: {
        backgroundColor: "#8082BF",
        width:'15em',
        color:'white',
        fontFamily:' Roboto',
        fontStyle:' normal',
        fontWeight:' normal',
        fontSize:' 24px',
        overflowY:'hidden',
    }
});


const API_URL = 'https://api.indiclaw.com/digest/search?title=';

export default function NavigationBar() {

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [type, setType] = useState('');
    const [items, setItems] = useState();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openDigest, setOpenDigest] = useState(false);
    const handleopenDigest = () => {
        setOpenDigest(!openDigest);
    };

    const [openBlogCategory, setOpenBlogCategory] = useState(false);
    const handleopenBlogCategory = () => {
        setOpenBlogCategory(!openBlogCategory);
    };

    const [openSignin, setOpenSignin] = useState(false);

    const handleLoginOpen = () => {
      setOpenSignin(true);
    };
    const handleLoginClose = () => {
      setOpenSignin(false);
    };

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`${API_URL}${query}${type}`);
            setItems(result.data.digest)
            // console.log(items)
        }

        fetchItems()

    }, [query, type])


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    return (
        <div>
            <Drawer     
                variant="temporary"
                onBackdropClick={handleDrawerClose}
                onEscapeKeyDown={handleDrawerClose}
                anchor="left"
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className="drawer"
            >
                <div className="div-closebtn">
                    <CloseIcon onClick={handleDrawerClose} className="closebtn-icon"/>
                </div><br/>
                <div className="drawer_component">
                    <List style={{ padding: '1em 1.8em'}}>
                    <Link to="/" className="drawerLinks">
                        <ListItem className="drawerListitem" onClick={handleDrawerClose}>
                            <ListItemText>
                                HOME
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Divider className="drawer-divider"/>

                    <ListItem button onClick={handleopenDigest} className="drawerListitem">
                        <ListItemText>
                            THE DIGEST
                        </ListItemText>
                        {openDigest ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDigest} timeout="auto" onClick={handleDrawerClose}>
                        <List className="nav_digest_categories">
                            <Link to="/digest" className="drawerLinksDigest">
                                <ListItem className="drawerListitemDigest">
                                    <ListItemText>
                                        ALL
                                    </ListItemText>
                                </ListItem>
                            </Link>

                            <Link to="/digest/CurrentAffairs" className="drawerLinksDigest">
                                <ListItem className="drawerListitemDigest">
                                    <ListItemText>
                                        CURRENT AFFAIRS
                                    </ListItemText>
                                </ListItem>
                            </Link>
                            
                            <Link to="/digest/Judgements" className="drawerLinksDigest">
                                <ListItem className="drawerListitemDigest">
                                    <ListItemText>
                                        JUDGEMENTS
                                    </ListItemText>
                                </ListItem>
                            </Link>

                            <Link to="/digest/BillsLaws" className="drawerLinksDigest">
                                <ListItem className="drawerListitemDigest">
                                    <ListItemText>
                                        BILLS & LAWS
                                    </ListItemText>
                                </ListItem>
                            </Link>
                            
                            <Link to="/digest/History" className="drawerLinksDigest">
                                <ListItem className="drawerListitemDigest">
                                    <ListItemText>
                                        HISTORY
                                    </ListItemText>
                                </ListItem>
                            </Link>
                        </List>
                    </Collapse>

                    <Divider className="drawer-divider"/>

                    <Link to="/clat-online-coaching" className="drawerLinks">
                        <ListItem className="drawerListitem" onClick={handleDrawerClose}>
                            <ListItemText>
                                CLAT
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Divider className="drawer-divider"/>

                    {/* <Link to="/clat" className="drawerLinks">
                        <ListItem className="drawerListitem" onClick={handleDrawerClose}>
                            <ListItemText>
                                CLAT 2021
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Divider className="drawer-divider"/> */}

                    <ListItem button onClick={handleopenBlogCategory} className="drawerListitem">
                        <ListItemText>
                            BLOG
                    </ListItemText>
                        {openBlogCategory ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openBlogCategory} timeout="auto" onClick={handleDrawerClose}>
                        <List className="nav_digest_categories">
                            <Link to="/blog/all" className="drawerLinksDigest">
                                <ListItem className="drawerListitemDigest">
                                    <ListItemText>
                                        ALL
                                </ListItemText>
                                </ListItem>
                            </Link>
                            <Link to="/blog/NewUpdates" className="drawerLinksDigest">
                                <ListItem className="drawerListitemDigest">
                                    <ListItemText>
                                        NEWS UPDATES
                                </ListItemText>
                                </ListItem>
                            </Link>

                            <Link to="/blog/Opportunities" className="drawerLinksDigest">
                                <ListItem className="drawerListitemDigest">
                                    <ListItemText>
                                        OPPORTUNITIES
                                </ListItemText>
                                </ListItem>
                            </Link>

                            <Link to="/blog/Interviews" className="drawerLinksDigest">
                                <ListItem className="drawerListitemDigest">
                                    <ListItemText>
                                        INTERVIEWS
                                </ListItemText>
                                </ListItem>
                            </Link>
                        </List>
                    </Collapse>
                    <Divider className="drawer-divider"/>

                    <Link to="/about" className="drawerLinks">
                        <ListItem className="drawerListitem" onClick={handleDrawerClose}>
                            <ListItemText>
                                ABOUT US
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/people" className="drawerLinks">
                        <ListItem className="drawerListitem" onClick={handleDrawerClose}>
                            <ListItemText>
                                PEOPLE
                            </ListItemText>
                        </ListItem>
                    </Link>

                    <ListItem className="drawerListitem" id="menuMobileView">
                        <ListItemText>
                            <SigninLogin handleLoginClose={handleLoginClose} handleLoginOpen={handleLoginOpen} openSignin={openSignin} />
                        </ListItemText>
                    </ListItem>
                </List>
                <div className="drawer_bottom" >
                    <div className="db_left">
                        <Link to="/privacy">Privacy Policy</Link>
                        <div className="db_divider">|</div>
                        <Link to="/terms">Terms of Conditions</Link>
                    </div>
                    <div className="db_right">
                            <a href="https://www.facebook.com/indiclawproject" target="_blank" rel="noreferrer"><GrFacebookOption className="db_socialmediaicon" /></a>
                            <a href="https://twitter.com/indiclawproject" target="_blank" rel="noreferrer"><GrTwitter className="db_socialmediaicon" /></a>
                            <a href="https://www.linkedin.com/company/indiclaw/" target="_blank" rel="noreferrer"><GrLinkedinOption className="db_socialmediaicon" /></a>
                    </div>
                </div>
                </div>
            </Drawer>
            <div className="Navbar">
                <div className="nav-left">
                    <IconButton
                        style={{borderRadius: '100%'}}
                        disableFocusRipple={true}
                        disableRipple={true}
                        onClick={handleDrawerOpen}
                    >
                        <img src={menu} alt="" className="menu"/>
                    </IconButton>
                    <Link to="/">
                        <img src={new_logo_white} alt="" className="brandName" />
                    </Link>
                    <Link to="/digest" id="navLeftLink" style={{ marginLeft: '2.5em', marginRight: '10px' }} activeStyle={{ borderBottom: '2px solid white'}}>
                        All
                    </Link>
                    <Link to="#" id="navLeftLink" onClick={handleClick} style={{display:'flex'}}>
                        <p style={{ margin:'auto' }}>Categories</p>
                        <p style={{ marginTop:'4px' }}>{anchorEl ? <ExpandLess /> : <ExpandMore />}</p>
                    </Link>
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link to="/digest/BillsLaws"><MenuItem onClick={handleClose} id="menuitem">bills/laws</MenuItem></Link>
                        <Link to="/digest/Judgements"><MenuItem onClick={handleClose} id="menuitem">judgement</MenuItem></Link>
                        <Link to="/digest/CurrentAffairs"><MenuItem onClick={handleClose} id="menuitem">current affairs</MenuItem></Link>
                        <Link to="/digest/History"><MenuItem onClick={handleClose} id="menuitem">history</MenuItem></Link>
                    </Menu>
                </div>            
                <div className="nav-right">
                    {/* <div className="searchbar">                        
                        <InputBase
                            placeholder="Search…"
                            className="nav-inputbase"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <div className="searchicon">
                            <img src={search} alt="" style={{marginTop:'-6px'}}/>
                        </div>
                    </div>                     */}
                    <Search getQuery={(q) => setQuery(q)} items={items} getType={(t) => setType(t)}/>
                    {/*<IconButton className="nav-icon" color="inherit" style={{ margin:'auto' }}>
                        <img src={bookmark} alt=""/>
                    </IconButton> */}

                    {/* LOGIN BUTTON  */}
                    <SigninLogin handleLoginClose={handleLoginClose} handleLoginOpen={handleLoginOpen} openSignin={openSignin} />


                </div>
                <div className="navRightMobile">
                <Search getQuery={(q) => setQuery(q)} items={items} getType={(t) => setType(t)}/>
                    {/* <div className="searchbar-mobile">
                        <InputBase
                            placeholder="Search…"
                            className="nav-inputbase-mobile"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton className="searchicon">
                            <img src={search} alt="" style={{ marginTop: '-2px' }} />
                        </IconButton>
                    </div> */}
                    {/*<IconButton className="moreIcon" onClick={handleClick}>
                        <MoreVertIcon className="moreiconbtn"/>
                    </IconButton>*/}
                </div>
                {/*{renderMobileMenu}*/}
            </div>
        </div>
    );
}