import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import SigninLogin from '../SigninLogin/SigninLogin'

import './LandingpageNav.css'
import { IconButton, ListItem, ListItemText, Drawer, Divider, List, Collapse } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import menu from '../../assets/svg/menu.svg'

import { GrTwitter, GrLinkedinOption, GrFacebookOption } from "react-icons/gr";

import new_logo_white from '../../assets/svg/new_logo_white.svg'

const useStyles = makeStyles({
    MuiDrawer: {
        backgroundColor: "#8082BF",
        width:'15em',
        color:'white',
        fontFamily:' Roboto',
        fontStyle:' normal',
        fontWeight:' normal',
        fontSize:' 24px',
        overflowY: 'hidden',
    }
});

export default function LandingpageNav() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openDigest, setOpenDigest] = useState(false);
    const [openSignin, setOpenSignin] = useState(false);
    const [openBlogCategory, setOpenBlogCategory] = useState(false);

    const handleLoginOpen = () => {
        setOpenSignin(true);
    };
    const handleLoginClose = () => {
        setOpenSignin(false);
    };

    const handleopenDigest = () => {
        setOpenDigest(!openDigest);
    };

    const handleopenBlogCategory = () => {
        setOpenBlogCategory(!openBlogCategory);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div style={{position:'sticky', top:'0', zIndex:'999'}}>
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
                    <CloseIcon onClick={handleDrawerClose} className="closebtn-icon" />
                </div><br />
                <div className="drawer_component">
                    <List style={{ padding: '1em 1.8em'}}>
                        <NavLink to="/" className="drawerLinks">
                            <ListItem className="drawerListitem" onClick={handleDrawerClose}>
                                <ListItemText>
                                    HOME
                            </ListItemText>
                            </ListItem>
                        </NavLink>
                        <Divider className="drawer-divider" />

                        <ListItem button onClick={handleopenDigest} className="drawerListitem">
                            <ListItemText>
                                THE DIGEST
                        </ListItemText>
                            {openDigest ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openDigest} timeout="auto" onClick={handleDrawerClose}>
                            <List className="nav_digest_categories">
                                <NavLink to="/digest" className="drawerLinksDigest">
                                    <ListItem className="drawerListitemDigest">
                                        <ListItemText>
                                            ALL
                                    </ListItemText>
                                    </ListItem>
                                </NavLink>

                                <NavLink to="/digest/CurrentAffairs" className="drawerLinksDigest">
                                    <ListItem className="drawerListitemDigest">
                                        <ListItemText>
                                            CURRENT AFFAIRS
                                    </ListItemText>
                                    </ListItem>
                                </NavLink>

                                <NavLink to="/digest/Judgements" className="drawerLinksDigest">
                                    <ListItem className="drawerListitemDigest">
                                        <ListItemText>
                                            JUDGEMENTS
                                    </ListItemText>
                                    </ListItem>
                                </NavLink>

                                <NavLink to="/digest/BillsLaws" className="drawerLinksDigest">
                                    <ListItem className="drawerListitemDigest">
                                        <ListItemText>
                                            BILLS & LAWS
                                    </ListItemText>
                                    </ListItem>
                                </NavLink>

                                <NavLink to="/digest/History" className="drawerLinksDigest">
                                    <ListItem className="drawerListitemDigest">
                                        <ListItemText>
                                            HISTORY
                                    </ListItemText>
                                    </ListItem>
                                </NavLink>
                            </List>
                        </Collapse>

                        <Divider className="drawer-divider" />

                        <NavLink to="/clat-online-coaching" className="drawerLinks">
                            <ListItem className="drawerListitem" onClick={handleDrawerClose}>
                                <ListItemText>
                                    CLAT
                            </ListItemText>
                            </ListItem>
                        </NavLink>
                        <Divider className="drawer-divider" />

                        {/* <NavLink to="/clat" className="drawerLinks">
                            <ListItem className="drawerListitem" onClick={handleDrawerClose}>
                                <ListItemText>
                                    CLAT 2021
                            </ListItemText>
                            </ListItem>
                        </NavLink>
                        <Divider className="drawer-divider" /> */}

                        <ListItem button onClick={handleopenBlogCategory} className="drawerListitem">
                            <ListItemText>
                                BLOG
                            </ListItemText>
                            {openBlogCategory ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openBlogCategory} timeout="auto" onClick={handleDrawerClose}>
                            <List className="nav_digest_categories">
                                <NavLink to="/blog/all" className="drawerLinksDigest">
                                    <ListItem className="drawerListitemDigest">
                                        <ListItemText>
                                            ALL
                                    </ListItemText>
                                    </ListItem>
                                </NavLink>

                                <NavLink to="/blog/NewUpdates" className="drawerLinksDigest">
                                    <ListItem className="drawerListitemDigest">
                                        <ListItemText>
                                            NEWS UPDATES
                                    </ListItemText>
                                    </ListItem>
                                </NavLink>

                                <NavLink to="/blog/Opportunities" className="drawerLinksDigest">
                                    <ListItem className="drawerListitemDigest">
                                        <ListItemText>
                                            OPPPORTUNITIES
                                    </ListItemText>
                                    </ListItem>
                                </NavLink>

                                <NavLink to="/blog/Interviews" className="drawerLinksDigest">
                                    <ListItem className="drawerListitemDigest">
                                        <ListItemText>
                                            INTERVIEWS
                                    </ListItemText>
                                    </ListItem>
                                </NavLink>
                            </List>
                        </Collapse>
                        <Divider className="drawer-divider"/>


                        <NavLink to="/about" className="drawerLinks">
                            <ListItem className="drawerListitem" onClick={handleDrawerClose}>
                                <ListItemText>
                                    ABOUT US
                            </ListItemText>
                            </ListItem>
                        </NavLink>
                        <NavLink to="/people" className="drawerLinks">
                            <ListItem className="drawerListitem" onClick={handleDrawerClose}>
                                <ListItemText>
                                    PEOPLE
                            </ListItemText>
                            </ListItem>
                        </NavLink>
                        
                        <ListItem className="drawerListitem" id="menuMobileView">
                            <ListItemText>
                                <SigninLogin handleLoginClose={handleLoginClose} handleLoginOpen={handleLoginOpen} openSignin={openSignin} />
                            </ListItemText>
                        </ListItem>
                        {/* <Divider className="drawer-divider"/>

                    <ListItem className="drawerListitem">
                        <ListItemText>
                            <NavLink to="/contact" className="drawerLinks">CONTACT US</NavLink>
                        </ListItemText>
                    </ListItem> */}
                    </List>
                    <div className="drawer_bottom">
                        <div className="db_left">
                            <NavLink to="/privacy">Privacy Policy</NavLink>
                            <div className="db_divider">|</div>
                            <NavLink to="/terms">Terms of Conditions</NavLink>
                        </div>
                        <div className="db_right">
                            <a href="https://www.facebook.com/indiclawproject" target="_blank" rel="noreferrer"><GrFacebookOption className="db_socialmediaicon" /></a>
                            <a href="https://twitter.com/indiclawproject" target="_blank" rel="noreferrer"><GrTwitter className="db_socialmediaicon" /></a>
                            <a href="https://www.linkedin.com/company/indiclaw/" target="_blank" rel="noreferrer"><GrLinkedinOption className="db_socialmediaicon" /></a>
                        </div>
                    </div>
                </div>
            </Drawer>
            <div className="lp_Navbar">
                <div className="lp_nav-left">
                    <IconButton
                        disableFocusRipple={true}
                        disableRipple={true}
                        onClick={handleDrawerOpen}
                    >
                        <img src={menu} alt="" className="lp_menu" />
                    </IconButton>
                    <NavLink to="/">
                        <img src={new_logo_white} alt="" className="lp_nav_brandName" />
                    </NavLink>
                </div>
                <div className="lp_nav-center">
                    <NavLink to="/digest">
                        <p>digest</p>
                    </NavLink>
                    <NavLink to="/clat-online-coaching" activeStyle={{ borderBottom: '2px solid white' }}>
                        <p>clat</p>
                    </NavLink>
                    <NavLink to="/blog" activeStyle={{ borderBottom: '2px solid white' }}>
                        <p>blog</p>
                    </NavLink>
                    <NavLink to="/about" activeStyle={{ borderBottom: '2px solid white' }}>
                        <p>about us</p>
                    </NavLink>
                    <NavLink to="/community" activeStyle={{ borderBottom: '2px solid white' }}>
                        <p>Join us</p>
                    </NavLink>
                    <NavLink to="/people" activeStyle={{ borderBottom: '2px solid white' }}>
                        <p>People</p>
                    </NavLink>
                </div>
                {/*<div className="lp_nav-right">
                        <SigninLogin handleLoginClose={handleLoginClose} handleLoginOpen={handleLoginOpen} openSignin={openSignin} />
                        {/*<NavLink to="#" id="lp_nav_loginbtn">
                            <p>login</p>
                        </NavLink>
                        <NavLink to="#" className="joinus">
                            <p>sign up</p>
                        </NavLink>
                    LOGIN BUTTON  */}
                    {/*<SigninLogin handleLoginClose={handleLoginClose} handleLoginOpen={handleLoginOpen} openSignin={openSignin} />
                </div>*/}
                <div className="navRightMobile">
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