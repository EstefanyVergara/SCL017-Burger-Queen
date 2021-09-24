import React from 'react'
import Ordersummary from "./orderSummary";
import "../components/menu.css";
import {NavBreakfast} from "./Nav";
import data from './data/menu.json'


export const Breakfast = () => {

    const dataBreakfast = data.Breakfast
    console.log(dataBreakfast)
    

  return (
    <div className="menuContainer">
      <Ordersummary />
      <NavBreakfast/>

      <div className="breakfastMenu">
        
        <div className="card">
          <img src={dataBreakfast[0].img} className="card-img-top" alt="..."/>
          <div className ="card-body">
            <h5 className ="card-title">{dataBreakfast[0].product}</h5>
            <p className ="card-price">${dataBreakfast[0].price}</p>
          </div>
        </div>
        

      </div>

    </div>
  )
}
