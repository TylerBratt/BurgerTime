import React, { useState, setState, useReducer, reset, useEffect } from "react";
import BurgerNavbar from './Navbar'
import axios from 'axios'
import useApplicationData from '../hooks/useApplicationData'
import OrderLinks from './OrderLinks'
import {
  useParams,
} from "react-router-dom";
import {
  UPDATE_FAVOURITE_DATA, UPDATE_COMMENT_DATA, UPDATE_LIKES_DATA
} from '../reducer/data_reducer';
import "./Burger.css"
import SocialFollow from "./SocialFollow"

const favouriteStamp = require('../Images/favourite-stamp.png')
const vegetarianStamp = require('../Images/vegetarian.png')

export default function Burger(props) {
  const { state, dispatch } = useApplicationData();
  const { id } = useParams();
  const burger_id = id;
  let favouritesButton
  let favouriteImage
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
      favouritesButton = <div></div>
    } else if (user) {
      favouritesButton = <button onClick={handleClick} type="favourites-button" className="btn btn-primary btn-sm">Add to Favourites!!</button>
    } else favouritesButton = <div></div>

    if (userfavs) {
      favouriteImage = (<a href={`/favourites`}><img src={favouriteStamp} className="favourite-image" height="50" width="100"></img></a>)
    } else {
      favouriteImage = <div></div>
    }

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
    if (!burgerForm || !nameForm) {
      console.log("Form Incomplete")
      alert("Please fill out both Name and Comment!");
    } else {
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
    }
  };



  const commentsForBurger = state.comments.filter(comment => comment.burger_id == burger_id)
  const commentsForPage = commentsForBurger.reverse().map((comment) =>
  (
    <div className="comment-list">
      <div className="comment-name-date-container">
        {comment.full_name}
        <div className="date">
          {(comment.created_at instanceof Date) ? comment.created_at.toLocaleDateString() : new Date(comment.created_at).toLocaleDateString()}
        </div>
      </div>
      <div>
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

  const burgerName = (<span>{name}</span>)
  const burgerRestaurant = (<a>{restaurant}</a>)
  const burgerIngredients = (<li key={id}> <p>{ingredients}</p></li>);
  const burgerDescription = (<p>{description}</p>);
  const burgerRestaurantWeb = (<a href={`${web}`}>{web}</a>);
  const burgerRestaurantBrand = (<a href={`${web}`}><img src={brand} width="100"></img></a>);
  const burgerImage = (<div className="burger-image"><img src={image} className="burger-image1" height="250" width="250"></img></div>);
  const burgerAddress = addresses.map((a) => (<address key={a.addressID}>{a.number} {a.line1}, {a.line2}, {a.postalCode}</address>));

  let burgerType
  if (isVegetarian) {
    burgerType = (<a><img src={vegetarianStamp} class="favourite-image" height="50" width="50"></img></a>)
  } else {
    burgerType = <div></div>
  }

  return (
    <div className="page-background">
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="NZACY53u"></script>
      <BurgerNavbar />

      <div className="temp-card-burger">
        <div className="card-header">
          <h1 className="burger-name">{burgerName}
            {burgerType}
          </h1>
          {/* <table></table> */}
        </div>
        <div className="burger-card">
          <span>
            {burgerImage}
          </span>
          <div className="right-card">
            <h4 className="card-text">
              {burgerDescription}
            </h4>
            <h5>
              {burgerIngredients}
            </h5>
            <div className="like-dislike-burger">
              <div className="fav-button">
                {favouritesButton}
                {favouriteImage}
              </div>
              <div className='likeDislike'>
                <div className='likes'>
                  <button onClick={likeHandleClick} type="like-button" className="btn btn-success btn-sm">Great!!</button>
                  {likesForPage}
                </div>
                <div classNames='dislikes'>
                  <button onClick={dislikeHandleClick} type="dis-like-button" className="btn btn-danger btn-sm">Nasty!!</button>
                  {dislikesForPage}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="burgername">
      </div>

      <div className="main-content">
        <div className="left-main">
          <section>
            {commentsForPage}
          </section>
        </div>
        <div className="right-main">
          <section className="website-info">
            <div className="website-info-styling">
              <div className="address_head">
                {burgerRestaurantBrand}
                {burgerRestaurant}
              </div>
              <div className="address_body">
                {burgerRestaurantWeb}
                {burgerAddress}
              </div>
            </div>
          </section>

          <form className="comment-form"
            onSubmit={handleSubmit}
            action="submit"
            name="comment-form"
            id="comment-form">
            <textarea
              id="burger-comments"
              form="commentform"
              name="burger-comments"
              rows="4"
              cols="50"
              required>
            </textarea>
            <p>Comment</p>
            <div className="form-name mb-4">
              <input
                type="text"
                id="name-comments"
                form="commentform"
                cols="50"
                required/>
              <p>Enter Your Name</p>
            </div>
            <button type="comment-button" className="btn btn-primary btn-sm">
              Post comment
            </button>
          </form>
        </div>
      </div>
      <SocialFollow />
    </div>
  )
};