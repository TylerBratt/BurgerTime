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
  //const [currentView, setCurrentView] = useState('')
  const { state, dispatch } = useApplicationData();
  console.log("BBB", state)
  console.log("CCC", state.users)
  //const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email}</li>));



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
    //make this conditional with what is active on the drop down menu
    //enable set to lowercase before search
    //remove search button??

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
  console.log("burgers on Burgers.jsx",burgers)
  const extRestaurantList = burgers.map(
    (burger, index) => (
      
      
      <div className='burger-restaurant-container'>
      {results.filter(res => res.restaurantID === burger.restaurantID).map(burger => ( 
        <a className='clickable-box' href={`/restaurants/burger/${burger.id}`}><li className='restaurant-burgers' href={`/restaurants/burger/${burger.id}`} key={`${burger.id}`}>
          <img src={burger.image} height="100" width="100" alt="burger"></img>
          <span>{burger.name}</span>
          
          <a>{burger.restaurant}</a>
          </li></a>))}

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
        <tbody>
          <div className='restaurant-burgers-list'>
          {extRestaurantList}
          </div>
          {/* <th>
          {extburgerImg}
          </th>   
          <th>
          {extburgerName}
          </th>
          <th>
          {extburgerRestaurant}
          </th> */}

        {/* <ul> {extburgerImg} {extburgerNames}</ul>
        <ul> {extburgerNames} </ul> */}
        </tbody>
      </div>
      <SocialFollow />
    </div>
  )
};