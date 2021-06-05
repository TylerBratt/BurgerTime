import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'


export default function BurgerNavbar(props) {
  return (
    <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/Home">
      {/* <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '} */}
      <div className='logo'>BurgerTime</div> 
    </Navbar.Brand>
    <div id="rightNav">
    <Link to='/login'>Log In</Link>
      <br></br>
    <Link to='/register'>Sign Up</Link>
    </div>
  </Navbar>
    </div>
  
  )
}