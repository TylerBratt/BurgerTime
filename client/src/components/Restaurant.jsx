import React, { useState, useEffect } from "react";
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
  const [dropDownFilter, setDropDownFilter] = useState('0');
  const [coords, setCoords] = useState([lat, long]);
  // console.log("THESE ARE COORDS",coords)

  useEffect(() => {
    if (address) {
      addresses.map(res => {
        // console.log("res",res.addressID)
        // console.log("dropdown filter", dropDownFilter)
        console.log(" lat",  res.lat)
        if (dropDownFilter == res.addressID) {
        const newCoords = [res.lat, res.long]
        setCoords(prev => [res.lat,  res.long] /*newCoords */)
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
  const address = addresses.map((a) => a.addressID)


// if (dropDownFilter === address) {
//   const newResults = addresses.map(res => [res.lat, res.long])
//   setAllResults(newResults)
// }


// TO make the dropdown work I need to have access to : state of dropddown menu, addressID and the SIMPLEMAP coordinates

// DO i need to make a function to alter the lat and long props?

  // console.log("dropDownFilter", dropDownFilter)
  // console.log("address", address)
  // console.log('addresses', addresses)

  // const stateChanger = () => {
  //   if (dropDownFilter === address) {
  //     const newCoords = addresses.map(res => [res.lat, res.long])
  //     setAllResults(newCoords)
  //   }
  // }
  // console.log(stateChanger())
  // console.log(addresses[0].lat, addresses[0].long)


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
    <div class="restaurant-background">
      <BurgerNavbar />
      <div class="main-restaurant">

        <div class="left-restaurant">
      <h1>{restaurant}</h1>
      <section>
        <div><AddressDropDown onDropDownChange={setDropDownFilter}/></div>
        {/* <div>{logo}</div> */}
      </section>
      {/* <div>{burgerList}</div>
      <div> {link}</div>
      <div>{description}</div> */}
      <div>
        
      </div>

      <div class="left-content">
        {burgerList}
        {/* {address} */}
      </div>
        </div>

      <section class="right-restaurant">
        <div class="locations-drop">
        
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
      center={[ convertToNumber(coords[0]), convertToNumber(coords[1]) ]}
      />
    </div>
    </div>
  )
  }
  