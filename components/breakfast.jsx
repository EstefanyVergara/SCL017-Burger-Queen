import React, { useEffect } from 'react'
import Ordersummary from "./orderSummary";
import "../components/menu.css";
import {NavBreakfast} from "./Nav";
import data from './data/menu.json'


export const Breakfast = () => {

    const dataBreakfast = data.Breakfast
    console.log(dataBreakfast);


    const [breakfast, setBreakfast] = React.useState(null)

    React.useEffect(()=> {
      console.log(useEffect)
    }
    )
    

  return (
    <div className="menuContainer">
      <Ordersummary />
      <NavBreakfast/>
    </div>
  )
}
