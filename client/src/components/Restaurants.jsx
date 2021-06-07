import React from 'react'
import BurgerNavbar from './Navbar'
import useApplicationData from '../hooks/useApplicationData'

export default function Restaurants(props) {
  const { state, dispatch } = useApplicationData();

  // const burgerObject = state.extburgers.map((burgerObj)=>{ burgerObj.addresses.map((address) =>{console.log(address)})})


const burgerObj = {}
  for(const burger of state.extburgers) {
    const key = burger.restaurant
    burgerObj[key] = burger;
    burgerObj[key].count = burgerObj[key].count ? burgerObj[key].count + 1 : 1
  }

  const burgers = Object.values(burgerObj)


  const extRestaurantList = burgers.map(
    (burger) => (
    <li key={burger.id}>
      <a href={`http://localhost:3000/Restaurants/${burger.id}`}>{burger.restaurant}</a>
      <ul>
        {burger.addresses.map((address) => (
          <li key={`${burger.id}-${address.addressID}`}>
            <span>{address.number}</span>
            <span>{address.line1}</span>
            <span>{address.line2}</span>
            <span>{address.postalCode}</span>
            <span>{address.country}</span>
          </li>))}
      </ul>
    </li>))



  // const restaurant = extRestaurantList.filter((object, index) => index === extRestaurantList.findIndex === (obj => JSON.stringify(obj) === JSON.stringify(object)));
  // console.log(restaurant)


  // const restaurant = [...new Set(extRestaurantList)]
  // console.log(restaurant)

    // ----------------------------------- //

    // function getUnique(arr){
    //   let uniqueArr = [];
    //   for(let value of arr) {
    //     if(uniqueArr.indexOf(value)=== -1){
    //       uniqueArr.push(value)
    //     }
    //   }
    //   return uniqueArr;
    // }
    // const restaurant = getUnique(extRestaurantList)

    // ------------------------------------------ //

      //   function groupBy(list, keyGetter) {
      //     const map = new Map();
      //     list.forEach((item) => {
      //         const key = keyGetter(item);
      //         const collection = map.get(key);
      //         if (!collection) {
      //             map.set(key, [item]);
      //         } else {
      //             collection.push(item);
      //         }
      //     });
      //     return map;
      // }
      // const restaurant = groupBy(extRestaurantList, burger => burger.name)
  
  return ( <div>
  <BurgerNavbar />
    <h1> Restaurants Page</h1>
    <ul>{extRestaurantList}</ul>

  </div>
  )
};