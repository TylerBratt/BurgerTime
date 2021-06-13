import React, { useState, useEffect } from "react";
import BurgerNavbar from './Navbar'
import Searchbar from './Searchbar'
import Results from './Results'
import axios from 'axios'

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
  console.log("ALLRESULTS",allResults)
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
      const newResults = allResults.filter(res => res.restaurant.includes(term))
      setResults(newResults)
    } else if (dropDownFilter === 'Ingredients') {
      const newResults = allResults.filter(res => res.ingredients.includes(term))
      setResults(newResults)
    } else if (dropDownFilter === 'Vegetarian') {
      const newResults = allResults.filter(res => res.isVegetarian === true && res.ingredients.includes(term))
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
      <ul key={index}>
        {results.filter(res => res.restaurantID === burger.restaurantID).map(burger => ( 
          <li key={`${burger.id}`}>
          <img src={burger.image} height="100" width="100" alt="burger"></img>
          <span>{burger.name}</span>
            <a href={`/restaurants/burger/${burger.id}`}>{burger.restaurant}</a>
        </li>))}

      </ul>))
  
  return (
    <div>
      <BurgerNavbar />
      <Searchbar onSearch={term => setTerm(term)} onDropDownChange={setDropDownFilter}/>
      <Results results={results} />
      <h1>Burgers Page</h1>
      {/* <ul> {userList} </ul> */}
      {/* <ul> {extburgerList} </ul> */}
      <div class="burgerlist">
        <table class="table table-bordered">
        <thead>
          <tr>
            <th colspan="2">Yummy Burgers!</th>
            <th>What it's called</th>
            <th>Where to find this bad boy!!</th>
          </tr>
          </thead>
        <tbody>
          <th>
          {extRestaurantList}
          </th>
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
        </table>
      </div>
    </div>
  )
};