import React from 'react'
import Ordersummary from "./orderSummary";
import "../components/menu.css";
import {NavBurgir} from "./Nav";
import data from './data/menu.json'


export const Burgir = () => {

    const dataBurgir = data.burgir
    const dataTypeBurgir = data.typeBurgir
    const dataAdd = data.add
    

  return (
    <div className="menuContainer">
      <Ordersummary />
      <NavBurgir/>
      <div className="nameMenu">
        <img src={"https://imgur.com/v6EZtbD.png"} className="breakfastIcon" alt="..."/>
        <h1 className="titleBreakfast" > BURGIRS </h1>
      </div>
      <div className="Menu">
        {dataBurgir.map((product) => (
          <div key={product.id} className="cardMenu ">
            <img src={product.img} className="card-img-top" alt="..."/>
            <div className ="card-body">
              <h5 className ="card-title">{product.name}</h5>
              <p className ="card-price">${product.price}</p>
                <button className="btnBurgir btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2" multiple required>
                <button class="dropdown-item" type="button">{dataTypeBurgir[0]} </button>
                <button class="dropdown-item" type="button">{dataTypeBurgir[1]} </button>
                <button class="dropdown-item" type="button">{dataTypeBurgir[2]} </button>
                <div class="dropdown-divider"></div>
                  <div className="checkbox">
                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Queso"/> {dataAdd[0].name} ${dataAdd[0].price} 
                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Huevo"/> {dataAdd[1].name}  ${dataAdd[1].price}
                  </div>
                </ul>

            </div>
        </div>
        ))
        } 
        

      </div>

    </div>
  )
}
