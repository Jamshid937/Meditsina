import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Container from '../../layout/container'
import './Home.css'
import doktor from '../../Imgs/doktor.png'
import About from '../../components/About'
import Footer from '../../components/Footer'
const Home = () => {
  return (
    <div>
        <NavBar/>
         <Container>
           <div className='header__hero-titleBox'><h1 className='header__hero__title'>Dilafruz Bakirova</h1></div>
           <div className='header__hero'>
            <div className='header__hero__about'>
              <p>Oliy toifali vrach nevrapatolog</p>
              <div className='header__hero__about__img'>
               <img src={doktor} alt="doktor" />
            </div>
              <button>Konsultstsiya</button>
            </div>
            <div className='header__hero__img'>
               <img src={doktor} alt="doktor" />
            </div>
           </div>
           <About/>
           
        </Container>
        <Footer/>
    </div>
  )
}

export default Home