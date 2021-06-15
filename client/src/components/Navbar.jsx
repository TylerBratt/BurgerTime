import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import axios from 'axios'
import './Navbar.css'
const imageLogo = require('../Images/b-time-logo.png')


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
          <div className='logo'><img src={imageLogo} id='logopic' width="40%" height="40%"/></div>
        </Navbar.Brand>
        <div id="rightNav">
          <Link to='/login'>Log In</Link>
          <br></br>
          <Link to='/register'>Sign Up</Link>
        </div>
      </Navbar>
    </div>
  )}
    else {
      return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <div className='logo'><img src={imageLogo} id='logopic' width="40%" height="40%"/></div>
            </Navbar.Brand>
              <div id="rightNav">
                <a>Hungry for some 🍔 's {user.full_name}?</a>
                <a class="logout-button" onClick={userLogout}>Logout</a>
              </div>
            </Navbar>
        </div>
      )
    }
}