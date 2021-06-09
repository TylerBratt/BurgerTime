import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import axios from 'axios'
import './Navbar.css'


export default function BurgerNavbar(props) {
  const userLogout = () => {
    axios.post('/api/logout');
    localStorage.clear();
    window.location.href = '/login';
  }

  let user = localStorage.getItem('userObject');
  user = JSON.parse(user);

  if (!user) {
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
    else {
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
          <div className='logo'>BurgerTime</div> 
        </Navbar.Brand>
        <div id="rightNav">
          <a>Hungry for some 🍔 's {user.full_name}?</a>
        <a onClick={userLogout}>Logout</a>
        </div>


        </Navbar>
        </div>
      )
    }
}