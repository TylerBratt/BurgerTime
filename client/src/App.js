import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import axios from 'axios'
import useApplicationData from './hooks/useApplicationData'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import BurgerNavbar from './components/Navbar'
import Burger from './components/Burger'
import AddBurger from './components/AddBurger'
import Burgers from './components/Burgers'
import Restaurant from './components/Restaurant'
import Restaurants from './components/Restaurants'
import Favourites from './components/Favourites'


function App() {
  const [currentView, setCurrentView] = useState('')
  const { state, dispatch } = useApplicationData();
  
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name}{user.email}</li>
  ));

  return (
  <div className="App" >

      <BurgerNavbar />

    {currentView === "/Home" && <Home />}
    {currentView === "Login" && <Login />}
    {currentView === "Register" && <Register />}
    {currentView === "Burger" && <Burger />}
    {currentView === "AddBurger" && <AddBurger />}
    {currentView === "Burgers" && <Burgers />}
    {currentView === "Restaurant" && <Restaurant />}
    {currentView === "Restaurants" && <Restaurants />}
    {currentView === "Favourites" && <Favourites />}

      {/* <h1>users
        <ul>{userList}</ul>
      </h1> */}
  </div> 
  );
};

export default App;
