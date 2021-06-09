import React from "react";
import axios from "axios"
import Results from './Results'

export default function SingleBurg(props) {
  // const [term, setTerm] = useState("");
  // const [results, setResults] = useState([]);
  // const [allResults, setAllResults] = useState([]);
  // const [dropDownFilter, setDropDownFilter] = useState('All');

  // useEffect(() => {
  //   const burgerList = `http://localhost:3001/api/extburgers`
  //   axios.get(burgerList).then(response => {
  //     setAllResults([...response.data])
  //     setResults([...response.data])
  //     // console.log("OVER HERE", ...response.data)
  //   });
  // },[])


  // useEffect(()=> {
  //   //make this conditional with what is active on the drop down menu
  //   //enable set to lowercase before search
  //   //remove search button??

  //   if (dropDownFilter === 'All') {
  //     const newResults = allResults
  //     setResults(newResults)
  //   } else if (dropDownFilter === 'Restaurant') {
  //     const newResults = allResults.filter(res => res.restaurant.includes(term))
  //     setResults(newResults)
  //   } else if (dropDownFilter === 'Ingredients') {
  //     const newResults = allResults.filter(res => res.ingredients.includes(term))
  //     setResults(newResults)
  //   } else if (dropDownFilter === 'Vegetarian') {
  //     const newResults = allResults.filter(res => res.isVegetarian === true && res.ingredients.includes(term))
  //     setResults(newResults)
  //   }
  // },[term, dropDownFilter])



  // const burgerObj = {}
  //   for(const burger of results) {
  //     const key = burger.restaurant
  //     burgerObj[key] = burger;
  //     burgerObj[key].count = burgerObj[key].count ? burgerObj[key].count + 1 : 1
  // }
  // const burgers = Object.values(burgerObj)
  // const extRestaurantList = burgers.map(
  //   (burger) => (
  //     <ul>
  //       {results.filter(res => res.restaurantID === burger.restaurantID).map(burger => ( 
  //         <li key={`${burger.id}`}>
  //         <img src={burger.image} height="100" width="100" alt="burger"></img>
  //         <span>{burger.name}</span>
  //           <a href={`http://localhost:3000/restaurants/burgers/${burger.restaurantID}`}>{burger.restaurant}</a>
  //       </li>))}

  //     </ul>))
    
    

  return (
    <article >
    </article>
  );
}
