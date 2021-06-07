import React from 'react'
import BurgerNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'

export default function Restaurants(props) {
  const { state, dispatch } = useApplicationData();

  const burgerObject = state.extburgers.map((burgerObj)=>{ burgerObj.addresses.map((address) =>{console.log(address)})})

  const extRestaurantList = state.extburgers.map(
    (restaurant) =>(
    <li key={restaurant.id}>
      <a href={`http://localhost:3000/Restaurants/${restaurant.id}`}>{restaurant.restaurant}</a><ul>
      {restaurant.addresses.map((address) =>(
      <li key={`${restaurant.id}-${address.addressID}`}>
        <span>{address.number}</span>
        <span>{address.line1}</span>
        <span>{address.line2}</span>
        <span>{address.postalCode}</span>
        <span>{address.country}</span>
      </li>))}</ul></li>));
  
  return ( <div>
  <BurgerNavbar />
    <h1> Restaurants Page</h1>
    <ul>{extRestaurantList}</ul>

  </div>
  )
};