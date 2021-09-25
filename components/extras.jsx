import React from 'react'
import Ordersummary from "./orderSummary";
import "../components/menu.css";
import {NavExtras} from './Nav'
import data from './data/menu.json'


export const Extras = () => {

  const dataExtras = data.extras;
  const addExtras = data.addExtra;


  return (
    <div classNameName="menuContainer">
    <Ordersummary />
    <NavExtras/>

    <div classNameName="nameMenu">
        <img src={"https://imgur.com/yadMCBx.png"} classNameName="breakfastIcon" alt="..."/>
        <h1 classNameName="titleBreakfast" > EXTRAS </h1>
      </div>
      <div classNameName="Menu">
        {dataExtras.map((product) => (
          <div key={product.id} classNameName="cardMenu ">
            <img src={product.img} classNameName="card-img-top" alt="..."/>
            <div classNameName ="card-body">
              <h5 classNameName ="card-title">{product.name}</h5>
              <p classNameName ="card-price">${product.price}</p>
            </div>
        </div>
        ))
        }
      </div>

      <div className="dropdown">
                <button className="btnBurgir btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">{[addExtras[0]]}</button>
                  <button className="dropdown-item" type="button">{[addExtras[1]]}</button>
                </div>
              </div> 
  </div>
  )
}




