import React, { useState, setState, useReducer } from "react";
import BurgerNavbar from './Navbar'
import axios from 'axios'
import useApplicationData from '../hooks/useApplicationData'
import {
  useParams,
} from "react-router-dom";
import {
  SET_APPLICATION_DATA, UPDATE_FAVOURITE_DATA
} from '../reducer/data_reducer';

export default function Burger(props) {
  const { state, dispatch } = useApplicationData();
  const { id } = useParams();

  let favouritesButton
  let user = localStorage.getItem('userObject');
  if (!user) {
    console.log("i'm null")
  } else {
    user = JSON.parse(user);
    const burger_id = id;
    const user_id = user.id;
    if (user.id) {
      console.log("logged IN")
    }
    
    const userfavs = state.favourites.find(d => d.user_id == user_id && d.burger_id == id)

    const handleSubmit = (event) => {
      console.log("I FIRED")
      event.preventDefault()
      if (userfavs) {
        console.log("Favourite EXISTS")
      } else {
        let favourite = {
          user_id: user_id,
          burger_id: id
        }
        axios.post('/api/favourites', { favourite })
          .then(response => {
            dispatch({
              type: UPDATE_FAVOURITE_DATA,
              favourites: response.data.favourite
            })
          window.location.href = '/favourites';
          })
          .catch(error => console.log('api errors:', error))
      }
    };

    if(user){
      favouritesButton = <button onClick={handleSubmit} type="favourites-button" class="btn btn-primary btn-sm">Add to Favourites!!</button>
    } else favouritesButton = <div></div>
  }

  const testburger = state.extburgers.find(d => d.id == id)
  if (!testburger) {
    return null
    //Return GIF "LOADING"
  }

  const {
    name,
    restaurant,
    web,
    image,
    ingredients,
    isVegetarian,
    description,
    addresses,
    brand
  } = { ...testburger }
  
  const burgerName = (<a>{name}</a>)
  const burgerRestaurant = (<a>{restaurant}</a>)
  const burgerIngredients = (<li key={id}> <a>{ingredients}</a></li>);
  const burgerDescription = (<a>{description}</a>);
  const burgerRestaurantWeb = (<a href={`${web}`}>{web}</a>);
  const burgerRestaurantBrand = (<a href={`${web}`}><img src={brand} width="100"></img></a>);
  const burgerImage = (<img src={image} height="250" width="250"></img>);
  const burgerAddress = addresses.map((a) => (<address key={a.addressID} > {a.number} {a.line1}, {a.line2}, {a.postalCode}</address>));

  let burgerType
  if (!isVegetarian) {
    burgerType = (<a>Carnivore Lovers!!</a>)
  } else burgerType = (<a>Herbivore Approved!!!</a>)

  return (
    <div>
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="NZACY53u"></script>
      <BurgerNavbar />
      <h1>{burgerName}</h1>
      <table></table>
      <th>
        {burgerImage}
      </th>
      <h2>
        {burgerDescription}
      </h2>
      <h3>
        {burgerType}
        {burgerIngredients}
      </h3>
      <div class="burgername">
        <table class="table table-bordered">
          <thead>
          </thead>
          <tbody>
            <th>
              {burgerRestaurantBrand}
              {burgerRestaurant}
              {burgerRestaurantWeb}
              {burgerAddress}
            </th>
          </tbody>
          <div>
            <button type="like-button" class="btn btn-success btn-sm">Great!!</button>
          </div>
          <div>
            <button type="dis-like-button" class="btn btn-danger btn-sm">Nasty!!</button>
          </div>
          <div>
           {favouritesButton}
            </div>
        </table>
      </div>
    </div>
  )
};