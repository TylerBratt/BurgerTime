import React, { useState } from 'react'
import useApplicationData from '../hooks/useApplicationData'
import {
  useParams,
} from "react-router-dom";
import Results from './Results'
import Searchbar from './Searchbar'



export default function AddressDropDown (props) {
  const [results, setResults] = useState([]);
  const [dropSelect, setDropSelect] = useState('All')
  const { state, dispatch } = useApplicationData();
  const { id } = useParams();

  const restaurantObj = {}
  for(const oneRest of state.extburgers) {
    const key = oneRest.restaurant
    restaurantObj[key] = oneRest;
  }
  const singleRest = Object.values(restaurantObj)

  const oneRestaurant = singleRest.find((restaurant) => restaurant.restaurantID == id)
  if (!oneRestaurant) {
    return null
    // Return GIF "LOADING"
  }
  const {
    addresses,
  } = {...oneRestaurant}

    const singleRestaurant= {}
    const addressList = addresses.map((a) => (
      singleRestaurant.keys = a.addressID,
      singleRestaurant.value = [a.number, a.line1] 
      ))

  return (
    <div>
      <select id='selAddress'  
            value={dropSelect} 
            onChange={(evt) => {
            props.onDropDownChange(evt.target.value)
            setDropSelect(evt.target.value)
            }}>
        <option value='All'>Select Location</option>
          {addressList.map((address, index) => {
            return (
          <option key={index} value={index}>{address[0]} {address[1]}</option>
            )
          })}
      </select>
    </div>
  )
}