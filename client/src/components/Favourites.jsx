import React from 'react'
import BurgerNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'
import './Favourite.css'
import SocialFollow from "./SocialFollow"


export default function Favourites(props) {
  let user = localStorage.getItem('userObject');
  user = JSON.parse(user);

  const { state, dispatch } = useApplicationData();

  const user_id = user.id;
  const userBurgers = state.favourites.filter(favourite => favourite.user_id == user_id)
  const userBurgersId = userBurgers.map(burger => burger.burger_id)

  let userBurgersList = []
  for (let i = 0; i < userBurgersId.length; i++) {
    // let a ={}
    //const a = state.extburgers.find(res => res.id === userBurgersId[i])
    userBurgersList.push(state.extburgers.find(res => res.id == userBurgersId[i]))
  }

  // let userFavourites
  // if (userBurgersList.length < 1) {
  // userFavourites = <h1>You have not Chosen any Favourites yet!!</h1>
  // } else {
  const userFavourites = userBurgersList.map((burger) =>(
    <div className='favourite-container'>

        <div key={burger.id}> <img src={burger.image} height="100" width="100"></img>
        </div>
        <div>
          <a href={`/restaurants/burger/${burger.id}`}>{burger.name}</a>
        </div>
        <div>
          <a>{burger.restaurant}</a>
        </div>
      </div>));
  // };

  return (
    <div>
        <BurgerNavbar />
        <h1>{user.full_name}'s Favourite Burgers</h1>
        <div>
          {userFavourites}
        </div>
        <tbody>

        </tbody>
        <SocialFollow />
      </div>
  )

};