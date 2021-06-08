import React from 'react'
import BurgerNavbar from './Navbar'

export default function Favourites(props) {
  let user = localStorage.getItem('userObject');
  user = JSON.parse(user);

  console.log('User on Favourite Page:', user);
  return (
    <div>
      <BurgerNavbar />
      <h1>Favourites</h1>
    </div>
  )

};