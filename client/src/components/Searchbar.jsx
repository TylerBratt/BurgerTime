import React, { useState, useEffect, useCallback  } from 'react'
import useDebounce from "../hooks/useDebounce";
import useApplicationData from '../hooks/useApplicationData'
import './Searchbar.css'

export default function Searchbar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);
  const { state, dispatch } = useApplicationData();
  const [dropSelect, setDropSelect] = useState('All')
  const onSearch = useCallback(props.onSearch, [term]);


  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);
  // console.log(term);
  
  const vegFilter = state.extburgers.filter(list => list.isVegetarian === true)
  
  const ingredientFilter = state.extburgers.sort(list => list.ingredients)


  return (
  <div>
    <div id='burger-searchbar'>
    <select id='selUser'  
            value={dropSelect} 
            onChange={(evt) => {
            props.onDropDownChange(evt.target.value)
            setDropSelect(evt.target.value)
            }}>

      <option value='All'>Search by</option> 
      <option value='Restaurant'>Restaurant</option> 
      <option value='Ingredients'>Ingredient</option> 
      <option value='Vegetarian'>Vegetarian</option> 
      <option value='Location'>Location</option> 
    </select>
    
    <form onSubmit={event => event.preventDefault()}>
      <input 
        type='text' 
        placeholder='Enter Your Choice!'
        id='input_field' 
        name="search"
        value={value}
        spellCheck="false"
        onChange={event => setValue(event.target.value.toLowerCase())}
        />
    </form>
    
    <br/>
      <div id='result'></div>
  </div>
  </div>
  )
};