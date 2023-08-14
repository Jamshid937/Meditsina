import React from 'react'
import './Swiper.css'
import { useState } from 'react'


import { FaStar } from 'react-icons/fa'
import mask from '../../Imgs/Mask.png'



const Swiper = () => {
    const [rating, setRating] = useState(null) 
    const [ratingOne, setRatingOne] = useState(null) 
    const [ratingTwo, setRatingTwo] = useState(null) 
    const [hover, setHover] = useState(null)
    const [hoverOne, setHoverOne] = useState(null)
    const [hoverTwo, setHoverTwo] = useState(null)
    const [ism, setIsm] = useState('')
    const [tell, setTell] = useState('')
    let sendForm = function(e)  {
      e.preventDefault()
    }


  return (
    <div className='Comments'>
        <p>Mijozlarimiz fikrlar</p>
        <h2>Otzivlar</h2>

        <div className='Comments__cards'>
           <div className='Comments__cards__card'>
            <img src={mask} alt="" />
            <h4>Azizova Nafisa</h4>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
            <div className="comments__icon">
              {[...Array(5)].map((star, index) => {
              const currentRatingOne = index + 1;
               return(
                <label >
                 <input type="radio" name="ratingOne"  value={currentRatingOne} 
                 onClick={()=> setRatingOne(currentRatingOne) }
                 />
                 <FaStar 
                 className='star' 
                 size={30}
                 color={currentRatingOne <= (hoverOne || ratingOne) ? "#ffc107" : "#e4e5e9"} 
                 onMouseEnter={() => setHoverOne(currentRatingOne)}
                 onMouseLeave={() => setHoverOne(null)}
                 />
                </label>
                );
                
              })}
            </div>
           </div>
           <div className='Comments__cards__card'>
            <img src={mask} alt="" />
            <h4>Azizova Nafisa</h4>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
            <div className="comments__icon">
              {[...Array(5)].map((star, index) => {
              const currentRatingTwo = index + 1;
               return(
                <label >
                 <input type="radio" name="rating"  value={currentRatingTwo} 
                 onClick={()=> setRatingTwo(currentRatingTwo) }
                 />
                 <FaStar 
                 className='star' 
                 size={30}
                 color={currentRatingTwo <= (hoverTwo || ratingTwo) ? "#ffc107" : "#e4e5e9"} 
                 onMouseEnter={() => setHoverTwo(currentRatingTwo)}
                 onMouseLeave={() => setHoverTwo(null)}
                 />
                </label>
                );
                
              })}
            </div>
           </div>
           <div className='Comments__cards__card'>
            <img src={mask} alt="" />
            <h4>Azizova Nafisa</h4>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
            <div className="comments__icon">
              {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
               return(
                <label >
                 <input type="radio" name="rating"  value={currentRating} 
                 onClick={()=> setRating(currentRating) }
                 />
                 <FaStar 
                 className='star' 
                 size={30}
                 color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                 onMouseEnter={() => setHover(currentRating)}
                 onMouseLeave={() => setHover(null)}
                 />
                </label>
                );
                
              })}
            </div>
           </div>
        </div>
        <div id='footer' className='call'>
            <div className='call__info'>
                <h2>Tel raqamingizni qoldiring</h2>
                <p>Va biz sizga aloqaga chiqamiz</p>
            </div>
            <form className='call__input' onSubmit={sendForm}>
              <input type="tell" placeholder='+998' pattern='/^(\+998\d{9}|\d{9})$/' />
                <input type="text" placeholder='ism'  onChange={(e)=>setIsm(e.target.value)} value={ism} required/>
                <button>Tasdiqlash</button>
             </form>
        </div>
    </div>
  )
}

export default Swiper