import React from 'react'
import './NavBar.css'

import Phone from '../../Imgs/Phone.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faBars,faXmark,faCode } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
    const [click, setClick] = React.useState(false);
    const [navBar, setNavBar] = React.useState(false)
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
      <div className={navBar ? 'navbar active' : 'navbar'} id='home' >
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <a exact href="#home" className="nav-logo" >
              Logo
            </a>
            <ul className={click ? "nav-menu active" : "nav-menu" }>
              <li className="nav-item">
                <a
                  exact
                  href="#about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Men haqimda
                </a>
              </li>
              <li className="nav-item">
                <a
                  exact
                  href="#services"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Xizmatlar
                </a>
              </li>
              <li className="nav-item">
                <a
                  exact
                  href="#portfolio"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Konsultatsiyaga yozilish
                </a>
              </li>
              <li>
              <select className='nav-item_select__bar'>
                  <option value="o`zbekcha" className='nav-item_select__option'>O`z</option>
                  <option value="English">En</option>
                  <option value="English">Ру</option>
                </select>
              </li>
            </ul>
            <div className='nav-item__phone'>
               <img src={Phone} alt="" />
                <select className='nav-item_select'>
                  <option value="o`zbekcha" className='nav-item_select__option'>O`z</option>
                  <option value="English">En</option>
                  <option value="English">Ру</option>
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