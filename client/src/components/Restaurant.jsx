import React, { useState } from "react";
import BurgerNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'
import {
  useParams,
} from "react-router-dom";
import { MapContainer } from 'react-leaflet'


export default function Restaurant() {

  const { state, dispatch } = useApplicationData();
  const { id } = useParams();
  // console.log(typeof id)

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
  return (
    <div>
      <BurgerNavbar />
      <p>{logo}</p>
      <h1>{restaurant}</h1>
      <p> {link}{description}</p>
    <span>{address}</span>
    <p>{}</p>
    {burgerList}
    
    </div>
  )
  }
