import React, { useState } from "react";
import BurgerNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'
import {
  useParams,
} from "react-router-dom";


export default function Burger(props) {
  const { state, dispatch } = useApplicationData();
  const { id } = useParams();
  console.log("HHHHHHH", state)

  // const getCurrentUser = async function () {
  //   const currentUser = await Parse.User.currentAsync();
  //   if (currentUser !== null) {
  //     Alert.alert(
  //       'Success!',
  //       `${currentUser.get('username')} is the current user!`,
  //     );
  //   }
  //   return currentUser;
  // };



  console.log("This is Burgers", state.extburgers)
  const testburger = state.extburgers.find(d => d.id == id)
  if (!testburger) {
    return null
    //Return GIF "LOADING"
  }

  const {
    name,
    restaurant,
    web,
    image,
    ingredients,
    isVegetarian,
    description,
    addresses,
    brand
  } = { ...testburger }
  const burgerid = id;
  const userid = 4;
  console.log("FOR FAVORITES", userid, id)
  const burgerName = (<a>{name}</a>)
  const burgerRestaurant = (<a>{restaurant}</a>)
  const burgerIngredients = (<li key={id}> <a>{ingredients}</a></li>);
  const burgerDescription = (<a>{description}</a>);
  const burgerRestaurantWeb = (<a href={`${web}`}>{web}</a>);
  const burgerRestaurantBrand = (<a href={`${web}`}><img src={brand} width="100"></img></a>);
  const burgerImage = (<img src={image} height="250" width="250"></img>);
  const burgerAddress = addresses.map((a) => (<address key={a.addressID} > {a.number} {a.line1}, {a.line2}, {a.postalCode}</address>));

  let burgerType
  if (!isVegetarian) {
    burgerType = (<a>Carnivore Lovers!!</a>)
  } else burgerType = (<a>Herbivore Approved!!!</a>)

  return (

    <div>
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="NZACY53u"></script>
      <BurgerNavbar />
      <h1>{burgerName}</h1>
      <th>
        {burgerImage}
      </th>
      <h2>
        {burgerDescription}
      </h2>
      <h3>
        {burgerType}
        {burgerIngredients}
      </h3>
      <div class="burgername">
        <table class="table table-bordered">
          <thead>
          </thead>
          <tbody>
            <th>
              {burgerRestaurantBrand}
              {burgerRestaurant}
              {burgerRestaurantWeb}
              {burgerAddress}
            </th>
          </tbody>
          <div>
            <button type="like-button" class="btn btn-success btn-sm">Great!!</button>
          </div>
          <div>
            <button type="dis-like-button" class="btn btn-danger btn-sm">Nasty!!</button>
          </div>
          <div>
            <button type="favorites-button" class="btn btn-primary btn-sm">Add to Favorites!!</button>
          </div>
        </table>
      </div>
      <a href="https://www.facebook.com/sharer/sharer.php?u=">Share on Facebook</a>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
    </div>
  )
};