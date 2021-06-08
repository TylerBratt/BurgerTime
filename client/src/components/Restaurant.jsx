import React, { useState } from "react";
import BurgerNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'
import {
  useParams,
} from "react-router-dom";

export default function Restaurant() {

  const { state, dispatch } = useApplicationData();
  const { id } = useParams();

  const burgerObj = {}
  for(const burger of state.extburgers) {
    const key = burger.restaurant
    burgerObj[key] = burger;
  }

  const burgers = Object.values(burgerObj)
  console.log(burgers)
  // const testRest = burgers.forEach(burger => burger.restaurantID === id)
  
  // console.log("testRest", testRest)
  // if (!testRest) {
  //   return null
    //Return GIF "LOADING"
  const singleRestaurant = burgers.map((restaurant) => restaurant.restaurantID === id) 
    console.log(singleRestaurant)


  // const burgerName = (<a>{name}</a>)
  // const burgerRestaurant = (<a>{restaurant}</a>)
  // const burgerIngredients = (<li key={id}> <a>{ingredients}</a></li>);
  // const burgerDescription = (<a>{description}</a>);
  // const burgerRestaurantWeb = (<a href={`${web}`}>{web}</a>);
  // const burgerImage = (<img src={image} height="250" width="250"></img>);
  // console.log(isVegetarian)
  // const burgerAddress = addresses.map((a) => (<address key={a.addressID} > {a.number} {a.line1}, {a.line2}, {a.postalCode}</address>));

  return (
    <div>
      <BurgerNavbar />
      <p>hi{singleRestaurant}</p>
      <p></p>
    </div>
  )
}
