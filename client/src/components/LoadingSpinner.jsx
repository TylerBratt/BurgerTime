import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

export const LoadingSpinner = (props) => {
 const { promiseInProgress } = usePromiseTracker();

  return (
    <div>
    {
      (promiseInProgress === true) ?
      <Loader type="Circles" color="#212529" secondaryColor="EEEEEE" height="250" width="100%" timeout={3000}/>

      // <h3>Hey I'm a spinner loader wannabe !!!</h3>
      :
        null
    }
  </div>
  )
};