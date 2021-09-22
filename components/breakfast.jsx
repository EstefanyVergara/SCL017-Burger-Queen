import React from 'react'
import Ordersummary from "./orderSummary";
import "../components/menu.css";
import {NavBreakfast} from "./Nav";

export const Breakfast = () => {
  return (
    <div className="menuContainer">
      <Ordersummary />
      <NavBreakfast/>
    </div>
  )
}
