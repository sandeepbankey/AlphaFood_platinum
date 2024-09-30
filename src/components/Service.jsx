import React from 'react'
import './Service.css'
import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneShop } from "react-icons/ai";
import { TbShoppingBagCheck } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import photos from './photos/Screenshot 2024-09-16 110044.png'
export default function Service() {
    return (
        <>
            <div className="first-container">
                <div className="no-flex">
                    <h2>Partener With us at 0% commission for 1st month !</h2>
                    <p>and get ads worth INR 1500 valid for new  restaurant partners in select cities.</p>
                    <button> Register your restaurant </button>
                </div>
                <img src={photos} alt="cooks image" />
            </div>
            <div className="second-addcontainer">
                <div className="h">
                    <h2>Get  started with </h2>
                    <h2>online ordering </h2>
                    <p>please   keep the document ready  for a smooth singhup </p>
                </div>
                <div className="second-p">
                    <li>FSSAI license copy</li>
                    <li> your restaurant menu</li>
                    <li>bank account details</li>
                </div>
                <div className="third-p">
                    <li>Regilar GSTIN (if applicable)</li>
                    <li>PAN card copy</li>
                    <li>Dish images for top items</li>
                </div>
            </div>
            <div className="third-addcontainer">
                <h3>why should you partner  with </h3>
                <h3>Jetsetter India</h3>
                <p>jettseter India enables you to get 60% more revenue ,10x  new customers and boots your brand </p> <p> visibility by providing insights improve your business  </p>
                <div className="threecon">
                    <div className="firstthree">
                        <div className="iconss"><CiLocationOn />
                        </div>
                        <h2>1000+cities in India</h2>
                    </div>

                    <div className="secondthree">
                        <div className="iconss"><AiTwotoneShop />
                        </div>
                        <h2>3 lakh+ restuarant lising </h2>
                    </div>

                    <div className="thirdthree">
                        <div className="iconss"><TbShoppingBagCheck />
                        </div>
                        <h2>5.0 crore+ monthly order</h2>
                    </div>
                </div>

            </div>
            <div className="fourth-addcontainer">
                <h1>How it works </h1>
                <div className="steps">
                    <div className="first-step">
                        <div className="icon-step"><CgNotes />
                        </div>
                        <h2>step 1</h2>
                        <p>Create your page on Jetsetter India Help users discover your place by creatinh a lidting on jetsetter India</p>
                    </div>

                    <div className="second-step">
                        <div className="icon-step"><MdOutlineDeliveryDining />
                        </div>
                        <h2>step 2</h2>
                        <p>Register for online ordering And deliver orders to millions of And deliver order to millions of customers with ease  </p>

                    </div>

                    <div className="third-step">
                        <div className="icon-step"><FaRegBookmark />
                        </div>
                        <h2>step 3</h2>
                        <p>Start receiving orders online Manage orders on our partner app, web dashboard or API partner   </p>

                    </div>
                </div>
            </div>
        </>
    )
}
