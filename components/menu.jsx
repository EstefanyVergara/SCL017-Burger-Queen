import React, { useState } from "react";
import NavMenu from "./NavMenu";
import Mesas from './mesas'
import Ordersummary from "./orderSummary";
import "../components/css/menu.css";
import data from "./data/menu.json"


export const Menu = ({mesero, setMesa, mesa}) => {

  const {products} = data;
  const [order, setOrder] = useState([]);
  const addItem = (product) => {
    const itemExist = order.find (x => x.id === product.id);
      if (itemExist) {
        setOrder (order.map(x => x.id === product.id ? {...itemExist, qty: itemExist.qty +1}:x 
          )
          );
      } else {
        setOrder([...order, {...product, qty:1}]);
      }
  }


  return (
    <div className="menuContainer">
      <Ordersummary products={products} addItem={addItem} order={order} mesero={mesero} mesa={mesa}/>
      <NavMenu addItem={addItem} products={products}/>
      <Mesas  setMesa={setMesa} />
    </div>
  );
  
};

export default Menu;
