import React from 'react'
import Button from 'react-bootstrap/Button'
import './Home.css'


export default function Home(props) {
  return(
  <div>
  <h1>Home Page</h1>
    <section class='table'>
      <Button variant="light">Burgers</Button>
      <Button variant="light">Restaurant</Button>
      <Button variant="light">Search</Button>
      <Button variant="light">About Us</Button>

    </section>
  </div>
  )
  
};