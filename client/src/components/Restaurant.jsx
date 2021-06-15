import React, { useState, useEffect } from "react";
import BurgerNavbar from './Navbar'
import SimpleMap from './SimpleMap'
import AddressDropDown from './AddressDropDown'
import useApplicationData from '../hooks/useApplicationData'
import {
  useParams,
} from "react-router-dom";
import "./Restaurant.css"
import SocialFollow from "./SocialFollow"


export default function Restaurant() {

  const { state, dispatch } = useApplicationData();
  const { id, lat, long } = useParams();
  const [dropDownFilter, setDropDownFilter] = useState('0');
  const [coords, setCoords] = useState([lat, long]);

  useEffect(() => {
    if (address) {
      addresses.map(res => {

        console.log(" lat",  res.lat)
        if (dropDownFilter == res.addressID) {
        const newCoords = [res.lat, res.long]
        setCoords(prev => [res.lat,  res.long] )
        console.log("THIS IS NEW COORDS", newCoords)}
      })
    }
  },[dropDownFilter])

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
  const address = addresses.map((a) => a.addressID)

  const convertToNumber = str => {
    console.log("what passes through here?", str)
    if(typeof str === "string") {
      if(str.charAt(0) === "-") {
        let news = str.substring(1)
        return 0 - Number(news) 
      } else {
        return Number(str)
      }
    } else {
      return str
    }
  }

  return (
    <div className="restaurant-background">
      <BurgerNavbar />
        <div className="main-restaurant">
          <div className="logo-restaurant">
            <div className="logo_background">
              {logo}
            </div>
          <div id='dropdown'>
            <AddressDropDown onDropDownChange={setDropDownFilter}/>
          </div>
        </div>
        <div className="desc-restaurant">
          <h1>{restaurant}</h1>
            {description}
            {link}
        </div>
        <div className="right-restaurant">
          <div className="right-content">
            {burgerList}
          </div>
        </div>
        </div>
        <div className="restaurant-map">
          <SimpleMap 
          center={[ convertToNumber(coords[0]), convertToNumber(coords[1]) ]}
          />
      </div>
    <div class="restaurant-map">
      <SimpleMap 
      center={[ convertToNumber(coords[0]), convertToNumber(coords[1]) ]}
      />
    </div>
    <SocialFollow />
    </div>
  )
}
  