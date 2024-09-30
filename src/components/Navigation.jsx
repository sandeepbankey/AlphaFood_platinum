
import React, { useNavigate} from "react-router-dom";
import "./Navigation.css"
// import photos from './photos/myimage.jpg'
import { TbTruckDelivery } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
export default function Navigation() {
    const navigate = useNavigate();
    const handelhome = () => {
        navigate("./Home")
    }
    const handelrest = () => {
        navigate("./Service")
    }
    const handelcart = () => {
        navigate('/Cart')
    }


    return (
        <>

            <nav>
                <header>

                    <div className="logo-container" onClick={handelhome}>
                        <div className="logo"><TbTruckDelivery /></div>
                        <div className="c-name">
                            <h1>ALPHA </h1>
                            <h5>FOOD PLATINUM</h5>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="icon">
                            <CiLocationOn />

                            <input type="location" name="location" placeholder='Search Location' className='nav-inp' />
                        </div>
                        <h4>|</h4>
                        <div className="icon">
                            <IoSearchOutline />

                            <input type="location" name="location" placeholder='Search For Restaurant' className='nav-inp' />
                        </div>
                    </div>
                    <div className="rest-name" onClick={handelrest}>
                        <div className="icon-name">
                            <AiOutlineShop />
                        </div>
                        <div className="add-name">
                            Add Restaurant
                        </div>
                    </div>
                    <div className="cart">
                        <div className="icon">
                            <PiShoppingCartSimpleLight />
                        </div>
                        <div className="cart-name" onClick={handelcart}>
                            Cart
                        </div>
                    </div>
                    {/* <div className="img-name">
                        <img src={photos} alt="User" className='nav-img' />
                        <div className="user-name">sandeep</div>
                    </div> */}
                    <div className="login">
                        Login
                    </div>
                    <div className="or">
                        |
                    </div>
                    <div className="register">
                        Register
                    </div>
                </header>
            </nav>




        </>
    )
}
