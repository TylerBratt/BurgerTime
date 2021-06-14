import React, { useState } from "react";
import BurgerNavbar from './Navbar'
import SimpleMap from './SimpleMap'
import AddressDropDown from './AddressDropDown'
import useApplicationData from '../hooks/useApplicationData'
import {
  useParams,
} from "react-router-dom";

// Styling
import "./Restaurant.css"



export default function Restaurant() {

  const { state, dispatch } = useApplicationData();
  const { id, lat, long } = useParams();
  // console.log( id)

  const restaurantObj = {}
  for(const oneRest of state.extburgers) {
    const key = oneRest.restaurant
    restaurantObj[key] = oneRest;
  }

  const singleRest = Object.values(restaurantObj)

  const allBurgersFromRestaurant = state.extburgers.filter(burger => burger.restaurantID == id) 

  const burgerList = allBurgersFromRestaurant.map(burger => (<li key={burger.id}><a href={`/restaurants/burger/${burger.id}`}>{burger.name}</a></li>))

  const oneRestaurant = singleRest.find((restaurant) => restaurant.restaurantID == id)
  if (!oneRestaurant) {
    return null
    // Return GIF "LOADING"
  }
  const {
    addresses,
    brand,
    description,
    restaurant,
    web
  } = {...oneRestaurant}

const logo = (<img src={brand} height="250" width="250"></img>)
const link = (<a href={web}>{web}</a>)
const address = addresses.map((a) => (<address key={a.addressID} > {a.number} {a.line1}, {a.line2}, {a.postalCode}</address>))

const convertToNumber = str => {
  // console.log(str.charAt(0))
  if(str.charAt(0) == '-') {
    let news = str.substring(1)
    // console.log(`news: type of ${typeof (0 - Number(news))}`)
    return 0 - Number(news) 
  } else {
    return Number(str)
  }
}


  return (
    <div class="restaurant-background">
      <BurgerNavbar />
      <div class="main-restaurant">

        <div class="left-restaurant">
      <h1>{restaurant}</h1>

      <div class="left-content">
        {burgerList}
        {address}
      </div>
        </div>

      <section class="right-restaurant">
        <div class="locations-drop">
        <AddressDropDown />
        </div>
        <div class="logo-restaurant">
        {logo}
        <div class="desc-restaurant">
        {description}
        {link}
        </div>
        </div>
      </section>
    
      </div>
    <div class="restaurant-map">
      <SimpleMap 
      center={[ convertToNumber(lat), convertToNumber(long) ]}
      />
    </div>
    
    </div>

  )
  }
  