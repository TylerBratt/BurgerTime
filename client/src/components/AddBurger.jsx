import React, { useState }from 'react'
import BurgerNavbar from './Navbar'
import axios from 'axios'
import { NEW_BURGER_DATA } from '../reducer/data_reducer'
import useApplicationData from '../hooks/useApplicationData'
import './AddBurger.css'

export default function AddBurger(props) {
  const [value, setValue] = useState("");
  const { state, dispatch } = useApplicationData({
    name: "",
    restaurant: "",
    website:"",
    imageURL:"",
    ingredients:"",
    isVegetarian: false,
    address_number:"",
    street_name:"",
    city:"",
    postal_code:"",
    country:"",
  });


  const handleInputChange = (event) =>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const burgerName = document.getElementById('burgerName').value
    const burgerRestaurant = document.getElementById('burgerRestaurant').value
    const burgerWebsite = document.getElementById('burgerWebsite').value
    const burgerImage = document.getElementById('burgerImage').value
    const burgerIngredients = document.getElementById('burgerIngredients').value
    const burgerAddressNumber = document.getElementById('burgerAddressNumber').value
    const burgerStreetName = document.getElementById('burgerStreetName').value
    const burgerCity = document.getElementById('burgerCity').value
    const burgerPostalCode = document.getElementById('burgerPostalCode').value
    const burgerCountry = document.getElementById('burgerCountry').value
    const burgerVegetarian = document.getElementById('burgerVegetarian').value

    const randomIntFromInterval = (min, max)=> {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const largeRandInt = randomIntFromInterval(500, 10000)
    const smallRandInt = randomIntFromInterval(50, 100)
    let newBurger ={
      // id: largeRandInt,//between 500 - 10000
      name:burgerName,
      restaurant:burgerRestaurant,
      restaurantID: largeRandInt, //between 500 - 10000
      brand:"adsf",
      web:burgerWebsite,
      image:burgerImage,
      description:"asdf",
      ingredients:burgerIngredients,
      optionals:"asdf",
      isVegetarian:burgerVegetarian,
      addressID: smallRandInt, //between 50-100
      number:burgerAddressNumber,
      line1:burgerStreetName,
      line2:burgerCity,
      postalCode:burgerPostalCode,
      country:burgerCountry
    }
    
    console.log('EVT FIRED', burgerName,burgerRestaurant,burgerWebsite,burgerImage,burgerIngredients,burgerAddressNumber,burgerStreetName,burgerCity,burgerPostalCode,burgerCountry,burgerVegetarian)


    axios.post('/api/extburgers', {newBurger})
    .then(response => {
      dispatch({
        type: NEW_BURGER_DATA,
        newBurgers: response.data.newBurger
      })
      document.getElementById('burgerName').value = ""
      document.getElementById('burgerRestaurant').value = ""
      document.getElementById('burgerWebsite').value = ""
      document.getElementById('burgerImage').value = ""
      document.getElementById('burgerIngredients').value = ""
      document.getElementById('burgerAddressNumber').value = ""
      document.getElementById('burgerStreetName').value = ""
      document.getElementById('burgerCity').value = ""
      document.getElementById('burgerPostalCode').value = ""
      document.getElementById('burgerCountry').value = ""
      document.getElementById('burgerVegetarian').value = null
    })
    .catch(error => console.log('api errors:', error))
  };

  return (
    <div>
      <BurgerNavbar />
      <div class='addburger_container'>
      <form id='addBurgerForm' action="submit" onSubmit={handleSubmit}>
        <input 
          className="addBurgerField"
          id="burgerName"
          placeholder="Burger Name"
          type="text" 
          value={state.name}
          name="burger_name"
          onChange ={handleInputChange}
          required
          />
        <input 
          className="addBurgerField"
          id="burgerRestaurant"
          placeholder="Restaurant Name"
          type="text" 
          value={state.restaurant} 
          name="restaurant_name"
          onChange={handleInputChange}
          required
          />
        <input
          className="addBurgerField"
          id="burgerWebsite"
          placeholder="Restaurant URL"
          type="text" 
          value={state.website} 
          name="website"
          onChange={handleInputChange}
          required
          />
        <input 
          className="addBurgerField"
          id="burgerImage"
          placeholder="Burger Image URL"
          type="text" 
          value={state.imageURL} 
          name="burger_image"
          onChange={handleInputChange}
          />
        <input 
          className="addBurgerField"
          id="burgerIngredients"
          placeholder="Ingredients - seperate with comma"
          type="text" 
          value={state.ingredients} 
          name="ingredients"
          onChange={handleInputChange}
          required
          />
        <input 
          className="addBurgerField"
          id="burgerAddressNumber"
          placeholder="Address Number"
          type="text" 
          value={state.address_number} 
          name="number_address"
          onChange={handleInputChange}
          required
          />
        <input 
          className="addBurgerField"
          id="burgerStreetName"
          placeholder="Street Name"
          type="text" 
          value={state.street_name} 
          name="street_name"
          onChange={handleInputChange}
          required
          />
        <input 
          className="addBurgerField"
          id="burgerCity"
          placeholder="City"
          type="text" 
          value={state.city} 
          name="city"
          onChange={handleInputChange}
          required
          />
        <input 
          className="addBurgerField"
          id="burgerPostalCode"
          placeholder="Postal Code"
          type="text" 
          value={state.postal_code} 
          name="postal_code"
          onChange={handleInputChange}
          />
        <input 
          className="addBurgerField"
          id="burgerCountry"
          placeholder="Country"
          type="text" 
          value={state.country} 
          name="country"
          onChange={handleInputChange}
          required
          />
        <label>
          Is Vegetarian?:
          <input
            name="isVegetarian"
            id="burgerVegetarian"
            type="checkbox"
            checked={state.isVegetarian}
            onChange={handleInputChange} />
        </label>

          <button type="submit" form="addBurgerForm">Submit</button>
      </form>
      <div class='addburger_background'>
      </div>
      </div>
    </div>
  )
};