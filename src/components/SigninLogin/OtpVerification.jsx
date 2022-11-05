import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import verification from '../../assets/png/verification.jpg'
import axios from 'axios'

const API_URL = 'https://api.indiclaw.com/';


export default function OtpVerification() {

    const [Otp, setOtp] = useState('');
    const [status, setStatus] = useState(true);
    const [message, setMessage] = useState(true);
    const history = useHistory();
    const path = useParams();

    const handleFormChange = (e) =>{
        setOtp(e.target.value);
    }

    const handleVerifyOtp = (e) =>{
        e.preventDefault(); 

        const details = {
            phone: path.phone,
            otp:Otp,
        }
        console.log(details);
        axios.post(API_URL+'users/verify-otp',details)
            .then(res=>{
                console.log(res.data);
                setStatus(res.data.status);
                setMessage(res.data.message);
                if(res.data.status===true){
                    history.push("/");
                }
            })
            .catch(err=>console.log(err));
    }

    const handleResendotp = () =>{
        axios.post(API_URL + 'users/resend-otp', path.phone)
            .then(res => {
                console.log(res.data);
                setStatus(res.data.status);
                setMessage(res.data.message);
                if (res.data.status === true) {
                    history.push("/");
                }
            })
            .catch(err => console.log(err));
    } 
    return (
        <div className="Otpverification">
            <div className="otp_container">
                {status === false ? <><Alert severity="error" className="Alert">{message}</Alert><br/></> : <></>}
                <img src={verification} />
                <h1>verify your phone number</h1>
                <p>Please enter the One Time Password sent to {path.phone}</p><br/>
                <form>
                    <TextField variant="outlined" id="otp" value={Otp} onChange={handleFormChange} /><br /><br/>
                </form>
                <Button variant="contained" onClick={handleVerifyOtp}>Verify</Button><br/>
                <span onClick={handleResendotp}>resend otp</span>
            </div>
        </div>
    )
}
