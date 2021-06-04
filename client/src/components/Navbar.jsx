import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'


export default function BurgerNavbar(props) {
  return (
    <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      {/* <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '} */}
      <div class='logo'>BurgerTime</div> 
    </Navbar.Brand>
    <div id="rightNav">
      <a href="Login"class='navbar'>Login</a>
      <a href="Register"class='navbar'>Register</a>
    </div>
  </Navbar>
    </div>
  
  )
}