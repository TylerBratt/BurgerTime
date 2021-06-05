import React from 'react'
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
      <a href="Login"className='navbar'>Login</a>
      <a href="Register"className='navbar'>Register</a>
    </div>
  </Navbar>
    </div>
  
  )
}