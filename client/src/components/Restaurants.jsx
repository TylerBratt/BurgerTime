import React, { useState, useEffect } from "react";
import BurgerNavbar from './Navbar'
import axios from 'axios'
import useApplicationData from '../hooks/useApplicationData'
import "./Restaurants.css"

export default function Restaurants(props) {
  const { state, dispatch } = useApplicationData();
  const [results, setResults] = useState([]);


  useEffect(() => {
    const burgerList = `http://localhost:3001/api/extburgers`
    axios.get(burgerList).then(response => {
      setResults([...response.data])
    });
  },[])

  const burgerObj = {}
    for(const burger of results) {
      const key = burger.restaurant
      burgerObj[key] = burger;
      burgerObj[key].count = burgerObj[key].count ? burgerObj[key].count + 1 : 1
  }
  const burgers = Object.values(burgerObj)
  const extRestaurantList = burgers.map(
    (burger) => (
      <div class="main-container">
      <div class="card text-white bg-secondary mb-3">
      <li key={burger.id}>
      <div class="card-header">
      <a class="restaurant-link" href={`http://localhost:3000/restaurants/restaurant/${burger.restaurantID}/${burger.addresses[0].lat}/${burger.addresses[0].long}`}>{burger.restaurant}</a>
      </div>
      <div class="card-body">
      <p class="card-text">
      <ul>
        {burger.addresses.map((address) => (
          <li key={`${burger.id}-${address.addressID}`}>
            <span>{address.number + " "}</span>
            <span>{address.line1 + " "}</span>
            <span>{address.line2 + " "}</span>
            <span>{address.postalCode + " "}</span>
            <span>{address.country}</span>
          </li>))}
      </ul>
      </p>
    </div>
    </li>
  </div>
  </div>))
  return ( 
    <div>
    <BurgerNavbar />
      <h1> Restaurants Page</h1>
      <ul>{extRestaurantList}</ul>
    
  </div>
  )
};