import React, { useState, useEffect } from "react";
import BurgerNavbar from './Navbar'
import SimpleMap from './SimpleMap'
import AddressDropDown from './AddressDropDown'
import useApplicationData from '../hooks/useApplicationData'
import {
  useParams,
} from "react-router-dom";



export default function Restaurant() {

  const { state, dispatch } = useApplicationData();
  const { id, lat, long } = useParams();
  const [dropDownFilter, setDropDownFilter] = useState('All');
  const [coords, setCoords] = useState([lat, long]);
  console.log("THESE ARE COORDS",coords)

  useEffect(() => {
    if (dropDownFilter === address) {
      const newCoords = addresses.map(res => [res.lat, res.long])
      setCoords(newCoords)
      console.log("newCoords",newCoords)
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

  console.log("dropDownFilter", dropDownFilter)
  console.log("address", address)
  console.log('addresses', addresses)

  // const stateChanger = () => {
  //   if (dropDownFilter === address) {
  //     const newCoords = addresses.map(res => [res.lat, res.long])
  //     setAllResults(newCoords)
  //   }
  // }
  // console.log(stateChanger())
  console.log(addresses[0].lat, addresses[0].long)


  const convertToNumber = str => {
    if(str.charAt(0) == '-') {
      let news = str.substring(1)
      return 0 - Number(news) 
    } else {
      return Number(str)
    }
  }

  return (
    <div>
      <BurgerNavbar />
      <h1>{restaurant}</h1>
      <section>
        <div>{logo}</div>
        <div><AddressDropDown onClick={setCoords} onDropDownChange={setDropDownFilter}/></div>
      </section>
      <div>{burgerList}</div>
      <div> {link}</div>
      <div>{description}</div>
      <div>
        <SimpleMap 
        center={[ convertToNumber(lat), convertToNumber(long) ]}
        />
      </div>
    </div>
  )
  }
  