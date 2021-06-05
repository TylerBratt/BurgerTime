import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './Home.css'


export default function Home(props) {
  return(
  <div>
    <Link to='/login'>Log In</Link>
      <br></br>
    <Link to='/signup'>Sign Up</Link>
    <section class='table'>
      <Button variant="light">Burgers</Button>
      <Button variant="light">Restaurant</Button>
      <Button variant="light">Search</Button>
      <Button variant="light">About Us</Button>

    </section>
  </div>
  )
};