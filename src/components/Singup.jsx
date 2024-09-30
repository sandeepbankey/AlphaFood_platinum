import React, { useEffect, useState } from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaGooglePlusG, FaLinkedinIn, FaUser, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import axios from 'axios';
import Login from './Login';
import "./Singup.css";


export default function Signup() {
    const [sing, setSing] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState(false);
    const [phone, setPhone] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [trm, settrm] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        const val = e.target.value;
        setEmail(val);
        setEmailErr(val.length <= 4);
    }

    const handlePassword = (e) => {
        const val = e.target.value;
        setPassword(val);
        setPasswordErr(val.length <= 4);


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password || !phone || !trm) {
            alert("Please fill all fields with valid data.");
            return;
        }

        alert("All good! Submitting...");
        console.log({ firstName, lastName, email, password, phone, trm });
    }

    function toggleSignIn() {
        setSing(!sing);
    }

    useEffect(() => {
        async function callApi() {
            if (!firstName || !lastName || !email || !password || !phone || !trm) return;
            try {
                const apiResult = await axios.post("https://hellostay.com/api/auth/register", { firstName, lastName, email, password, phone, trm });
                console.log(apiResult);

            } catch (error) {
                console.log(error);
                alert("Something went wrong.");
            }

        }
        callApi();
    }, [firstName, lastName, email, password, phone, trm]);

    return (
        <>
            {
                sing ? <Login /> :

                    <div id="top-main-page">
                        <div className="main-page">
                            <div id="singin-page">
                                <div className="logo-singin"></div>
                                {/* <div className="title">Diprella</div> */}
                                <div className="singin-info">
                                    <h1 className='singin-wlc'>Wellcome Back!</h1>
                                    <div className="singin-p">
                                        <p>To keep connected with us please</p> <p>loging  with your personal info</p>
                                    </div>
                                </div>
                                <button id="singin-btn" onClick={toggleSignIn}>SIGN IN</button>
                            </div>
                            <div id="singup-page">
                                <h1 className="sinup-title">Create Account</h1>
                                <div className="social-logo">
                                    <div className="facebook"><TiSocialFacebook /></div>
                                    <div className="google"><FaGooglePlusG /></div>
                                    <div className="linkedin"><FaLinkedinIn /></div>
                                </div>
                                <div className="singupinfo">
                                    of use your for registration:
                                </div>
                                <form action="" id="singup-form" onSubmit={handleSubmit}>
                                    <div className="user-name">
                                        <div className="singup-icon"><FaUser /></div>
                                        <input type="text" placeholder='First_name' value={firstName} onChange={handleFirstName} className='singup-name ' />
                                    </div>
                                    <div className="user-name">
                                        <div className="singup-icon"><FaUser /></div>
                                        <input type="text" placeholder='Last_name' value={lastName} onChange={handleLastName} className='singup-name ' />
                                    </div>
                                    <div className="user-name">
                                        <div className="singup-icon"><FaPhone /></div>
                                        <input type="number" placeholder='Phone number' value={phone} onChange={(e) => setPhone(e.target.value)} className='singup-name ' />
                                    </div>

                                    <div className="user-name">
                                        <div className="singup-icon"><MdEmail />
                                        </div>
                                        <input type="email" placeholder='Email' value={email} onChange={handleEmail} className='singup-name' /><span>{emailErr ? "please valid inter Email " : ""}</span>
                                    </div>

                                    <div className="user-name">
                                        <div className="singup-icon"><CiLock /></div>
                                        <input type={showPass ? "text" : "password"} value={password} onChange={handlePassword} placeholder='Password' className='singup-name' /><span>{passwordErr ? "please valid inter password " : ""}</span>
                                    </div>
                                    <div className="radiobtn">
                                        <input
                                            type="checkbox" className="log-radio" onChange={() => setShowPass(!showPass)}
                                        />
                                        <span>Show my password</span>
                                    </div>
                                    <br />
                                    <div className="radiobtn">
                                        <input
                                            type="checkbox" className="log-radio" onChange={() => settrm(!trm)}
                                        />
                                        <span>Terms and Conditions</span>
                                    </div>
                                    <button className="singup-btn" type='submit' > SING UP</button>
                                </form>
                            </div>
                        </div>

                    </div>
            }
        </>
    )
}