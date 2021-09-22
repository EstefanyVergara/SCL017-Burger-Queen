import React from 'react'
import Ordersummary from "./orderSummary";
import "../components/menu.css";
import {NavBurgir} from './Nav'

export const Burgir = () => {
  return (
    <div className="menuContainer">
      <Ordersummary />
      <NavBurgir/>
    </div>
  )
}
