import React from 'react'
import './NavBar.css'
import { useTranslation } from 'react-i18next';
import Phone from '../../Imgs/Phone.png'
import logo from '../../Imgs/headerLogo.png'
function NavBar() {
  const { t, i18n } = useTranslation();



  function TranslationFunc(e) {
    i18n.changeLanguage(e.target.value)
  }
  const [click, setClick] = React.useState(false);
  const [navBar] = React.useState(false)
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div className={navBar ? 'navbar active' : 'navbar'}  >
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <a exact href="#home" className="nav-logo" >
            <img src={logo} alt="" />
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                exact
                href="#about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                {t('about')}
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="#servic"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                {t('setting')}
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                href="#footer"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                {t('shop')}
              </a>
            </li>
            <li>
              <select className='nav-item_select__bar' onChange={TranslationFunc}>
                <option value="uz" className='nav-item_select__option'>O`z</option>
                <option value="en" className='nav-item_select__option'>En</option>
                <option value="ru" className='nav-item_select__option'>RU</option>
              </select>
            </li>
          </ul>
          <div className='nav-item__phone'>
            <a href="tel:998909420301">
              <img src={Phone} alt="" />
            </a>

            <select className='nav-item_select' onChange={TranslationFunc}>
              <option value="uz" className='nav-item_select__option' >O`z</option>
              <option value="en" className='nav-item_select__option'>En</option>
              <option value="ru" className='nav-item_select__option'>RU</option>
            </select>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default NavBar