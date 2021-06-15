import React, { useState, useEffect } from "react";
import BurgerNavbar from './Navbar'
import Searchbar from './Searchbar'
import Results from './Results'
import axios from 'axios'
import './Burgers.css'
import SocialFollow from "./SocialFollow"


import useApplicationData from '../hooks/useApplicationData'

export default function Burgers(props) {
  console.log("props", props)
  const { state, dispatch } = useApplicationData();
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [dropDownFilter, setDropDownFilter] = useState('All');

  useEffect(() => {
    const burgerList = `http://localhost:3001/api/extburgers`
    axios.get(burgerList).then(response => {
      setAllResults([...response.data])
      setResults([...response.data])
      // console.log("OVER HERE", ...response.data)
    });
  },[])


  useEffect(()=> {
    if (dropDownFilter === 'All') {
      const newResults = allResults
      setResults(newResults)
    } else if (dropDownFilter === 'Restaurant') {
      const newResults = allResults.filter(res => res.restaurant.toLowerCase().includes(term))
      setResults(newResults)
    } else if (dropDownFilter === 'Ingredients') {
      const newResults = allResults.filter(res => res.ingredients.toLowerCase().includes(term))
      setResults(newResults)
    } else if (dropDownFilter === 'Vegetarian') {
      const newResults = allResults.filter(res => res.isVegetarian === true && res.ingredients.toLowerCase().includes(term))
      setResults(newResults)
    }
  },[term, dropDownFilter])

  const burgerObj = {}
    for(const burger of results) {
      const key = burger.restaurant
      burgerObj[key] = burger;
      burgerObj[key].count = burgerObj[key].count ? burgerObj[key].count + 1 : 1
  }
  const burgers = Object.values(burgerObj)
  const extRestaurantList = burgers.map(
    (burger, index) => (
      <div className='burger-restaurant-container'>
      {results.filter(res => res.restaurantID === burger.restaurantID).map(burger => ( 
        <a className='clickable-box' href={`/restaurants/burger/${burger.id}`}>
          <li className='restaurant-burgers' href={`/restaurants/burger/${burger.id}`} key={`${burger.id}`}>
            <img src={burger.image} height="100" width="100" alt="burger"></img>
            <span>{burger.name}</span>
            <a>{burger.restaurant}</a>
          </li>
        </a>))}
      </div>))
  
  return (
    <div className='burgers-page-background'>
      <BurgerNavbar />
      <div className='burger-top'>
      <Searchbar onSearch={term => setTerm(term)} onDropDownChange={setDropDownFilter}/>
      <Results results={results} />
      <h1 className = 'burgers-title'>Burgers Page</h1>
      </div>
      {/* <ul> {userList} </ul> */}
      {/* <ul> {extburgerList} </ul> */}
      <div class="burgerlist">
        <section>
          <div className='restaurant-burgers-list'>
          {extRestaurantList}
          </div>
        </section>
      </div>
      <SocialFollow />
    </div>
  )
};