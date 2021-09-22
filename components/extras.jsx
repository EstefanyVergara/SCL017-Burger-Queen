import React from 'react'
import Ordersummary from "./orderSummary";
import "../components/menu.css";
import {NavExtras} from './Nav'

export const Extras = () => {
  return (
    <div className="menuContainer">
    <Ordersummary />
    <NavExtras/>
  </div>
  )
}




