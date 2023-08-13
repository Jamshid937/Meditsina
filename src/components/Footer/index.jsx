import React from 'react'
import './Footer.css'
import group from '../../Imgs/Group.png'
import Tell from '../../Imgs/Tell.png'
import Logo from '../../Imgs/Logo.png'
const Footer = () => {
  return (
<div className='footerBack'>
    <div className='footer'>
       <div className='footer__about'>
        <p className='footer__about__logo'>Logo</p>
        <p className='footer__about__text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
       <p className='footer__about__media'>FOllow us on</p>
       <img src={group} alt="" />
       </div>
       <div className='footer__link'>
        <ul className='footer__link__list'>
            <li className='footer__link__list__item'>
            <a
                  exact
                  href="#about"
                  activeClassName="active"
                //   onClick={click ? handleClick : null}
                >
                  Men haqimda
                </a> 
            </li>
            <li className='footer__link__list__item'>                
            <a
                  exact
                  href="#servic"
                  activeClassName="active"
                >
                  Xizmatlar
                </a>
                </li>
            <li className='footer__link__list__item'>
            <a
                  exact
                  href="#footer"
                  activeClassName="active"
                >
                  Konsultatsiyaga yozilish
                </a>
            </li>
        </ul>
       </div>
       <div className='footer__contact'>
        <p>Contact & Information</p>
        <div className='footer__contact__card'>
            <div className='footer__contact__card__img'>
                <img src={Tell} alt="" />
            </div>
            <div className='footer__contact__card__about'>
                <h4>Tel raqam</h4>
                <p>+998909420301</p>
            </div>
        </div>
        <div className='footer__contact__card'>
            <div className='footer__contact__card__img'>
                <img src={Tell} alt="" />
            </div>
            <div className='footer__contact__card__about'>
                <h4>Ish vaqti</h4>
                <p>09:00 AM - 18:00 PM</p>
            </div>
        </div>
        <div className='footer__contact__card'>
            <div className='footer__contact__card__img'>
                <img src={Tell} alt="" />
            </div>
            <div className='footer__contact__card__about'>
                <h4>Manzil</h4>
                <p>Mirzo Ulug'bek shoh ko'chasi, Тоshkent</p>
            </div>
        </div>
        <div className='primeTech'>
           <p>Sayt yaratuvchisi:</p>
           <img src={Logo} alt="" />
        </div>
       </div>
    </div>
    </div>
  )
}

export default Footer