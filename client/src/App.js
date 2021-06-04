import './App.css';
import React, { useState } from 'react'
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
  
  const userList = state.users.map((user) => (<li key={user.id} > {user.name} </li>

  ));
  return (<div className="App" >
    <BurgerNavbar />
    {currentView === "Home" && <Home />}
    {currentView === "Login" && <Login />}
    {currentView === "Register" && <Register />}
    {currentView === "Burger" && <Burger />}
    {currentView === "AddBurger" && <AddBurger />}
    {currentView === "Burgers" && <Burgers />}
    {currentView === "Restaurant" && <Restaurant />}
    {currentView === "Restaurants" && <Restaurants />}
    {currentView === "Favourites" && <Favourites />}
    </div> 
  );
};

export default App;
