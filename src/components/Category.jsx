import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoGrid } from "react-icons/io5";
import { LuListFilter } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import catedata from './Datac';
import Cart from './Cart';
import "./Category.css";

export default function Category() {

    const navigate = useNavigate();
    const [view, setView] = useState('grid');
    const [showcart, setShowcart] = useState(false);
    const toggleView = (selectedView) => {
        setView(selectedView);
    };

    const toggleCart = () => {
        setShowcart(!showcart);
        
    };

    // navigate('/Cart')
    return (
        <>
            <div className="firstcate">
                <div className="link">
                    <h2>Category</h2>
                    <Link to='/Home' >Home </Link>
                    <span>/</span>
                    <Link to='./Category'> Category</Link>
                    {
                        showcart ? <span> / <span><Link to="./Cart"> Cart</Link> </span></span> : ""
                    }
                </div>
                {/* Add a button to toggle the cart */}
                <button onClick={toggleCart}>
                    {showcart ? 'Hide Cart' : "show card"}
                </button>

            </div>
            {
                showcart ? <Cart /> :
                    <div>


                        <div className="secondcate">
                            <div className="fiser-h">
                                <h1>Products</h1>
                            </div>
                            <div className="three-data">
                                <div className="select-sort">
                                    <select name="" id="">
                                        <option value=""> Sort By </option>
                                    </select>
                                </div>
                                <div className="select-show">
                                    <select name="" id="">
                                        <option value=""> Show </option>
                                    </select>
                                </div>
                                <div className="cate-icon" onClick={() => toggleView('grid')}>
                                    <IoGrid />
                                </div>
                                <div className="cate-icon" onClick={() => toggleView('list')}>
                                    <LuListFilter />
                                </div>
                            </div>
                        </div>

                        <div className={`cate-flex ${view === 'grid' ? 'grid-view' : 'list-view'} active`}>
                            {
                                catedata.map((item) => (
                                    <div key={item.id} className='cate-main'>
                                        <img src={item.profile_path} alt="food images" />
                                        <div className="catename">
                                            <h3>{item.name}</h3>
                                            <div className="rate">
                                                <p><CiStar /></p>
                                                <p>{item.rating}</p>
                                            </div>
                                        </div>
                                        <div className="pri-btn">
                                            <div className="cate-price">
                                                <MdOutlineCurrencyRupee />{item.price}
                                            </div>
                                            <div className="btn">
                                                <div className="btn-icon">
                                                    <LuShoppingCart />
                                                </div>
                                                <div className="btn">Add to cart</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>}
        </>
    );
}
