import React from 'react'
import './Swiper.css'

import mask from '../../Imgs/Mask.png'
const Swiper = () => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className='Comments'>
        <p>Mijozlarimiz fikrlar</p>
        <h2>Otzivlar</h2>

        <div className='Comments__cards'>
           <div className='Comments__cards__card'>
            <img src={mask} alt="" />
            <h4>Azizova Nafisa</h4>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
            <div className="comments__icon" onClick={handleClick}>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
            </div>
           </div>
           <div className='Comments__cards__card'>
            <img src={mask} alt="" />
            <h4>Azizova Nafisa</h4>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
            <div className="comments__icon" onClick={handleClick}>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
            </div>
           </div>
           <div className='Comments__cards__card'>
            <img src={mask} alt="" />
            <h4>Azizova Nafisa</h4>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
            <div className="comments__icon" onClick={handleClick}>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
              <i className={click ? "fa fa-star" : "fa fa-star-o"}></i>
            </div>
           </div>
        </div>
        <div className='call'>
            <div className='call__info'>
                <h2>Tel raqamingizni qoldiring</h2>
                <p>Va biz sizga aloqaga chiqamiz</p>
            </div>
            <div className='call__input'>
                <input type="number" name="" id="" placeholder='+(000) 000 00 00' />
                <button>Tasdiqlash</button>
            </div>
        </div>
    </div>
  )
}

export default Swiper