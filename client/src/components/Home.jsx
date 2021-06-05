import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './Home.css'
import BurgerNavbar from './Navbar'


export default function Home(props) {
  return(
  <div>
    <BurgerNavbar />
    <section class='table'>
      <Button variant="light">Burgers</Button>
      <Button variant="light">Restaurant</Button>
      <Button variant="light">Search</Button>
      <Button variant="light">About Us</Button>

    </section>
  </div>
  )
};