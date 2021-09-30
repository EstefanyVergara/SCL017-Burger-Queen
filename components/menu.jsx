import React from "react";
import  NavMenu  from "./NavMenu";
import Mesas from "./mesas";
import Ordersummary from "./orderSummary";
import "../components/css/menu.css";
import data from "./data/menu.json";
import { useState } from "react";

function Menu({ mesero, setMesa, mesa }) {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }else{
      setCartItems([...cartItems, {...product, qty:1}]);
    }
  };

  return (
    <div className="menuContainer">
      <Ordersummary onAdd= {onAdd} cartItems={cartItems} mesero={mesero} mesa={mesa} />
      <NavMenu onAdd= {onAdd} products={products} />
      <Mesas setMesa={setMesa} />
    </div>
  );
}

export default Menu;
