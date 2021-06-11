import React, { useState } from 'react'
import useApplicationData from '../hooks/useApplicationData'



export default function AddressDropDown (props) {
  const [dropSelect, setDropSelect] = useState('All')
  const { state, dispatch } = useApplicationData();

console.log(props)
  return (
    <div>
      <select id='selAddress'  
            value={dropSelect} 
            onChange={(evt) => {
            props.onDropDownChange(evt.target.value)
            setDropSelect(evt.target.value)
            }}>

      <option value='All'>Choose Location</option> 
      <option value=''></option> 
      <option value=''>Ingredient</option> 
      <option value=''>Vegetarian</option> 
      <option value=''>Location</option> 
    </select>
    </div>
  )
}