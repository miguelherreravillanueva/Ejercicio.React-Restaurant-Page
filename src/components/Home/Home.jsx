import React from 'react'
import "./Home.css"

const Home = (props) => {
  return (
    <p className='home'> Take a look to our {props.restaurant.name}' menu 
    {/* <li>{props.dishes}</li> */}
    </p>
  )
}
    export default Home
