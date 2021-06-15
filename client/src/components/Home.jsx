import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import BurgerNavbar from './Navbar'


export default function Home(props) {
  return (
    <div className='home-container'>
      <BurgerNavbar />
      <div className='table'>

        <div className='left-container-main'>
          <Link to='/Burgers'><div className='panel' id='burger-link'><p>Burgers</p></div></Link>
          <Link to='/Restaurants'><div className='panel' id='restaurant-link'><p>Restaurants</p></div></Link>

        </div>

        <div className='right-container-main'>
          <Link to='/AddBurger'><div className='panel' id='add-burger-link'>Add Burger</div></Link>
          <Link to='/About'><div className='panel' id='burger-time-link'>Burger Time</div></Link>
        </div>

      </div>
    </div>
  )
};