import React, { useState, setState, useReducer, reset, useEffect } from "react";
import BurgerNavbar from './Navbar'
import axios from 'axios'
import useApplicationData from '../hooks/useApplicationData'
import {
  useParams,
} from "react-router-dom";
import {
  UPDATE_FAVOURITE_DATA, UPDATE_COMMENT_DATA, UPDATE_LIKES_DATA
} from '../reducer/data_reducer';
import "./Burger.css"


export default function Burger(props) {
  const { state, dispatch } = useApplicationData();
  const { id } = useParams();
  const burger_id = id;
  let favouritesButton
  let user = localStorage.getItem('userObject');
  if (!user) {
    console.log("i'm null")
  } else {
    user = JSON.parse(user);
    const burger_id = id;
    const user_id = user.id;
    if (user.id) {
      console.log("logged IN")
    }

    const userfavs = state.favourites.find(d => d.user_id == user_id && d.burger_id == id)

    const handleClick = (event) => {
      console.log("I FIRED")
      event.preventDefault()
      if (userfavs) {
        console.log("Favourite EXISTS")
      } else {
        let favourite = {
          user_id: user_id,
          burger_id: id
        }
        axios.post('/api/favourites', { favourite })
          .then(response => {
            dispatch({
              type: UPDATE_FAVOURITE_DATA,
              favourites: response.data.favourite
            })
            window.location.href = '/favourites';
          })
          .catch(error => console.log('api errors:', error))
      }
    };

    if (userfavs) {
      favouritesButton = <button onClick={handleClick} type="favourites-button" class="btn btn-primary btn-sm">One of your Burgers!!</button>
    } else if (user) {
      favouritesButton = <button onClick={handleClick} type="favourites-button" class="btn btn-primary btn-sm">Add to Favourites!!</button>
    } else favouritesButton = <div></div>

  }

  const likeHandleClick = (event) => {
    event.preventDefault()
    let burgerlike = {
      burger_id: id,
      likes: like + 1,
      dislikes: dislike
    }
    axios.put(`/api/burgerlikes/${likeid}`, { burgerlike })
      .then(response => {
        let burgerIndex = 0
        for (let i = 0; i < state.burgerlikes.length; i++) {
          if (state.burgerlikes[i].id == response.data.burgerlike.id) {
            burgerIndex = i
          }
        }
        dispatch({
          type: UPDATE_LIKES_DATA,
          burgerlikes: response.data.burgerlike,
          burgerIndex
        })
      })
      .catch(error => console.log('api errors:', error))
  };


  const dislikeHandleClick = (event) => {
    event.preventDefault()
    let burgerlike = {
      burger_id: id,
      likes: like,
      dislikes: dislike + 1
    }
    axios.put(`/api/burgerlikes/${likeid}`, { burgerlike })
    .then(response => {
      let burgerIndex = 0
      for (let i = 0; i < state.burgerlikes.length; i++) {
        if (state.burgerlikes[i].id == response.data.burgerlike.id) {
          burgerIndex = i
        }
      }
      dispatch({
        type: UPDATE_LIKES_DATA,
        burgerlikes: response.data.burgerlike,
        burgerIndex
      })
    })
    .catch(error => console.log('api errors:', error))
  };


  const handleSubmit = (event) => {

    const burgerForm = document.getElementById("burger-comments").value
    const nameForm = document.getElementById("name-comments").value
    event.preventDefault()
    let comment = {
      full_name: nameForm,
      burger_id: parseInt(id),
      comment: burgerForm
    }
    axios.post('/api/comments', { comment })
      .then(response => {
        dispatch({
          type: UPDATE_COMMENT_DATA,
          comments: response.data.comment
        })
        document.getElementById("name-comments").value = ""
        document.getElementById("burger-comments").value = ""
      })
      .catch(error => console.log('api errors:', error))

  };



  const commentsForBurger = state.comments.filter(comment => comment.burger_id == burger_id)
  const commentsForPage = commentsForBurger.map((comment) => 
  (
  <div class="card">
  <div class="card-header">
  {comment.full_name} 
  </div>
  <div class="card-body">
  {comment.comment}
  </div>
  </div>
  ));

  const likesForBurger = state.burgerlikes.filter(likes => likes.burger_id == burger_id)
  const likesForPage = likesForBurger.map((likes) => <a>{likes.likes}</a>)
  const likeid = ((likesForBurger.map(likes => likes.id))[0])
  const like = ((likesForBurger.map(likes => likes.likes))[0])
  const dislikesForPage = likesForBurger.map((dislikes) => <a>{dislikes.dislikes}</a>)
  const dislike = ((likesForBurger.map(dislikes => dislikes.dislikes))[0])

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
    <div class="page-background">
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="NZACY53u"></script>
    <BurgerNavbar />

    <div class="card text-white bg-secondary mb-3">
      <div class="card-header">
        <h1>{burgerName}</h1>
        {/* <table></table> */}
      </div>
      <div class="burger-card">
        <th>
          {burgerImage}
        </th>
        <div class="right-card">

          <h4 class="card-text">
            {burgerDescription}
          </h4>
          <h4>
            {burgerType}
          </h4>
          <h5>
            {burgerIngredients}
          </h5>
        </div>
      </div>
    </div>
    <div class="burgername">
    </div>

    <div class="main-content">
      <div class="left-main">
      <h4>
        {commentsForPage}
      </h4>
      </div>
      <div class="right-main">
      <tbody class="website-info">
          <th>
            {burgerRestaurantBrand}
            {burgerRestaurant}
            {burgerRestaurantWeb}
            {burgerAddress}
          </th>
          <span>
          <button onClick={likeHandleClick} type="like-button" class="btn btn-success btn-sm">Great!!</button>
          {likesForPage}
          <button onClick={dislikeHandleClick} type="dis-like-button" class="btn btn-danger btn-sm">Nasty!!</button>
          {dislikesForPage}
          {favouritesButton}
          </span>
        </tbody>

        <form class="comment-form" onSubmit={handleSubmit} action="submit" name="comment-form" id="comment-form">
          <textarea id="burger-comments" form="commentform" name="burger-comments" rows="4" cols="50">
          </textarea>

          <p>Comment</p>
          <div class="form-name mb-4">
            <input type="text" id="name-comments" form="commentform" cols="50" />
            <p>Enter Your Name</p>
          </div>
          <button type="comment-button" class="btn btn-primary btn-sm">
            Post comment
            </button>
        </form>
      </div>
    </div>
  </div>
  )
};