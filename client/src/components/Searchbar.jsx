import React, { useState, useEffect, useCallback  } from 'react'
import useDebounce from "../hooks/useDebounce";
import useApplicationData from '../hooks/useApplicationData'

export default function Searchbar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);
  const { state, dispatch } = useApplicationData();
  const onSearch = useCallback(props.onSearch, [term]);


  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);
  // console.log(term);
  
  const vegFilter = state.extburgers.filter(list => list.isVegetarian === true)
  
  const ingredientFilter = state.extburgers.sort(list => list.ingredients)


  return (
  <div>
    <select id='selUser'>
      <option value='0'>Search by</option> 
      <option value='1'>Restaurant</option> 
      <option value='2'>Ingredient</option> 
      <option value='3'>Vegetarian</option> 
      <option value='4'>Location</option> 
    </select>
    
    <form onSubmit={event => event.preventDefault()}>
      <input 
        type='text' 
        placeholder='Leave empty to view all options'
        id='input_field' 
        name="search"
        value={value}
        spellCheck="false"
        onChange={event => setValue(event.target.value)}
        />
      <input 
        type='button' 
        value='Search'
        id='search_btn' 
        name="search_btn"/>
    </form>
    
    <br/>
      <div id='result'></div>
  </div>
  )
};