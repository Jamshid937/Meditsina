import React from 'react'
import { useTranslation } from 'react-i18next';
import './Footer.css'
// import group from '../../Imgs/Group.png'
import Tell from '../../Imgs/Tell.png'
import Logo from '../../Imgs/Logo.png'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'
import  logo from '../../Imgs/headerLogo.png'

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
<div className='footerBack'>
    <div className='footer'>
       <div className='footer__about'>
        <img src={logo} className='footer__about__logo'></img>
        <p className='footer__about__text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
       <p className='footer__about__media'>{t('follow')}</p>
       <div className='footer__about__media__icons'>
        <a href="https://ru-ru.facebook.com/"><FaFacebook className='fasbook' color='white'/></a>  
          <a href="https://web.telegram.org/"><FaTelegram color='white'/></a>
         <a href="https://www.instagram.com/"><FaInstagram color='white'/></a> 
       </div>

       </div>
       <div className='footer__link'>
        <ul className='footer__link__list'>
            <li className='footer__link__list__item'>
            <a
                  exact
                  href="#about"
                  activeClassName="active"
                >
                  {t('about')}
                </a> 
            </li>
            <li className='footer__link__list__item'>                
            <a
                  exact
                  href="#servic"
                  activeClassName="active"
                >
                  {t('setting')}
                </a>
                </li>
            <li className='footer__link__list__item'>
            <a
                  exact
                  href="#footer"
                  activeClassName="active"
                >
                  {t('shop')}
                </a>
            </li>
        </ul>
       </div>
       <div className='footer__contact'>
        <p>{t('contact')}</p>
        <div className='footer__contact__card'>
            <div className='footer__contact__card__img'>
                <img src={Tell} alt="" />
            </div>
            <div className='footer__contact__card__about'>
                <h4>{t('phone')}</h4>
                <p>+998909420301</p>
            </div>
        </div>
        <div className='footer__contact__card'>
            <div className='footer__contact__card__img'>
                <img src={Tell} alt="" />
            </div>
            <div className='footer__contact__card__about'>
                <h4>{t('work')}</h4>
                <p>09:00 AM - 18:00 PM</p>
            </div>
        </div>
        <div className='footer__contact__card'>
            <div className='footer__contact__card__img'>
                <img src={Tell} alt="" />
            </div>
            <div className='footer__contact__card__about'>
                <h4>{t('location')}</h4>
                <p>Mirzo Ulug'bek shoh ko'chasi, Тоshkent</p>
            </div>
        </div>
        <div className='primeTech'>
           <p>{t('creator')}</p>
           <a href="https://primetechgroup.uz/"><img src={Logo} alt="" /></a>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Footer