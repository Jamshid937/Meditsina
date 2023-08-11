import React from 'react'
import "./About.css"
import one from '../../Imgs/one.png'
import two from '../../Imgs/two.png'
import three from '../../Imgs/three.png'
import four from '../../Imgs/four.png'
import five from '../../Imgs/five.png'
import six from '../../Imgs/six.png'
import uskunalar from '../../Imgs/uskunalar.png'
import galochka from '../../Imgs/galochka.svg'
import young from '../../Imgs/young.png'
import denTistOne from '../../Imgs/denTistOne.png'
import denTistTwo from '../../Imgs/denTistTwo.png'
import denTistThree from '../../Imgs/denTistThree.png'
import denTistFive from '../../Imgs/denTistFive.png'
import denTistFour from '../../Imgs/denTistFour.png'
import denTistSix from '../../Imgs/denTistSix.png'
import Rectangle from '../../Imgs/Rectangle.png'
import Swiper from '../Swiper'
const About = () => {
  return (
    <>
       <div className='about'>
          <p className='about__info'>Men bilan tanishuv</p>
          <h2 className='about__title'>Men haqimda</h2>
          <p className='about__text'>Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque, gravida consequat velit venenatis at. Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque, gravida consequat velit venenatis at. Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque, gravida consequat velit venenatis at.</p>

          <div className='about__imgs-one'>
             <img src={one} alt="" />
             <img src={two} alt="" />
             <img src={three} alt="" />
             <img src={four} alt="" />
             <img src={five} alt="" />
             <img src={six} alt="" />
        </div>
        <h3 className='about__bottom__title'>Zamonoviy uskunalar</h3>
        <div className='about__bottom'>
         <div className='about__bottom__cards'>
            <img src={uskunalar} alt="" />
            <div className='about__bottom__cards__info'>
              <h4>Zamonaviy uskunalar</h4>
              <p>Aliquam lobortis magna neque, gravida consequat velit venenatis at. Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque, gravida consequat velit venenatis at. </p>
              <div className='about__bottom__cards__info__btn'>
               <button>Aparat nomi</button>
              </div>
            </div>
         </div>
         <div className='about__bottom__cards'>
            <img src={uskunalar} alt="" />
            <div className='about__bottom__cards__info'>
              <h4>Zamonaviy uskunalar</h4>
              <p>Aliquam lobortis magna neque, gravida consequat velit venenatis at. Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque, gravida consequat velit venenatis at. </p>
              <div className='about__bottom__cards__info__btn'>
               <button>Aparat nomi</button>
              </div>
            </div>
         </div>
         <div className='about__bottom__cards'>
            <img src={uskunalar} alt="" />
            <div className='about__bottom__cards__info'>
              <h4>Zamonaviy uskunalar</h4>
              <p>Aliquam lobortis magna neque, gravida consequat velit venenatis at. Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque, gravida consequat velit venenatis at. </p>
              <div className='about__bottom__cards__info__btn'>
               <button>Aparat nomi</button>
              </div>
            </div>
         </div>
        </div>
         <div className='export'>
            <div className='export__about'>
              <p className='export__about__info'>Sohasi experti</p>
              <h2 className='export__about__title'>Toshkentning eng yaxshi shifokor yuqori darajadagi xizmatlar.</h2>
              <p className='export__about__text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</p>
              <ul className='export__about__list'>
               <li className='export__about__list__item'>
                  <img src={galochka} alt="" />
                  <p>Yuqori sifatli shifokor jamoasi</p>
               </li>
               <li className='export__about__list__item'>
                  <img src={galochka} alt="" />
                  <p>Eng zamonaviy  xizmatlar</p>
               </li>
               <li className='export__about__list__item'>
                  <img src={galochka} alt="" />
                  <p>Birinchi muolajalar uchun chegirmalar</p>
               </li>
              </ul>
            </div>
            <div className='export__img'>
               <img src={young} alt="" />
            </div>
         </div>
         <div className='galery'>
            <p className='galery__info'>Galery</p>
            <h2 className='galery__title'>Ishlarimizdan namunalar</h2>
            <p className='galery__text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <div className='galery__imgs'>
               <img src={denTistOne} alt="" />
               <img src={denTistTwo} alt="" />
               <img src={denTistThree} alt="" />
               <img src={denTistFour} alt="" />
               <img src={denTistFive} alt="" />
               <img src={denTistSix} alt="" />
            </div>
         </div>
         <div className='treatment'>
            <p className='treatment__info'>Davolash</p>
            <h2 className='treatment__title'>Muolajalarimiz turlari</h2>
            <div className='treatment__cards'>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={Rectangle} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Bel og’rig’ini davolash</h4>
                     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={Rectangle} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Bel og’rig’ini davolash</h4>
                     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={Rectangle} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Bel og’rig’ini davolash</h4>
                     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={Rectangle} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Bel og’rig’ini davolash</h4>
                     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={Rectangle} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Bel og’rig’ini davolash</h4>
                     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={Rectangle} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Bel og’rig’ini davolash</h4>
                     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={Rectangle} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Bel og’rig’ini davolash</h4>
                     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={Rectangle} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Bel og’rig’ini davolash</h4>
                     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={Rectangle} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Bel og’rig’ini davolash</h4>
                     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={Rectangle} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Bel og’rig’ini davolash</h4>
                     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
                   </div>
               </div>
            </div>
         </div>
         <Swiper/>
       </div> 
    </>
  )
}

export default About