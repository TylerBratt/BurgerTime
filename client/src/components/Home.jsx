import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import BurgerNavbar from './Navbar'
import LoginControl from './LoginControl'

export default function Home(props) {
  return(
  <div>
  
    <BurgerNavbar />
    <div className='table'>
      <Link to='/Burgers'><div className='panel'><p>Burgers 🍔</p></div></Link>
      <Link to='/Restaurants'><div className='panel'>Restaurants 🗺️</div></Link>
      <Link to='/AddBurger'><div className='panel'>Add A Burger 🔍</div></Link>
      <Link to='/About'><div className='panel'>About Us 🇨🇦</div></Link>
    </div>
  </div>
  )
};