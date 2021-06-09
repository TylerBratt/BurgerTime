import React from "react";
import Burger from './Burger'
import useApplicationData from '../hooks/useApplicationData'

export default function Results(props) {
  const { state, dispatch } = useApplicationData();
  

  return state.extburgers.map(burger => {
    return <Burger key={burger.Id} {...burger} />;
  });
}
