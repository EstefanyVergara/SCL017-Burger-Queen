import React from 'react'
import Ordersummary from "./orderSummary";
import "../components/menu.css";
import {NavBreakfast} from "./Nav";
import data from './data/menu.json'


export const Breakfast = () => {

    const dataBreakfast = data.Breakfast
    console.log(dataBreakfast);
    

  return (
    <div classNameName="menuContainer">
      <Ordersummary />
      <NavBreakfast/>
     
    </div>
  )
}
