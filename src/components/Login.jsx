import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { BiLogoMastercard } from "react-icons/bi";
import Singup from './Singup';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase-config";
import { auth } from "./Fiberbase";

export default function Login() {
    const [log, setlog] = useState(false);
    const [email, setemail] = useState();
    const [usererr, setusererr] = useState();
    const [pass, setpass] = useState();
    const [passerr, setpasserr] = useState();
    const [showPass, setShowPass] = useState(false);

    function logs() {
        setlog(!log)
    }
    const submits = async (e) => {
        e.preventDefault();


        if (email === 0 || pass === 0) {
            alert("Please fill in the data");
        } else {
            try {
                const apiResult = await axios.post('https://hellostay.com/api/auth/login', { auth, email, pass });
                // const user = await signInWithEmailAndPassword(auth, email, password);
                console.log(apiResult);
                alert("Login successful :)", apiResult);
                setemail('');
                setpass('');
            } catch (error) {
                console.error('Error fetching API:', error);
                alert('Something went wrong');
            }
        }

    };

    const userchange = (e) => {
        const val = e.target.value;

        if (val.length > 4) {
            setusererr(false); // No error if length is greater than 4
        } else {
            setusererr(true);  // Error if length is less than or equal to 4
        }

        setemail(val); // Set the user value
    }; const passchange = (e) => {

        const val = e.target.value
        // setpass(val);

        if (val.length > 4) {
            setpasserr(false); // No error if length is greater than 4
        }
        else {
            setpasserr(true) // Error if length is less than or equal to 4
        }
        setpass(); // Set the pass value
    }


    return (
        <>
            {
                log ? <Singup /> :
                    <div className="log-top-main">


                        <div className="log-main">
                            <div className="log-left">

                                <div className="logo">
                                    <div className='c-logo'><BiLogoMastercard /></div>

                                    <h1>Your Logo</h1>
                                    <p>Place your toggline here</p>
                                </div>
                                <div className="log-wlc">
                                    <h1>
                                        Hey! Welcome
                                    </h1>
                                    <p>Join Us and give information to people</p>
                                </div>
                            </div>
                            <div className="log-right">
                                <div className="create-acc" onClick={logs}> Create a new account </div>

                                <h2>Log in</h2>
                                <form action="" className='log-form' onSubmit={submits}  >
                                    <div className="log-iconi">
                                        <FaRegUserCircle />
                                        <input type="email" placeholder='Username' className="log-input" value={email} onChange={userchange} /> <span>{usererr ? "Please valid data" : ""}</span>
                                    </div>
                                    <div className="log-iconi">
                                        <IoIosLock />

                                        <input type={showPass ? "text" : "password"} placeholder='Password' className="log-input" value={pass} onChange={passchange} /><span>{passerr ? "Please valid password" : ""}</span>
                                    </div>
                                    <div className="forget-pass">
                                        Forget Password ?
                                    </div>
                                    <div className="radiobtn">
                                        <input
                                            type="checkbox"
                                            className="log-radio"
                                            onChange={() => setShowPass(!showPass)}
                                        />
                                        <span>Show my password</span>
                                    </div>
                                    <button className="log-btn" >Log in</button>
                                </form>
                                <div className="hr">
                                    <div className="line"></div> or with <div className="line"></div>
                                </div>
                                <div className="log-icon">
                                    <div className="log-google">
                                        <TiSocialGooglePlus />

                                    </div>
                                    <div className="log-facebook">
                                        <TiSocialFacebook />

                                    </div>
                                    <div className="log-twitter">
                                        <FaTwitter />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            }

        </>
    )
}



// Login.js
// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "./firebase-config";
// import { auth } from "./Fiberbase";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const user = await signInWithEmailAndPassword(auth, email, password);
//             console.log("User logged in:", user);
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//                 {error && <p style={{ color: "red" }}>{error}</p>}
//             </form>
//         </div>
//     );
// };

// export default Login;
