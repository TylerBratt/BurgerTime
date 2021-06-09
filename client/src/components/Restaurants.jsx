import React, { useState, useEffect } from "react";
import BurgerNavbar from './Navbar'
import Searchbar from './Searchbar'
import Results from './Results'
import axios from 'axios'
import useApplicationData from '../hooks/useApplicationData'

export default function Restaurants(props) {
  const { state, dispatch } = useApplicationData();
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(()=>{ 
    const burgerList = `localhost:3001/api/extburgers`;
    axios.get(burgerList).then(response => {
      setResults([...response.data.results]);
    });
  },[term])
const burgerObj = {}
  for(const burger of state.extburgers) {
    const key = burger.restaurant
    burgerObj[key] = burger;
    burgerObj[key].count = burgerObj[key].count ? burgerObj[key].count + 1 : 1
  }

  const burgers = Object.values(burgerObj)


  const extRestaurantList = burgers.map(
    (burger) => (
    <li key={burger.id}>
      <a href={`http://localhost:3000/restaurants/restaurant/${burger.restaurantID}`}>{burger.restaurant}</a>
      <ul>
        {burger.addresses.map((address) => (
          <li key={`${burger.id}-${address.addressID}`}>
            <span>{address.number}</span>
            <span>{address.line1}</span>
            <span>{address.line2}</span>
            <span>{address.postalCode}</span>
            <span>{address.country}</span>
          </li>))}
      </ul>
    </li>))
  
  return ( 
  <div>
    <BurgerNavbar />
    <Searchbar onSearch={term => setTerm(term)} />
    <Results results={results} />
      <h1> Restaurants Page</h1>
      <ul>{extRestaurantList}</ul>
  </div>
  )
};