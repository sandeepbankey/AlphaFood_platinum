import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./Footer.css"
export default function Footer() {
    return (
        <>
            <footer>
                {/* sociel media data start */}
                <div className="sociel">
                    <div className="c-logo">
                        <p ><TbTruckDelivery /></p>
                        <div className="c-name">
                            <h1>ALPHA</h1>
                            <div>FOOD PLATINUM</div>
                        </div>
                    </div>
                    <div className="follow">
                        <h4>FOLLOW US</h4>
                        <div className="icons"><FaInstagram /></div>
                        <div className="icons"><FaYoutube /></div>
                        <div className="icons"><FaWhatsapp /></div>
                    </div>
                </div>
                {/* sociel media data start */}

                {/* footer are start  */}
                <div className="footer-page">
                    <div className="for-rest">
                        <h4>FOR RESTAURANT</h4>
                        <p>Partner With Us</p>
                        <p>Apps For You</p>
                    </div>
                    <div className="learn">
                        <h4>LEARN MORE</h4>
                        <p>Terms & Condition </p>
                        <p>Privacy Policy</p>
                        <p>Refund & Cancellation</p>
                        <p>Return Policy</p>
                        <p>Shipping Policies</p>


                    </div>
                    <div className="about alp">
                        <h4>ABOUT ALPHAFOOD</h4>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>My Account</p>
                    </div>
                    <div className="down-app">
                        <h4>Download Alpha</h4>
                        <h4>Food Platinum</h4>
                        <div className="app-img">
                            <img src="https://w7.pngwing.com/pngs/822/688/png-transparent-apple-on-the-app-store-screenshot-iphone-app-store-google-play-store-electronics-text-logo-thumbnail.png" alt="" />
                            <img src="https://3.bp.blogspot.com/-_aWT6CWgvy4/U5c5H8BsosI/AAAAAAAADgk/w3nRit3rwtk/s1600/android_badge2.png" alt="" />
                        </div>
                    </div>
                </div>
                <p className='copy'> Copyright &copy; 2024, All right Reserved &copy; Alpha Food Platinum TM Ltd.</p>
            </footer>
        </>
    )
}
