import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import "./Home.css"
import data from './Data';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate()
  const scrollLeft = () => {
    const slider = document.querySelector('.foods');
    slider.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    const slider = document.querySelector('.foods');
    slider.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };
  const handlcate = () => {
    navigate('/Category');
  }

  return (
    <>

      <div className="home-container">
        {/* home page img start */}
        <div className="home-first">
          <div className="fresh">
            <h1>FRESH FOOD</h1>
            <h3> GREAT TASTE</h3>
            <div className="p-container">
              <p>Lorem ipsum dolor sit amet  adipisicing elit. aspernatur,</p> deleniti ratione voluptatibus magni, <p>  </p>
            </div>
          </div>
        </div>
        {/* home page img end   */}

        {/* slide bar start */}
        <div className="home-slider">
          <div className="foods">
            <div className="left-aro" onClick={scrollLeft}>
              <FaChevronLeft />
            </div>
            <div className="food">
              <img src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=" alt="Burger" />
              <h4>BURGER</h4>
            </div>
            <div className="food">
              <img src="https://thumbs.dreamstime.com/b/french-fries-17661700.jpg" alt="french fries" />
              <h4>FRENCH FRIES</h4>
            </div>
            <div className="food">
              <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" alt="pizza" />
              <h4>PIZZA</h4>
            </div>
            <div className="food">
              <img src="https://www.shutterstock.com/image-photo/chicken-meat-french-fries-vegetables-260nw-1971127481.jpg" alt="rolls" />
              <h4>ROLLS</h4>
            </div>
            <div className="food">
              <img src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=" alt="Burger" />
              <h4>BURGER</h4>
            </div>
            <div className="food">
              <img src="https://thumbs.dreamstime.com/b/french-fries-17661700.jpg" alt="french fries" />
              <h4>FRENCH FRIES</h4>
            </div>
            <div className="food">
              <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" alt="pizza" />
              <h4>PIZZA</h4>
            </div>
            <div className="food">
              <img src="https://www.shutterstock.com/image-photo/chicken-meat-french-fries-vegetables-260nw-1971127481.jpg" alt="rolls" />
              <h4>ROLLS</h4>
            </div>
            <div className="right-aro" onClick={scrollRight}>
              <FaChevronRight />
            </div>
          </div>
        </div>
        {/* slide bar end */}

        {/* third container 3 data start */}
        <div className="third-container">
          <div className="first-info">
            <h1>TODAY</h1>
            <h1>OFFER</h1>
            <div className="offer">
              20% OFF
            </div>
            <p>NEW PHENNOMENAL BURGER TASTE</p>
          </div>
          <div className="second-info">
            <h1>OTHER</h1>
            <h1>FLAVORS</h1>
            <div className="offer-orng">
              20% OFF
            </div>
            <p>SAVE ROOM WE MADE COOKIES</p>
          </div>
          <div className="third-info">
            <h1>TODAY</h1>
            <h1>OFFER</h1>
            <div className="offer">
              20% OFF
            </div>
            <p>NEW PHENNOMENAL PIZZA TASTE</p>
          </div>
        </div>
        {/* third container 3 data end */}

        {/* JSON data fatch with map fuction start */}
        <div className="data">
          <div className="flex-rest">
            <div className="data-rest">
              <h1> Restuarant</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="choice-btn">
              <button type="button" className='btn'>Veg & Non veg</button>
              <button type="button" className='btn'>Non veg</button>
              <button type="button" className='btn'>pure veg</button>
            </div>
          </div>

          <div className="flex" >
            {
              data.map((item) => {
                return <>


                  <div className="data-container" onClick={handlcate} >

                    <img src={item.profile_path} alt="data are not showing" />
                    <h3>{item.original_name}</h3>
                    <p>{item.popularity}</p>
                    <p>{item.name}</p>
                    <div className="location">
                      <div className="loc-icon">
                        <p> <CiLocationOn /></p>
                        <p>{item.location}</p>
                      </div>
                    </div>
                  </div>
                </>
              })
            }
          </div>
        </div>

        {/* JSON data fatch with map fuction end */}
      </div>

    </>
  )
}
