import React, { useState }from 'react'
import BurgerNavbar from './Navbar'
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
    address_number:"",
    street_name:"",
    city:"",
    postal_code:"",
    country:"",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;

  }
  return (
    <div>
      <BurgerNavbar />
      <h1>AddBurger Page</h1>

      <form id='addBurgerForm' action="submit" onSubmit={event => event.preventDefault()}>
        <input 
          class="addBurgerField"
          placeholder="Burger Name"
          type="text" 
          value={state.name}
          name="burger_name"
          onChange ={handleChange}
          required
          />
        <input 
          class="addBurgerField"
          placeholder="Restaurant Name"
          type="text" 
          value={state.restaurant} 
          name="restaurant_name"
          onChange={handleChange}
          required
          />
        <input
          class="addBurgerField"
          placeholder="Restaurant URL"
          type="text" 
          value={state.website} 
          name="website"
          onChange={handleChange}
          required
          />
        <input 
          class="addBurgerField"
          placeholder="Burger Image URL"
          type="text" 
          value={state.imageURL} 
          name="burger_image"
          onChange={handleChange}
          />
        <input 
          class="addBurgerField"
          placeholder="Ingredients - seperate with comma"
          type="text" 
          value={state.ingredients} 
          name="ingredients"
          onChange={handleChange}
          required
          />
        <input 
          class="addBurgerField"
          placeholder="Address Number"
          type="text" 
          value={state.address_number} 
          name="number_address"
          onChange={handleChange}
          required
          />
        <input 
          class="addBurgerField"
          placeholder="Street Name"
          type="text" 
          value={state.street_name} 
          name="street_name"
          onChange={handleChange}
          required
          />
        <input 
          class="addBurgerField"
          placeholder="City"
          type="text" 
          value={state.city} 
          name="city"
          onChange={handleChange}
          required
          />
        <input 
          class="addBurgerField"
          placeholder="Postal Code"
          type="text" 
          value={state.postal_code} 
          name="postal_code"
          onChange={handleChange}
          />
        <input 
          class="addBurgerField"
          placeholder="Country"
          type="text" 
          value={state.country} 
          name="country"
          onChange={handleChange}
          required
          />
          <button type="submit" form="addBurgerForm">Submit</button>
      </form>
    </div>
  )
  
  
  

};