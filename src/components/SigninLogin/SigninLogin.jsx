import React, { useState, forwardRef } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Dialog, AppBar, Toolbar, IconButton, Slide, Tab, Tabs, Box, TextField, InputAdornment, MenuItem, Select } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { MdKeyboardArrowRight } from "react-icons/md";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


import './SigninLogin.css'

import lock from '../../assets/svg/lock.svg'
import email from '../../assets/svg/email.svg'
import fullname from '../../assets/svg/fullname.svg'
//import category from '../../assets/svg/category.svg'
import logo from '../../assets/svg/logo.svg'
import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
      backgroundColor: '#6A6DB4'
    },
  }));
  
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="top" ref={ref} {...props} />;
  });

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  
const API_URL = 'https://api.indiclaw.com/';


function SigninLogin( { handleLoginOpen, handleLoginClose, openSignin   }) {

    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        category: "",
        State: "",
    })

    const [viewPass, setViewPass] = useState(false)

    const ChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleChange = (e) => {
        const { id, value } = e.target
        setUserInfo(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleChangeState =(e)=>{
        setUserInfo(prevState=>({
            ...prevState,
            State: e.target.value,
        }))

    }
    const handleChangeCategory = (e) => {
        setUserInfo(prevState => ({
            ...prevState,
            category: e.target.value,
        }))
    }

    const handleSubmitSignin =(e)=>{
        //console.log(userInfo);
        e.preventDefault();

        const info = {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
            phone: userInfo.phone,
            category: userInfo.category,
            state: userInfo.State,
            verificationMethod:"102",
        }

        axios.post(API_URL + 'users', info)
            .then(data => {
                console.log(data);
                history.push("/otp-verification/"+userInfo.phone);
            })
            .catch(err => console.log(err))
    }
    const handleSubmitLogin = (e) => {
        console.log(userInfo);
        e.preventDefault();

        const info = {
            email: userInfo.email,
            password: userInfo.password,
        }

        axios.post(API_URL + 'users/login', info)
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="signinLogin">
            <Button id="loginbtn" onClick={handleLoginOpen}>
                Login
            </Button>
            <Button to="#" id="lp_nav_loginbtn" onClick={handleLoginOpen} disableTouchRipple disableFocusRipple>
                login
            </Button>
            <Button to="#" id="joinus" onClick={handleLoginOpen}>
                sign up
            </Button>
            <Dialog fullScreen open={openSignin} onClose={handleLoginClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar} elevation={0}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleLoginClose} >
                            <CloseIcon fontSize="large"/>
                        </IconButton>

                        <img src={logo} alt="" />
                    </Toolbar>
                </AppBar>
                


                <div className="dialog_body">
                    <div className="tabContainer">
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={ChangeTab}
                                variant="fullWidth"
                            >
                            <Tab label="Log In" {...a11yProps(0)} />
                            <Tab label="Sign Up" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            {/* LOGIN TAB */}
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <div className="loginTab">
                                    {/*<div className="social_login">
                                        <Button>
                                            <img src={google} alt="" className="social_img"/>
                                            Google
                                        </Button>
                                        <Button>
                                            <img src={fb} alt="" className="social_img"/>
                                            Facebook
                                        </Button>
                                    </div>*/}
                                    <form className="login_input">
                                        <TextField
                                            variant="outlined"
                                            placeholder="Email"
                                            type="email"
                                            id="email"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img src={email} alt="" style={{opacity: '0.7'}}/>
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={userInfo.email}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            variant="outlined"
                                            placeholder="Password"
                                            type={viewPass? 'text' : 'password'}
                                            id="password"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img src={lock} alt="" style={{opacity: '0.7'}}/>
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconButton color="inherit" edge="end" onClick={() => setViewPass(!viewPass)} >
                                                            {viewPass ? <VisibilityIcon style={{color: 'gray'}}/> : <VisibilityOffIcon style={{color: 'gray'}}/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={userInfo.password}
                                            onChange={handleChange}
                                        />
                                    </form>
                                    <h6>Forgot Password?</h6>
                                    <Button endIcon={<MdKeyboardArrowRight />} onClick={handleSubmitLogin}>Continue</Button>
                                </div>
                            </TabPanel>


                            {/* SIGN IN TAB */}
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className="signinTab">
                                    {/*<div className="social_login">
                                        <Button>
                                            <img src={google} alt="" className="social_img"/>
                                            Google
                                        </Button>
                                        <Button>
                                            <img src={fb} alt="" className="social_img"/>
                                            Facebook
                                        </Button>
                                    </div>
                                    <hr /> */}
                                    <form className="signin_input">
                                        <TextField
                                            variant="outlined"
                                            placeholder="Full Name"
                                            type="text"
                                            id="name"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img src={fullname} alt="" style={{opacity: '0.7'}}/>
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={userInfo.name}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            variant="outlined"
                                            placeholder="Email"
                                            type="email"
                                            id="email"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img src={email} alt="" style={{opacity: '0.7'}}/>
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={userInfo.email}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            variant="outlined"
                                            placeholder="Phone"
                                            type="phone"
                                            id="phone"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img src={fullname} alt="" style={{opacity: '0.7'}}/>
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={userInfo.phone}
                                            onChange={handleChange}
                                        />
                                        <Select
                                            style={{marginTop: '1.5rem'}}
                                            variant="outlined"
                                            placeholder="State"
                                            IconComponent={ArrowDropDownIcon}
                                            id="name"
                                            value={userInfo.State}
                                            onChange={handleChangeState}
                                            >
                                            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                                            <MenuItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</MenuItem>
                                            <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                                            <MenuItem value="Assam">Assam</MenuItem>
                                            <MenuItem value="Bihar">Bihar</MenuItem>
                                            <MenuItem value="Chandigarh">Chandigarh</MenuItem>
                                            <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
                                            <MenuItem value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</MenuItem>
                                            <MenuItem value="Daman and Diu">Daman and Diu</MenuItem>
                                            <MenuItem value="Delhi">Delhi</MenuItem>
                                            <MenuItem value="Lakshadweep">Lakshadweep</MenuItem>
                                            <MenuItem value="Puducherry">Puducherry</MenuItem>
                                            <MenuItem value="Goa">Goa</MenuItem>
                                            <MenuItem value="Gujarat">Gujarat</MenuItem>
                                            <MenuItem value="Haryana">Haryana</MenuItem>
                                            <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                                            <MenuItem value="Jammu and Kashmir">Jammu and Kashmir</MenuItem>
                                            <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                                            <MenuItem value="Karnataka">Karnataka</MenuItem>
                                            <MenuItem value="Kerala">Kerala</MenuItem>
                                            <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                                            <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                                            <MenuItem value="Manipur">Manipur</MenuItem>
                                            <MenuItem value="Meghalaya">Meghalaya</MenuItem>
                                            <MenuItem value="Mizoram">Mizoram</MenuItem>
                                            <MenuItem value="Nagaland">Nagaland</MenuItem>
                                            <MenuItem value="Odisha">Odisha</MenuItem>
                                            <MenuItem value="Punjab">Punjab</MenuItem>
                                            <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                                            <MenuItem value="Sikkim">Sikkim</MenuItem>
                                            <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                                            <MenuItem value="Telangana">Telangana</MenuItem>
                                            <MenuItem value="Tripura">Tripura</MenuItem>
                                            <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                                            <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                                            <MenuItem value="West Bengal">West Bengal</MenuItem>
                                        </Select> 

                                        <Select
                                            id="category"
                                            variant="outlined"
                                            placeholder="Categories"
                                            IconComponent={ArrowDropDownIcon}
                                            value={userInfo.category}
                                            onChange={handleChangeCategory}
                                            >
                                            <MenuItem  value="Law Aspirant">Law Aspirant</MenuItem>
                                            <MenuItem  value="Law Student">Law Student</MenuItem>
                                            <MenuItem  value="Law Graduate">Law Graduate</MenuItem>
                                            <MenuItem  value="None of these">None of these</MenuItem>
                                        </Select> 

                                        <TextField
                                            style={{marginTop: '1.5rem'}}
                                            variant="outlined"
                                            placeholder="Password"
                                            id="password"
                                            type={viewPass? 'text' : 'password'}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img src={lock} alt="" style={{opacity: '0.7'}}/>
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconButton edge="end" onClick={() => setViewPass(!viewPass)}>
                                                            {viewPass ? <VisibilityIcon style={{color: 'gray'}}/> : <VisibilityOffIcon style={{color: 'gray'}}/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={userInfo.password}
                                            onChange={handleChange}
                                        />
                                    </form>
                                    <h5>
                                        By creating an account, you agree to our <Link to="/terms">Term of Services</Link> and <Link to="/privacy">Privacy Policy</Link>
                                    </h5>
                                    <Button endIcon={<MdKeyboardArrowRight />} onClick={handleSubmitSignin}>Create Account</Button>
                                </div>
                            </TabPanel>
                        </SwipeableViews>
                    </div>
                </div>


            </Dialog>
        </div>
    )
}

export default SigninLogin
