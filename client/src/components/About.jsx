import React from 'react'
import BurgerNavbar from './Navbar'
import './About.css'

export default function About(props) {
  return (
  <div className='game-page-background'>
    <BurgerNavbar />
    <div className='about_container'>
    <iframe className='burgerTime' src="https://www.retrogames.cc/embed/33227-burger-time-data-east-set-1.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
    <div className='controls'>
      <h2>Default controls: arrow keys.  shift to add coin.  enter to start game</h2>
    </div>

    </div>
  </div>
  )
};