import React, { useState, useEffect } from "react";
import BurgerNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'

export default function Burgers(props) {
  console.log("props", props)
  //const [currentView, setCurrentView] = useState('')
  const { state, dispatch } = useApplicationData();
  console.log("BBB", state)
  console.log("CCC", state.users)
  //const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email}</li>));

  const extburgerList = state.extburgers.map((extburger) =>(<li key={extburger.id}> <img src={extburger.image} height="100" width="100"></img><a href={`/restaurants/burger/${extburger.id}`}>{extburger.name}</a><a>{extburger.restaurant}</a></li>));
  // const extburgerName = state.extburgers.map((extburger) => (<li key={extburger.id}> <a href='/restaurants/burgers/:<%=`${extburger.id}`%>'>{extburger.name}</a></li>));
  // const extburgerImg = state.extburgers.map((extburger) => (<li key={extburger.id}> <img src={extburger.image} height="100" width="100"></img></li>));
  // const extburgerRestaurant = state.extburgers.map((extburger) => (<li key={extburger.id}> <a>{extburger.restaurant}</a></li>));
  return (
    <div>
      <BurgerNavbar />
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
          {extburgerList}
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