import React from 'react'
import BurgerNavbar from './Navbar'
import './AddBurger.css'

export default function AddBurger(props) {


  // render() {
  //   const {burger_name, last_name, email, password, password_confirmation} = this.state
  return (
    <div>
      <BurgerNavbar />
      <h1>AddBurger Page</h1>

      <form id='addBurgerForm' action="submit">
        <input 
          class="addBurgerField"
          placeholder="Burger Name"
          type="text" 
          value='' 
          name="burger_name"
          required
          />
        <input 
          class="addBurgerField"
          placeholder="Restaurant Name"
          type="text" 
          value="" 
          name="restaurant_name"
          required
          />
        <input
          class="addBurgerField"
          placeholder="Restaurant URL"
          type="text" 
          value="" 
          name="website"
          required
          />
        <input 
          class="addBurgerField"
          placeholder="Burger Image URL"
          type="text" 
          value="" 
          name="burger_image"
          />
        <input 
          class="addBurgerField"
          placeholder="Ingredients - seperate with comma"
          type="text" 
          value="" 
          name="ingredients"
          required
          />
        <input 
          class="addBurgerField"
          placeholder="Address Number"
          type="text" 
          value="" 
          name="number_address"
          required
          />
        <input 
          class="addBurgerField"
          placeholder="Street Name"
          type="text" 
          value="" 
          name="street_name"
          required
          />
        <input 
          class="addBurgerField"
          placeholder="City"
          type="text" 
          value="" 
          name="city"
          required
          />
        <input 
          class="addBurgerField"
          placeholder="Postal Code"
          type="text" 
          value="" 
          name="postal_code"
          />
        <input 
          class="addBurgerField"
          placeholder="Country"
          type="text" 
          value='' 
          name="country"
          required
          />
          <button type="submit" form="addBurgerForm">Submit</button>
      </form>
    </div>
  )
  
  
  

};