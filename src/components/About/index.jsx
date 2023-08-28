import React from 'react'
import { useTranslation } from 'react-i18next';
import "./About.css"
import one from '../../Imgs/one.png'
import two from '../../Imgs/two.png'
import three from '../../Imgs/three.png'
import four from '../../Imgs/four.png'
import five from '../../Imgs/five.png'
import six from '../../Imgs/six.png'
import galochka from '../../Imgs/galochka.svg'
import young from '../../Imgs/dilafruz.jpg'
import denTistOne from '../../Imgs/galery.jpg'
import denTistTwo from '../../Imgs/galerytwo.jpg'
import denTistThree from '../../Imgs/nevropotolog.jpg'
import denTistFive from '../../Imgs/galeryfour.jpg'
import denTistFour from '../../Imgs/galeryfive.jpg'
import denTistSix from '../../Imgs/galerysix.jpg'
import Rectangle from '../../Imgs/Rectangle.png'
import ignoterapiya from '../../Imgs/ignoterapiya.jpg'
import plazmalifting from '../../Imgs/plazmalifting.png'
import ozonoterapiya from '../../Imgs/ozonoterapiya.jpg'
import proloterapiya from '../../Imgs/proloterapiya.jpg'
import farnaponktura from '../../Imgs/farmaponktura.jpg'
import gidro from '../../Imgs/gidro.jpg'
import voyta from '../../Imgs/voyta.jpeg'
import Swiper from '../Swiper'
import reg from '../../Imgs/reg.jpg'
import eeg from '../../Imgs/eeg.jpg'
import bac from '../../Imgs/bac.jpg'

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
       <div className='about'>
          <p className='about__info'>{t('aboutMe')}</p>
          <h2 id='about' className='about__title' >{t('about')}</h2>
          <p className='about__text'>⚕️{t('p3')}</p>

          <div className='about__imgs-one'>
             <img src={one} alt=""  className='one'/>
             <img src={two} alt="" />
             <img src={three} alt="" />
             <img src={four} alt="" />
             <img src={five} alt="" />
             <img src={six} alt="" />
        </div>
        <h3 className='about__bottom__title'>{t('h')}</h3>
        <div className='about__bottom'>
         <div className='about__bottom__cards'>
            <img src={reg} alt="" />
            <div className='about__bottom__cards__info'>
              <h4>{t('h')}</h4>
              <p>{t('p4')}</p>
              <div className='about__bottom__cards__info__btn'>
               <button className='btn__reg'>REG</button>
              </div>
            </div>
         </div>
         <div className='about__bottom__cards'>
            <img src={bac} alt="" />
            <div className='about__bottom__cards__info'>
              <h4>{t('h')}</h4>
              <p>{t('p5')}</p>
              <div className='about__bottom__cards__info__btn'>
               <button className='btn__bac'>BAC</button>
              </div>
            </div>
         </div>
         <div className='about__bottom__cards'>
            <img src={eeg} alt="" />
            <div className='about__bottom__cards__info'>
              <h4>{t('h')}</h4>
              <p>{t('p6')}</p>
              <div className='about__bottom__cards__info__btn'>
               <button className='btn__eeg'>EEG</button>
              </div>
            </div>
         </div>
        </div>
         <div className='export'>
            <div className='export__about'>
              <p className='export__about__info'>{t('export')}</p>
              <h2 className='export__about__title'>{t('h2')}</h2>
              <p className='export__about__text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</p>
              <ul className='export__about__list'>
               <li className='export__about__list__item'>
                  <img src={galochka} alt="" />
                  <p>{t('li')}</p>
               </li>
               <li className='export__about__list__item'>
                  <img src={galochka} alt="" />
                  <p>{t('li1')}</p>
               </li>
               <li className='export__about__list__item'>
                  <img src={galochka} alt="" />
                  <p>{t('li2')}</p>
               </li>
              </ul>
            </div>
            <div className='export__img'>
               <img src={young} alt="" />
            </div>
         </div>
         <div id='servic' className='galery'>
            <p className='galery__info'>{t('galery')}</p>
            <h2 className='galery__title'>{t('h3')}</h2>
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
            <p className='treatment__info'>{t('treatment')}</p>
            <h2 className='treatment__title'>{t('h4')}</h2>
            <div className='treatment__cards'>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={ignoterapiya} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Iglorefleksoterapiya</h4>
                     <p>{t('Iglorefleksoterapiya')} </p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={ozonoterapiya} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Ozonoterapiya</h4>
                     <p>{t('Ozonoterapiya')}</p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={plazmalifting} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Plazmolifting</h4>
                     <p>{t('Plazmolifting')}</p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={proloterapiya} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Proloterapiya</h4>
                     <p>{t('Proloterapiya')}</p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={voyta} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Voyta-terapiya</h4>
                     <p>{t('Voyta-terapiya')}</p>
                   </div>
               </div>
               <div className='treatment__cards__card'>
                   <div className='treatment__cards__card__img'>
                     <img src={farnaponktura} alt=''/>
                   </div>
                   <div className='treatment__cards__card__about'>
                     <h4>Farmakopunktura</h4>
                     <p>{t('Farmakopunktura')}</p>
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